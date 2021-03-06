/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-169.js
 * @description Object.defineProperties - 'O' is an Array, 'P' is the length property of 'O', the [[Value]] field of 'desc' is less than value of  the length property, test the [[Configurable]] attribute of own data property with large index named in 'O' that overrides inherited accessor property can stop deleting index named properties (15.4.5.1 step 3.l.ii)
 */


function testcase() {
    
        var arr = [0, 1];
        try {
            Object.defineProperty(arr, "1", {
                configurable: false
            });

            Object.defineProperty(Array.prototype, "1", {
                get: function () {
                    return 2;
                },
                configurable: true
            });

            Object.defineProperties(arr, {
                length: {
                    value: 1
                }
            });

            return false;
        } catch (e) {
            return e instanceof TypeError && arr.length === 2 && arr.hasOwnProperty("1") &&
                arr[0] === 0 && arr[1] === 1 && Array.prototype[1] === 2;
        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);
