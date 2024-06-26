import app from './app';
import dotenv from 'dotenv';
const cors = require('cors');

dotenv.config();

const PORT = process.env.PORT || 3000;
// app.use(cors({
//   origin: 'http://localhost:4200' // frontend url
// }));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} . . .`);
});
