var express = require('express')
	, _ = require('underscore')
	, feeds = require('./lib/aggregator')
  , util = require('util');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.enable('view cache');
app.use(app.router);
app.use(require('connect-assets')());
app.use(express.static(__dirname + '/public'));


var news_feeds = feeds();

app.get('/',function(req,res){
    var mem = util.inspect(process.memoryUsage();
    console.log('rss',(mem.rss/1024)/1024 + 'Mb', 'heapTotal',(mem.heapTotal/1024)/1024 + 'Mb', 'heapUsed',(mem.heapUsed/1024)/1024 + 'Mb');
	res.render('index',{feeds: news_feeds});
});

app.get('/load',function(req,res){
    res.send('hello');
})

app.listen(3000);