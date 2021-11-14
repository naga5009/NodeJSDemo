const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Welcome from a Node.js app <p>Current Date and Time is <span id='date-time'></span>.</p>')
  res.json({data: Date.now()})
})
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
