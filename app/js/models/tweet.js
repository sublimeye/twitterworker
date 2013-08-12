/**
 * tweet
 * Created by: roman.morozov
 * Date: 8/11/13 Time: 6:06 PM
 */

var app = app || {};

(function() {
	'use strict';

	app.TweetModel = Backbone.Model.extend({
		defaults: {
			isFavorite: false
		},

		initialize: function() {
			this.listenTo(this, 'change:isFavorite', this.updateFavoritesCollection);
		},

		updateFavoritesCollection: function(model, tweetAddedToFavorite) {
			app.favorites[tweetAddedToFavorite ? 'add' : 'remove'](model);
		}

	});

}());
