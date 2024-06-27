import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const cartService = {
  async addToCart(userId: string, productId: string, quantity: number) {
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      throw new Error('Product not found');
    }

    if (product.stockQuantity < quantity) {
      throw new Error('Insufficient stock');
    }

    const cart = await prisma.cart.upsert({
      where: { userId },
      create: { userId },
      update: {},
    });

    const cartItem = await prisma.cartItem.upsert({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId,
        },
      },
      create: {
        cartId: cart.id,
        productId,
        quantity,
      },
      update: {
        quantity: { increment: quantity },
      },
    });

    await prisma.product.update({
      where: { id: productId },
      data: {
        stockQuantity: { decrement: quantity },
      },
    });

    return cartItem;
  },

  async getCart(userId: string) {
    const cart = await prisma.cart.findUnique({
      where: { userId },
      include: {
        cartItems: {
          include: {
            product: true,
          },
        },
      },
    });

    return cart;
  },
  async removeFromCart(userId: string, productId: string) {
    const cart = await prisma.cart.findUnique({
      where: { userId },
      include: { cartItems: true },
    });

    if (!cart) {
      throw new Error('Cart not found');
    }

    const cartItem = cart.cartItems.find(item => item.productId === productId);

    if (!cartItem) {
      throw new Error('Item not found in cart');
    }

    await prisma.$transaction([
      prisma.cartItem.delete({
        where: { id: cartItem.id },
      }),
      prisma.product.update({
        where: { id: productId },
        data: {
          stockQuantity: { increment: cartItem.quantity },
        },
      }),
    ]);

    return { message: 'Item removed from cart' };
  },

  async updateCartItemQuantity(userId: string, productId: string, newQuantity: number) {
    const cart = await prisma.cart.findUnique({
      where: { userId },
      include: { cartItems: true },
    });

    if (!cart) {
      throw new Error('Cart not found');
    }

    const cartItem = cart.cartItems.find(item => item.productId === productId);

    if (!cartItem) {
      throw new Error('Item not found in cart');
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      throw new Error('Product not found');
    }

    const quantityDifference = newQuantity - cartItem.quantity;

    if (product.stockQuantity < quantityDifference) {
      throw new Error('Insufficient stock');
    }

    const updatedCartItem = await prisma.$transaction([
      prisma.cartItem.update({
        where: { id: cartItem.id },
        data: { quantity: newQuantity },
      }),
      prisma.product.update({
        where: { id: productId },
        data: {
          stockQuantity: { decrement: quantityDifference },
        },
      }),
    ]);

    return updatedCartItem[0];
  },
};