/*
 * aggregator
 * https://github.com/johnymonster/node-aggregator
 *
 * Copyright (c) 2012 johnymonster
 * Licensed under the MIT license.
 */

 var feedread = require('feed-read')
 	, _ = require('underscore');

 var feed_links = {
		"hn": "http://news.ycombinator.com/rss",
		"reddit":"http://reddit.com/.rss",
		"digg":"http://digg.com/rss/topstories.xml",
		"gag":"http://9gag.com/rss/site/feed.rss"
	},
	news_feeds = {},
	minutesReload = 20 * 60 * 1000;

var agg = module.exports = function() {
	agg.getFeeds();
	agg.interval();
  return news_feeds;
};

agg.getFeeds = function(empty) {
	_.each(feed_links,function(url,key,list){
		console.log(url);
		feedread(url, function(err,feed){
			news_feeds[key] = feed;
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