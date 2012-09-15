/*
 * aggregator
 * https://github.com/johnymonster/node-aggregator
 *
 * Copyright (c) 2012 johnymonster
 * Licensed under the MIT license.
 */

 var feedread = require('feed-read')
 	, _ = require('underscore')
 	, FeedParser = require('feedparser');

 var feed_links = {
		"hn": "http://news.ycombinator.com/rss",
		"reddit":"http://reddit.com/.rss",
		"digg":"http://digg.com/rss/topstories.xml",
		"nyt":"http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml",
		"engadget":"http://www.engadget.com/rss.xml",
		"gag":"http://9gag.com/rss/site/feed.rss"
	},
	feed_burner = {
		"nprhome":"http://www.npr.org/rss/rss.php?id=1002",
		"huffington":"http://feeds.huffingtonpost.com/huffingtonpost/raw_feed",
		"imgur":"http://feeds.feedburner.com/ImgurGallery?max-results=25",
		"techcrunch":"http://feedproxy.google.com/TechCrunch",
		"google":"http://news.google.com/news?pz=1&cf=all&ned=us&hl=en&topic=h&num=3&output=rss"	
	}
	news_feeds = {},
	minutesReload = 5 * 60 * 1000;

var agg = module.exports = function() {
	agg.getFeeds();
	agg.interval();
  return news_feeds;
};

agg.getFeeds = function(empty) {
	_.each(feed_links,function(url,key,list){
		console.log(url);
		news_feeds[key] = [];
		feedread(url, function(err,feed){
			if(err) console.log(err);
			news_feeds[key] = feed;
		});
	});
	_.each(feed_burner,function(url,key,list){
		news_feeds[key] = [];
		var parser = new FeedParser();
		parser.parseUrl(url,{},function(err,meta,articles){
			if(err) console.log(err);
			else {
				console.log('feedparser',key);
				news_feeds[key] = articles
			}
		});
	});
	console.log('done');
}

agg.interval = function() {
	console.log('setting interval');

	setInterval(function(){
		console.log('getting feeds');
		agg.getFeeds();
	},minutesReload);
}