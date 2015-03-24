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


app.directive('employeeList',function($http){
	return{
		restrict:'AE',
		link:function($scope,$elem,$attr){
			$scope.deleteEmployee=function(){
				var deleteUser=$elem.find('.email').html();
				$http.post('/deleteUser',deleteUser)
				.success(function(result){

				}).
				error(function(){

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
});