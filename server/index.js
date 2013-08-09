/**
 * Very simple http server that treat all requests as a request to twitter user_timeline
 * POST request data is sent as a parameters for Tweets request
 * @type {number}
 */

var serverPort = 8080;
var dummy = require("./dummyData");

var http = require("http");
// Using twitter oAuth/node module
var Twit = require('twit');

/**
 * Credentials of a temporary twitter application. Used by Twitter API 1.1/oAuth
 *
 * @type {Twit}
 */
var T = new Twit({
	consumer_key: 'CbunX2YHxJJhoj2j88vMw',
	consumer_secret: 'PUxRoliXMn9piWnEbpqD55E3osw3wMQMXqKqQxqSi4',
	access_token: '68557682-wxt2e7p3rQ0mIpMUfeTmsxjgItih4ytxZdJO2X2xw',
	access_token_secret: 'AsuIAdV91uKBaekN3zbX66i6MwaqiI0eKA5iMjNGsyQ'
});

/**
 * On each request to localhost make a request to Twitter
 * @param request
 * @param response
 */
function onRequest (request, response) {
	var requestData = '';

	/*
	Gathering user's POST data
	 */
	request.on('data', function (data) {
		requestData += data;
	});

	/*
	When request DATA is ready, make request to twitter
	 */
	request.on('end', function () {
		requestData = requestData && JSON.parse(requestData);
		console.log('Request Data: ', requestData);
		console.log('Getting Twitter data');

		// If we can't connect to Twitter / error occurs, send saved dummy data from the file
		T.get('statuses/user_timeline', requestData, function (err, reply) {
			if (err) {
				console.log('Failed getting data from Twitter. Sending saved Mocked data instead');
				sendResponse(response, dummy.data);
			} else {
				console.log('Successfully got data from Twitter');
				reply = reply && JSON.stringify(reply);
				// Send real Twitter data back to client
				sendResponse(response, reply);
			}
		});
	});
}

function sendResponse (response, reply) {
	response.writeHead(200, {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'content-type',
			'Access-Control-Allow-Methods': 'POST,GET,OPTIONS'}
	);

	response.write(reply);
	response.end();
}

http.createServer(onRequest).listen(serverPort);
console.log("Server has started. On port: ", serverPort);
