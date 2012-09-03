var express = require('express')
	, _ = require('underscore')
	, feeds = require('feed-read');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(app.router);
app.use(require('connect-assets')());
app.use(express.static(__dirname + '/public'));


var news_feeds = {};

feeds('http://news.ycombinator.com/rss',function(err, articles){
        if (err) throw err;
        news_feeds.hn = articles;
});

feeds('http://reddit.com/.rss',function(err,feed){
	news_feeds.reddit = feed;
});

feeds('http://digg.com/rss/topstories.xml', function(err,feed){
	news_feeds.digg = feed;
});

feeds('http://9gag.com/rss/site/feed.rss', function(err,feed){
	console.log(feed);
	news_feeds.gag = feed;
});


app.get('/',function(req,res){
	res.render('index',{feeds: news_feeds});
});

app.listen(3000);