/**
 * feed view
 * Created by: roman.morozov
 * Date: 8/11/13 Time: 6:14 PM
 */

var app = app || {};

(function () {
	'use strict';

	var FeedView = Backbone.View.extend({
		el: '.js-feed',

		initialize: function () {
			this.listenTo(app.feed, 'sync', this.render);
			this.listenTo(app.feed, 'sync', this.removeLoader);
			this.listenTo(app.favorites, 'remove', this.makeFavorite)
		},

		render: function(collection) {
			_.each(collection.models, function(item) {

				var itemView = new app.TweetView({
					model: item,
					collection: app.feed
				});

				// makes "add" button disabled in feed list
				if (app.favorites.get(item.id)) {
					itemView.model.set('isFavorite', true);
				}

				this.$el.append(itemView.$el);
			}.bind(this));

			return this;
		},

		makeFavorite: function(model) {
			var tweet = app.feed.get(model.id);
			tweet && tweet.set('isFavorite', false);
		},

		removeLoader: function() {
			this.$el.removeClass('g-loader')
		}

	});

	app.feedView = new FeedView();

}());
