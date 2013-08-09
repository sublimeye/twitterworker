/**
 * index
 * Created by: roman.morozov
 * Date: 8/9/13 Time: 7:45 PM
 */

var data = JSON.stringify({screen_name: 'ciklum', count: 20});

$.ajax({
	type: "POST",
	url: 'http://localhost:8080/',
	data: data,
	success: function () {
		alert('success');
	},

	dataType: 'json'
});
