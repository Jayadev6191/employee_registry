app.factory('deleteService', ['$http', function ($http) {
    return {
        deleteUserDetails: function (email) {
        	 console.log('called');
            return $http.post('/deleteUser',email)
            	.success(function(result){
					console.log(result);
					return result;
				})
				.error(function(data,status){
					console.log('error');
				});
        }
    }
}]);