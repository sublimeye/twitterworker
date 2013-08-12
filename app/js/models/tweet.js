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
			var dateString = new Date(this.get('created_at'));
			this.set('date', dateString.toLocaleDateString());

			this.listenTo(this, 'change:isFavorite', this.updateFavoritesCollection);
		},

		updateFavoritesCollection: function(model, tweetAddedToFavorite) {
			app.favorites[tweetAddedToFavorite ? 'add' : 'remove'](model);
		}

	});

}());
