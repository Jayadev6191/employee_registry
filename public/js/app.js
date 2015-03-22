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

		var self=$(this);
		$scope.deleteEmployee=function(self){
			alert(this);
		}
}]);


app.directive('employeeList',function(){
	return{
		restrict:'AE',
		link:function($scope,$elem,$attr){
			console.log($('this'));
			$scope.deleteEmployee=function(){
					console.log($(this).parents('li').find('.email').html());
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