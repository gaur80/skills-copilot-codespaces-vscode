// Create web server
var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function(req, res) {
    fs.readFile('comments.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post('/', function(req, res) {
    var comment = req.body;
    fs.readFile('comments.json', 'utf8', function(err, data) {
        var comments = JSON.parse(data);
        comments.push(comment);
        fs.writeFile('comments.json', JSON.stringify(comments), function(err) {
            res.end(JSON.stringify(comments));
        });
    });
});

app.listen(3000, function() {
    console.log('Server is running');
});