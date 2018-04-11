let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	let email = event.queryStringParameters.email;
	console.log(email);

	let response = {
		headers: {
    		'Content-Type': 'application/json'
		},
		body: "",
		statusCode: 200,
		isBase64Encoded: false
	}

	ddb.delete({
		TableName: 'contact_us',
		Key: {
			'email': email
		}
	}, function (err, data) {
		if (err) {
			//handle error
			console.log("Error");
		} else {
			//your logic goes here
			console.log("success");
		}
	});
	console.log(event);

	callback(null, JSON.parse(event));
}