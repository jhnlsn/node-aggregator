var express = require('express')
	, _ = require('underscore')
	, feeds = require('./lib/aggregator');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.enable('view cache');
app.use(app.router);
app.use(require('connect-assets')());
app.use(express.static(__dirname + '/public'));


var news_feeds = feeds();

app.get('/',function(req,res){
	res.render('index',{feeds: news_feeds});
});

app.get('/load',function(req,res){
    res.send('hello');
})

app.listen(3000);