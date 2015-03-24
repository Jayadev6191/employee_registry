var app=angular.module('app',[]);

app.controller('admin',['$scope','$http',function($scope,$http){
    	$http.get('/users')
    	.success(function(result){
			 $scope.list=result;
		});

		$scope.addEmployee=function(){
			$scope.email_addr={'email':$scope.email};

			$http.post('/users',$scope.email_addr).success(function(result){
				alert(result);
				$scope.$apply(function(){
					$scope.list=result;	
				});
			}).
			error(function(data,status){
				console.log(data);
			});		
		}

		
}]);

app.factory('deleteService', ['$http', function ($http) {
    return {
        deleteUserDetails: function (email) {
            return $http.post('/deleteUser',email)
				.success(function(result){
					return result;
				}).
				error(function(){

				});
        }
    }
}]);

app.directive('employeeList',['deleteService', function(service){
	return{
		restrict:'AE',
		link:function($scope,$elem,$attr,$http){
			$scope.deleteEmployee=function(){
				var User={'email':$elem.find('.email').html()};
				service.deleteUserDetails(User)
						.then(function(result){
							console.log(result.data);
						});
				
			}
		},
		templateUrl:'/templates/employeeList.html',
		replace:false,
		scope:{
			employeeEmail:'@',
			deleteEmployee:'&'
		}
	}
}]);