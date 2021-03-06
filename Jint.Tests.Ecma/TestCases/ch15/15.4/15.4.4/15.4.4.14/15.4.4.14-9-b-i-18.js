/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-9-b-i-18.js
 * @description Array.prototype.indexOf - element to be retrieved is own accessor property without a get function on an Array-like object
 */


function testcase() {

        var obj = { length: 1 };
        Object.defineProperty(obj, "0", {
            set: function () { },
            configurable: true
        });

        return 0 === Array.prototype.indexOf.call(obj, undefined);
    }
runTestCase(testcase);
