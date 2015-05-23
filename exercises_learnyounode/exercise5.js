var fs = require('fs');
var path = require('path');
var dirPath = process.argv[2];
var extension = process.argv[3];

fs.readdir(dirPath,
	function(err, files){
		if (err) {
			console.log("ERROR" + err);
		} else {
			for (var i = 0; i < files.length; i++) {
				if (path.extname(files[i]) === "."+extension) {
					console.log(files[i]);
				};
			}
		}
});
