describe('Users factory', function() {
    var informationService, $httpBackend;

    beforeEach(angular.mock.module('app'));

    var windowObj = {location: {href: 'http://localhost:8888/hits/forwards'}};

    beforeEach(angular.mock.module(function($provide) {
        $provide.value('$window', windowObj);
    }));

    beforeEach(inject(function(_informationService_, $injector) {
        informationService = _informationService_;
        $httpBackend = $injector.get('$httpBackend');
        forwardsRequestHandler = $httpBackend.when('GET', '/auth.py')
            .respond({userId: 'userX'}, {'A-Token': 'xxx'});

        $httpBackend.expectGET('https://us-central1-userddata.cloudfunctions.net/helloWorld').respond(200,{data:'expected response'});
    }));

    it('should be defined', function() {
        var ishere = angular.isDefined(informationService);
        expect(ishere).toEqual(true);
    });

    it('firebasePromise should return something useful', function() {
        spyOn(informationService, 'firebasePromise').and.returnValue('https://us-central1-userddata.cloudfunctions.net/helloWorld');
        expect(informationService.firebasePromise()).toEqual('https://us-central1-userddata.cloudfunctions.net/helloWorld');
    });
});
