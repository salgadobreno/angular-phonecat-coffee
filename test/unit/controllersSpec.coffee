
describe 'PhoneCat controllers', ->

  beforeEach ->
    this.addMatchers({
      toEqualData:(expected) ->
        angular.equals(this.actual, expected)
    })

  beforeEach(module('phonecatServices'))

  describe 'PhoneListCtrl', ->
    scope = null
    ctrl = null
    $httpBackend = null

    beforeEach ->
      inject (_$httpBackend_, $rootScope, $controller) ->
        $httpBackend = _$httpBackend_
        $httpBackend.expectGET('phones/phones.json')
          .respond( [ {name:'Nexus S'}, {name:'Motorola DROID'} ])

        scope = $rootScope.$new()
        ctrl = $controller(PhoneListCtrl, {$scope: scope})


    it 'should create "phones" model with 2 phones fetched from xhr', ->
      expect(scope.phones).toEqual([])
      $httpBackend.flush()
      expect(scope.phones).toEqualData(
        [ {name:'Nexus S'}, {name:'Motorola DROID'} ]
      )

    it 'should set the default value of orderProp model', ->
      expect(scope.orderProp).toBe('age')


  describe 'PhoneDetailCtrl', ->
    scope = null
    ctrl = null
    $httpBackend = null
    xyzPhoneData = ->
      {
        name:'phone xyz',
        images:['image/url1.png', 'image/url2.png']
      }

    beforeEach ->
      inject (_$httpBackend_, $rootScope, $routeParams, $controller) ->
        $httpBackend = _$httpBackend_
        $httpBackend.expectGET('phones/xyz.json').respond(
          xyzPhoneData()
        )

        $routeParams.phoneId = 'xyz'
        scope = $rootScope.$new()
        ctrl = $controller(PhoneDetailCtrl, ($scope:scope))


    it 'should fetch phone detail', ->
      expect(scope.phone).toEqualData([])
      $httpBackend.flush()
      expect(scope.phone).toEqualData(
        xyzPhoneData()
      )






