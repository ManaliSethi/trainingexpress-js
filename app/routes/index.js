var express = require('express');
var router = express.Router();
// var viewid = 0;
var fs = require('fs');

// router.get('/', function(req, res) {
//   // res.json(session.);
// });

router.get('/', function(req, res) {
  
var sdata=req.app.get('sessiondata');
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = data.speakers;
  //update a viewid in JSON File 
  var viewid=sdata[0].viewid;
  viewid=viewid+1;
  sdata[0].viewid=viewid;
  // res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.writeFile('./app/data/session.json', JSON.stringify(sdata), 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });


  // console.log('Hello!\n');
   console.log('We have had ' + viewid + ' visits!\n');
 


  data.speakers.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  
  });
  // res.set('siteViews',vs)

  res.render('index', {
    pageTitle: 'Home',
    artwork: pagePhotos,
    speakers: pageSpeakers,
    pageID: 'home'
  });

});

module.exports = router;
