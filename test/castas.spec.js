var castas = require('../');

describe('castas.bool', function () {
  
  it('should return `true` from `"true"`', function () {
    expect(castas.bool('true')).toBe(true);
  });

  it('should return `false` from `"false"`', function () {
    expect(castas.bool('false')).toBe(false);
  });

  it('should return `true` from `null, true`', function () {
    expect(castas.bool(null, true)).toBe(true);
  });
  
  it('should return `false` from `null, false`', function () {
    expect(castas.bool(null, false)).toBe(false);
  });

});

describe("castas.arr", function () {

  it('should return `["one"]` from `["one"]`', function () {
    expect(castas.arr(["one"])[0]).toBe("one");
  });
  it('should return `["one","two","three"]` from `"one,two,three"`', function () {
    expect(castas.arr("one,two,three")[2]).toBe("three");
  });
  it('should return `[]` from `[], "one,two,three"`', function () {
    expect(castas.arr([], "one,two,three")[2]).toBe(undefined);
  });  
  
});

describe("castas.str", function () {
  it('should return `"1"` from `1`', function () {
    expect(castas.str(1)).toBe('1');
  });
  it('should return `"0"` from `0`', function () {
    expect(castas.str(0)).toBe('0');
  });
  it('should return `"false"` from `false`', function () {
    expect(castas.str(false)).toBe('false');
  });
  it('should return `"true"` from `true`', function () {
    expect(castas.str(true)).toBe('true');
  });
  it('should return `""` from `""`', function () {
    expect(castas.str('')).toBe('');
  });
  it('should return `""` from `""`', function () {
    expect(castas.str('', '5')).toBe('');
  });  
  it('should return `"1"` from `null, 1`', function () {
    expect(castas.str(null, 1)).toBe('1');
  });  
});

describe("castas.tstr", function () {
  it('should return `"1"` from `"", 1`', function () {
    expect(castas.tstr('', 1)).toBe('1');
  });
});

describe("castas.ts", function () {

  it("should return `1470076935364` from `'2016-08-01T18:42:15.364Z'`", function () {
    expect(castas.ts('2016-08-01T18:42:15.364Z')).toBe(1470076935364);
  });

  it("should return `1470076935364` from `'1470076935364'`", function () {
    expect(castas.ts('1470076935364')).toBe(1470076935364);
  });

  it("should return `1470076935364` from `new Date(1470076935364)`", function () {
    expect(castas.ts(new Date(1470076935364))).toBe(1470076935364);
  });    
  
});
