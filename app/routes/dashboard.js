var express = require('express');
var router = express.Router();

router.get('/dashboard', function(req, res) {
  //  siteViews = req.app.get('siteViews');
   var sdata=req.app.get('sessiondata');
   var viewid=sdata[0].viewid;
   var siteViews='We have had ' + viewid + ' visits!\n';


  res.render('dashboard', {
    pageTitle: 'Dashboard',
    pageID: 'dashboard',
    siteViews:siteViews,
  });

});

module.exports = router;
