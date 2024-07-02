export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  price: number;
  categoryId: number; // Displayed as number in frontend
  stockQuantity: number;
  image: string;
}
