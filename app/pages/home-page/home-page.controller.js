angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees, $rootScope, $state) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.searchText = '';
  $rootScope.text = '';

  activate();

  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
      });
    homePageVm.searchText = $state.params.filter;
    $rootScope.text = $state.params.filter;
    $rootScope.$broadcast('changeSearch', $rootScope.text);
  }

  homePageVm.updateSearchText = (searchText) => {
    $rootScope.text = searchText;
    $rootScope.$broadcast('changeSearch', $rootScope.text);
  };
  homePageVm.clearSearchText = () => {
    $rootScope.text = '';
    $rootScope.$broadcast('changeSearch', $rootScope.text);
  };
}
