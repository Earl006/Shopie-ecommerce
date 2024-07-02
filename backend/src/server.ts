import app from './app';
import dotenv from 'dotenv';
const cors = require('cors');
// import productRouter from './routes/productRoutes';

dotenv.config();

const PORT = process.env.PORT || 3000;
app.use(cors({
  origin: 'http://localhost:4200' // frontend url
}));
// // Use the product routes
// app.use('/api/product', productRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} . . .`);
});

// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import productRouter from './routes/productRoutes';


// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Apply CORS middleware
// app.use(cors({
//   origin: 'http://localhost:4200' // frontend url
// }));

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Use the product routes
// app.use('/api/product', productRouter);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT} . . .`);
// });

