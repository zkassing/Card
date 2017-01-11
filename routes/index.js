var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var multiparty = require('multiparty');

var date;
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.post('/make', function (req, res, next) {
    var form = new multiparty.Form();
    form.encoding = "uft-8";
    form.uploadDir = "/files/";
    form.parse(req,function (err,fields,files) {
        // console.log(fields,files);
        console.log(files);
        // console.log(files);

        

    })
    
    
    
    var to = req.body.to;
    var from = req.body.from;
    var content = req.body.content;
    var data = "<html>" +
        "<body>" +
        "<p>" + to + "</p>" +
        "<p>" + content + "</p>" +
        "<p>" + from + "</p>" +
        "</body>" +
        "</html>";
    date = new Date();
    date = date.getTime();
    var pt = path.normalize(__dirname + "/../public/view/");
    console.log(pt);
    fs.writeFile(pt + date + ".html", data, function (err) {
        if (err)throw err;
        res.redirect('/card');
    })
});
router.get('/card',function (req, res, next) {
    // console.log(req);
    res.render('card',{title:"生成成功",url:req.headers.host+"/view/"+date+".html"});
})
module.exports = router;
