import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';
import PerformancePageComponent from './pages/performance-page.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import EmployeesListFilter from './components/vue-components/employees-list-filter.vue';
import Page404 from './pages/404.vue';

angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
]);

angular.module('appModule').directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(Vue.component('performancePageComponent', PerformancePageComponent));
});

angular.module('appModule').directive('v404Page', (createVueComponent) => {
  return createVueComponent(Vue.component('page404Component', Page404));
});

angular.module('appModule').directive('vPerformanceChart', (createVueComponent) => {
  return createVueComponent(Vue.component('performanceChartComponent', PerformanceChartComponent));
});

angular.module('appModule').directive('employeesListFilter', (createVueComponent) => {
  return createVueComponent(Vue.component('EmployeesListFilter', EmployeesListFilter));
});
