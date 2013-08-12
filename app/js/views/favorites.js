/**
 * Favorites list View
 *
 * Render favorite elements on load (loaded from localStorage/server)
 * Add tweet view to Favorites View
 *
 * @on {add:favorites collection} render new tweet in the list
 * @on {reset:favorites collection} render whole favorites list entirely
 *
 * Created by: roman.morozov
 * Date: 8/11/13 Time: 6:14 PM
 */

var app = app || {};

(function () {
	'use strict';

	var FavoritesView = Backbone.View.extend({
		el: '.js-favorites',

		initialize: function () {
			this.listenTo(app.favorites, 'reset', this.render);
			this.listenTo(app.favorites, 'add', this.addTweet);
		},

		render: function(collection) {
			_.each(collection.models, function(item) {
				var itemView = new app.TweetView({
					model: item,
					collection: app.favorites
				});
				this.$el.append(itemView.$el);
			}.bind(this));

			return this;
		},

		addTweet: function(model) {
			var tweet = new app.TweetView({model: model});
			this.$el.append( tweet.$el );
		}
	});

	app.feedView = new FavoritesView();

}());
