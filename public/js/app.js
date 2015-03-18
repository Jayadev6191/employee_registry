var app=angular.module('app',[]);

app.controller('admin',['$scope','$http',function($scope,$http){
    	$http.get('/users')
    	.success(function(result){
			 $scope.list=result;
		});

		$scope.addEmployee=function(){
			$scope.email_addr={'email':$scope.email};

			$http.post('/users',$scope.email_addr).success(function(result){
				console.log(result);
			}).
			error(function(data,status){
				console.log(data);
			});		
		}
}]);