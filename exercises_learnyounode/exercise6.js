var filterFn = require('./module1');

filterFn(process.argv[2], process.argv[3], function(err, result){
	if (err){
		console.error("Error", err);
	}
	result.forEach(function(el) {
		console.log(el);
	});
});