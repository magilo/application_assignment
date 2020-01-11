const express = require('express');
const quotes = require('random-movie-quotes')
const app = express();
const port = 3000;



app.use(express.static('public'));

app.get('/quote', (req, res) => {
  console.log(req)
  res.json({
    quote: quotes.getQuote()
  });
});


app.listen(port, () => console.log(`Awesome app listening on port ${port}!`));
