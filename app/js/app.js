/**
 * App initialization
 * Created by: roman.morozov
 * Date: 8/9/13 Time: 7:45 PM
 */

var app = app || {};

(function() {
	'use strict';

	// initializing Feed collection, retrieving tweets data
	var favorites = localStorage.getObject('favorites');
	favorites && app.favorites.reset(favorites);

	app.feed.fetch();

}());
