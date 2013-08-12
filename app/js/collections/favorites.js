/**
 * favorites
 * Created by: roman.morozov
 * Date: 8/11/13 Time: 5:59 PM
 */
var app = app || {};

(function() {
	'use strict';

	var TweetsFavorites = Backbone.Collection.extend({

		model: app.TweetModel,
		// url == favorites are stored in localStorage

		initialize: function() {
			this.on('add', this.updateStorage);
			this.on('remove', this.updateStorage);
		},

		updateStorage: function() {
			localStorage.setObject('favorites', this.models);
		}

	});

	app.favorites = new TweetsFavorites();
}());
