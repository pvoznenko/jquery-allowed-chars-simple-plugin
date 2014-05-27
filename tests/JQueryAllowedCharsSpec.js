describe("jQuery Allowed Chars Tests", function() {
    "use strict";

    var $defaultInput, $customInput, $regexpInput, $fullInput;

    /**
     * Method to test keypress event
     *
     * @param {Object} $input jQuery selector input object
     * @param {Array} keysArray array with key codes to test
     * @param {Function} shouldBePreventedCondition condition when keypress should be prevented
     */
    var testKeyPressEvent = function($input, keysArray, shouldBePreventedCondition) {
        for (var i = 0; i < keysArray.length; i++) {
            var keyPressEvent = $.extend({keyCode: keysArray[i]}, $.Event('keypress')),
                isDefaultPrevented;

            $input.trigger(keyPressEvent);

            isDefaultPrevented = keyPressEvent.isDefaultPrevented();

            if (shouldBePreventedCondition(keysArray[i])) {
                expect(isDefaultPrevented).toBeTruthy();
            } else {
                expect(isDefaultPrevented).toBeFalsy();
            }
        }
    };

    beforeEach(function() {
        jasmine.getFixtures().set(
            "<input type='text' id='default'/>" +
            "<input type='text' id='custom'/>" +
            "<input type='text' id='regexp'/>" +
            "<input type='text' id='full'/>"
        );

        $defaultInput = $('#default');
        $customInput = $('#custom');
        $regexpInput = $('#regexp');
        $fullInput = $('#full');
    });

    it("plugin should be defined", function() {
        expect($.fn.allowedChars).toBeDefined();
    });

    describe("test default behavior, press: '0123456789:;<='; should work only with int values.", function() {
        beforeEach(function() {
            $defaultInput.allowedChars();
        });

        it("default: should allow integer values and not allow symbols", function() {
            var keysArray,
                shouldBePreventedCondition = function(key) {
                    return key > 57;
                };

            for (var key = 48; key <= 61; key++) {
                keysArray = key;
            }

            testKeyPressEvent($defaultInput, keysArray, shouldBePreventedCondition);
        });
    });

    describe("test custom behavior, tested values: [a, B, 1, {space}, _]; should be case sensitive.", function() {
        beforeEach(function() {
            $customInput.allowedChars('aB1 _');
        });

        it("custom: should allow only [a, B, 1, {space}, _]", function() {
            var keysArray = [97, 66, 49, 32, 95, 110, 120, 122],
                shouldBePreventedCondition = function(key) {
                    return key > 97;
                };

            testKeyPressEvent($customInput, keysArray, shouldBePreventedCondition);
        });
    });

    describe("test regExp behavior, tested regular expression '/\\d/'; should work only with int values.", function() {
        beforeEach(function() {
            $regexpInput.allowedChars(/\d/);
        });

        it("regexp: should allow integer values and not allow symbols", function() {
            var keysArray,
                shouldBePreventedCondition = function(key) {
                    return key > 57;
                };

            for (var key = 48; key <= 61; key++) {
                keysArray = key;
            }

            testKeyPressEvent($regexpInput, keysArray, shouldBePreventedCondition);
        });
    });

    describe("test full behavior, tested values: [A, a, B, b, S, s, D, d]; should be not case sensitive.", function() {
        beforeEach(function() {
            $fullInput.allowedChars({
                allowed: 'AbsD',
                caseSensitive: false
            });
        });

        it("full: should allow only [A, a, B, b, S, s, D, d]", function() {
            var keysArray = [65, 97, 66, 98, 83, 115, 68, 100, 120, 122, 123],
                shouldBePreventedCondition = function(key) {
                    return key > 115;
                };

            testKeyPressEvent($fullInput, keysArray, shouldBePreventedCondition);
        });
    });
});