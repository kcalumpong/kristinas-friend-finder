// var express = require('express');
// var app = express();

var path = require('path');
// var PORT = process.env.PORT || 3000;

module.exports = function(app) {
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get("/*", function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}

// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
// })