castas
======
**(c)[Bumblehead][0]**

methods to return values of changed type, mostly for parsing stringy command-line and url-encoded values to usable javascript equivalents.

```javascript
castas.bool('false');                    // false
castas.bool(true);                       // true
castas.bool(null, false);                // false
castas.bool(null, true);                 // true
castas.ts('1470076935364');              // 1470076935364
castas.ts('2016-08-01T18:42:15.364Z');   // 1470076935364
castas.ts(new Date(1470076935364));      // 1470076935364
castas.date('1470076935364');            // 2016-08-01T18:42:15.364Z
castas.date('2016-08-01T18:42:15.364Z'); // 2016-08-01T18:42:15.364Z
castas.date(new Date(1470076935364));    // 2016-08-01T18:42:15.364Z
castas.arr("one,two,three");             // ['one','two','three']
castas.arr(["one","two","three"]);       // ['one','two','three']
castas.str('', '5');                     // '' 
castas.str(null, 5);                     // '5' 
castas.str(false);                       // 'false' 
```

a secondary set of functions prefixed with 't' ignores a non-truthy first param

```javascript
castas.tstr('', '5');  // '5'
castas.str('', '5');   // ''
```


[0]: http://www.bumblehead.com                            "bumblehead"

![scrounge](https://github.com/iambumblehead/scroungejs/raw/main/img/hand.png)

(The MIT License)

Copyright (c) [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
