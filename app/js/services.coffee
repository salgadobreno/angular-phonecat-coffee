
angular.module('phonecatServices', ['ngResource'])
  .factory 'Phone', ($resource) ->
    $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    })


