var fs = require('fs');
var path = require('path');

module.exports = function(dirPath, extension, callback){
	fs.readdir(dirPath, function(err, list){
		if (err){
			return callback(err);
		}
		callback(null, list.filter(function(el) {
				return path.extname(el) === "."+extension
			}));
	});
}