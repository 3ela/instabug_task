angular
  .module('appModule')
  .component('employeesList', {
    templateUrl: 'components/employees-list/employees-list.html',
    controller: EmployeesListComponent,
    controllerAs: 'EmployeesListComponentVm',
    bindings: {
      employeesList: '<',
    },
  });

function EmployeesListComponent($scope, $state, $rootScope) {
  $scope.updatedText = $rootScope.text;

  $scope.$on('changeSearch', function (evt, data) {
    console.log('data', data);
    $scope.$apply(function () {
      $scope.updatedText = data;
      $state.go('.', { filter: data }, { notify: false });
    });
  });
}
