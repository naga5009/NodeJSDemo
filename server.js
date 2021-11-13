const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Welcome from a Node.js app Nov13!')
})
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
