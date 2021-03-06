/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.14/15.2.3.14-5-6.js
 * @description Object.keys - inherited enumerable accessor property of 'O' is not defined in returned array
 */


function testcase() {
        var proto = {};
        Object.defineProperty(proto, "inheritedProp", {
            get: function () {
                return 1003;
            },
            enumerable: true,
            configurable: true
        });
        var Con = function () { };
        Con.prototype = proto;

        var obj = new Con();
        Object.defineProperty(obj, "prop", {
            get: function () {
                return 1004;
            },
            enumerable: true,
            configurable: true
        });

        var arr = Object.keys(obj);

        for (var p in arr) {
            if (arr[p] === "inheritedProp") {
                return false;
            }
        }

        return true;
    }
runTestCase(testcase);
