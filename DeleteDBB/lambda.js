let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	let email = event.email;
	console.log(email);
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


	callback(null, 'Successfully executed');
}