
var bl = require('bl');
var http = require('http');

http.get(process.argv[2], function(response){
	response.pipe(bl(function (error, data) {
			if (error){
				console.error("Error", error);
			} else {
				var text  = data.toString();
				console.log(text.length);
				console.log(text);
			}
		}));
});