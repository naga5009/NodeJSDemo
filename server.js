const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Welcome from a Node.js app Nov 15th 8 22')  
})
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
