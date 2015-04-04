var app=angular.module('app',[]);

app.controller('admin',['$scope','$http',function($scope,$http){
		$scope.employees="";
    	$http.get('/users')
    	.success(function(result){
    		console.log(result);
			 $scope.employees=result;
		});

		$scope.addEmployee=function(){
			$scope.email_addr={'email':$scope.email};

			$http.post('/users',$scope.email_addr)
			.success(function(result){
				console.log(result);
				$scope.employees=result;
			})
			.error(function(data,status){
				console.log('error');
			});		
		}

		$scope.a=function(){
			alert('hi');
		}
		
}])

.directive('employeeList',['deleteService', function(service){
	return{
		restrict:'AE',
		link:function($scope,$elem,$attr){
			$scope.deleteEmployee=function(){
				var User={'email':$elem.find('.email').html()};
				service.deleteUserDetails(User)
					.then(function(result){
						console.log($elem.parent('li'));
						$elem.parent('li').remove();
					});
			}
		},
		templateUrl:'/directives/employeeList.html',
		replace:false,
		scope:{
			employeeEmail:'@',
			deleteEmployee:'&',
			employees:'@'
		}
	}
}]);