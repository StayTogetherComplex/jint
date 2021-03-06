/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-211.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is an array index named property, 'name' makes no change if every field in 'desc' is absent(name is accessor property) (15.4.5.1 step 4.c)
 */


function testcase() {
        var arrObj = [];

        function getFunc() {
            return 11;
        }
        function setFunc(value) {
            arrObj.setVerifyHelpProp = value;
        }

        Object.defineProperty(arrObj, "0", {
            get: getFunc,
            set: setFunc,
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(arrObj, "0", {});
        return accessorPropertyAttributesAreCorrect(arrObj, "0", getFunc, setFunc, "setVerifyHelpProp", true, true);
    }
runTestCase(testcase);
