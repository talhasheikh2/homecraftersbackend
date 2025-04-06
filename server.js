require('dotenv').config();
const app= require('./src/app');
const connectDB=require('./src/db')// Connect to MongoDB
connectDB();
// Start server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
