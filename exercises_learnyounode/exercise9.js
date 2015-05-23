
var bl = require('bl');
var http = require('http');

var results = [];
var dataObtained = 0;

var getData = function(url, resultArray, arrayPos) {
	http.get(url, function(response){
		response.pipe(bl(function (error, data) {
			if (error){
				console.error("Error", error);
			} else {
				var text  = data.toString();
				resultArray[arrayPos] = text;
				dataObtained = dataObtained + 1;
			}
		}));
	});	
}

getData(process.argv[2], results, 0);
getData(process.argv[3], results, 1);
getData(process.argv[4], results, 2);



var _flagCheck = setInterval(function() {
    if (dataObtained == 3) {
        clearInterval(_flagCheck);

        console.log(results[0]);
        console.log(results[1]);
        console.log(results[2]);
    }
}, 100); // interval set at 100 milliseconds

