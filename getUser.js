module.exports = function (app) {
	app.get('/users',function(req,res){
		res.send('hi');
		// var user = mongoose.model('users',Schema); 
		// user.find({},function(err,users){
	 //    	console.log('users');
	 //    	res.send('users');
	 //  	});
	});
}
