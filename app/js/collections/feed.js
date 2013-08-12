/**
 * feed
 * Created by: roman.morozov
 * Date: 8/11/13 Time: 5:59 PM
 */
var app = app || {};

(function() {
	'use strict';

	var TweetsFeed = Backbone.Collection.extend({

		model: app.TweetModel,
		url: 'http://localhost:8080/feed'

	});

	app.feed = new TweetsFeed();
}());
