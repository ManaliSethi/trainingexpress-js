var express = require('express');
var router = express.Router();
var author=[];
var qs=[];
var randompush=[];

router.get('/quotes', function(req, res) {
  var quotes=req.app.get('quotes');

  quotes.quotes.forEach(function(item) {
    author.push(item.author);
    qs.push(item.quote);

  });
  for(let i=0;i<=10;i++){
    
    var h=Math.floor(Math.random()*qs.length);
    
    var randomItemquote = qs[h];
    var authors = author[h];
    randompush.push(randomItemquote);
    randompush.push(authors);
  }
 
  
  res.render('quotes', {
    pageTitle: 'Quotes',
    pageID: 'quotes',
    pageQs:randompush
  });
  author=[];
  qs=[];
   randompush=[];
 

});

module.exports = router;