var http = require('http');
http.get(process.argv[2], function(response){
	response.setEncoding("utf8");
	response.on("error", console.error)
	response.on("data", function (data) {
		console.log(data);
	});

	// tambien se puede escribir como
	response.on('data', console.log)
});