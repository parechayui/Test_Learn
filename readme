/*describe function usually helps in grouping the test cases based on functionality *
Here we have AddController which groups the different scenarios like 'adding two positive numbers',
'adding two negatives' and 'adding one positive and negative'.
/
describe('String',function(){}), function consist of 2 parameters where
 the first is string which specifies the motto/functionality/feature that we are testing
 for example here we are testing an Add Controller,make sure this is meaningful.
 The second parameter is the function which is doing the testing process*/
describe('Add Controller(Feature based)', function() {
    /*beforeEach function is provided by jasmine which helps in DRY.
     * The module functionality here is provided by the angular mocks
     * Advantage of using the mock is to avoid using the main function
     * ,so it just mocks the functionality */
    beforeEach(module('app'));

    /*As we know the controllers are modular(will not be available in the global scope)
     so we will be injecting that controller here*/
    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('addCtrl', function() {

        beforeEach(function() {
            $scope = {};
            controller = $controller('AddCtrl', { $scope: $scope });
        });

/*it('String',function(){}) here is where the test scenarios are come into the scene
* Here the String is used to specify the functionality/feature that we are testing,
* so this will be helpful for better documentation
* */
        /*when both numbers are positive*/
        it('adds two positive numbers', function() {
            $scope.a=2;
            $scope.b=3;
            /*These are matchers,where expect function takes an argument like
            return values/expected values where in toEqual we specify the values that we are expecting
             */
            expect($scope.sum()).toEqual(5);
        });

        /*When one number is negative*/
        it('adds the numbers when one is negative', function(){
            $scope.a=-2;
            $scope.b=3;
            expect($scope.sum()).toEqual(1);
        });

        /*When both numbers are negative*/
        it('adds the number when both are negative', function(){
            $scope.a=2;
            $scope.b=-3;
            expect($scope.sum()).toEqual(-1);
        });
    });
});
