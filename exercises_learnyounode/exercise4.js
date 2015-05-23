var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, 'utf8', 
		function(err, text){
			if (err) {
				console.log("ERROR" + err);
			} else {
				var lines = text.split('\n').length -1;
				console.log(lines);
			}
});
