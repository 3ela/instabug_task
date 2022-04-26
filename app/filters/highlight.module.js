angular
  .module('appModule')
  .filter('highlight', function ($sce) {
    return function (string, highlight) {
      const returndata = string.replace(new RegExp(highlight, 'gi'), '<span class="highlightedText">$&</span>');
      return $sce.trustAsHtml(returndata);
    };
  });
