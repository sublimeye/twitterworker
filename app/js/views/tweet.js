/**
 * Single tweet View
 *
 *
 *
 * @on {change:isFocused:model} removes "disabled" attr from action-button element
 *
 * Created by: roman.morozov
 * Date: 8/11/13 Time: 6:14 PM
 */

var app = app || {};

(function() {
	'use strict';

	app.TweetView = Backbone.View.extend({
		tagName: 'article',
		className: 'tweet',
		actionButton: null,
		template: _.template( $('#tmpl-tweet').html() ),
		events: {
			'click .js-manage-favorite': 'manageFavorite'
		},

		initialize: function() {
			this.render();
			this.listenTo(this.model, 'change:isFavorite', this.updateFavButton);
		},

		render: function() {
			this.$el.html( this.template( this.model.attributes ) );
			this.actionButton = this.$el.find('.js-manage-favorite');
			return this;
		},

		manageFavorite: function() {
			var isFavorite = this.model.get('isFavorite');

			if (isFavorite) {
				this.removeTweet();
			}

			this.model.set('isFavorite', !isFavorite);
		},

		updateFavButton: function(model, isFavorite) {
			if (isFavorite) {
				this.actionButton.attr('disabled', 'disabled');
			} else {
				this.actionButton.removeAttr('disabled');
			}
		},

		removeTweet: function() {
			this.remove();
		}

	});

}());
