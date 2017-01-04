var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var date;
router.post('/',function (req, res, next) {
   var to = req.body.to;
   var from = req.body.from;
   var content = req.body.content;
   var data = "<html>" +
       "<head>" +
       "<meta charset='utf-8'>" +
       "</head>" +
       "<body>" +
       "<p>"+to+"</p>" +
       "<p>"+content+"</p>" +
       "<p>"+from+"</p>" +
       "</body>" +
       "</html>";
   date = new Date();
   var pt = path.normalize(__dirname+"/../public/view/");
   console.log(pt);
   fs.writeFile(pt+date.getTime()+".html",data,function (err) {
       if(err)throw err;
       res.redirect('/card');
   })
});

module.exports = router;