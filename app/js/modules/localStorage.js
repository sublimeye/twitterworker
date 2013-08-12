/**
 * localStorage
 * Created by: roman.morozov
 * Date: 8/12/13 Time: 11:25 AM
 */

Storage.prototype.setObject = function (key, value) {
	this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
	var value = this.getItem(key);
	return value && JSON.parse(value);
};

Storage.prototype.deleteObject = function (key) {
	delete this[key];
};
