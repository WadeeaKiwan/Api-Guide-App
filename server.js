const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/dist'));
app.get(/.*/, (req, res) => {
  res.sendfile(__direname + '/dist/index.html');
});

app.listen(PORT, () => {
  console.log(`Server Started on port: ${PORT}`);
});
