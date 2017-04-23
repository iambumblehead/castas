// Filename: castas.spec.js  
// Timestamp: 2017.04.23-14:12:40 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

const castas = require('../');

describe('castas.bool', () => {
  
  it('should return `true` from `"true"`', () => {
    expect(castas.bool('true')).toBe(true);
  });

  it('should return `false` from `"false"`', () => {
    expect(castas.bool('false')).toBe(false);
  });

  it('should return `true` from `null, true`', () => {
    expect(castas.bool(null, true)).toBe(true);
  });
  
  it('should return `false` from `null, false`', () => {
    expect(castas.bool(null, false)).toBe(false);
  });

  it('should return `true` from `undefined, true`', () => {
    expect(castas.bool(undefined, true)).toBe(true);
  });  

});

describe("castas.arr", () => {

  it('should return `["one"]` from `["one"]`', () => {
    expect(castas.arr(["one"])[0]).toBe("one");
  });
  it('should return `["one","two","three"]` from `"one,two,three"`', () => {
    expect(castas.arr("one,two,three")[2]).toBe("three");
  });
  it('should return `[]` from `[], "one,two,three"`', () => {
    expect(castas.arr([], "one,two,three")[2]).toBe(undefined);
  });  
  
});

describe("castas.str", () => {
  it('should return `"1"` from `1`', () => {
    expect(castas.str(1)).toBe('1');
  });
  it('should return `"0"` from `0`', () => {
    expect(castas.str(0)).toBe('0');
  });
  it('should return `"false"` from `false`', () => {
    expect(castas.str(false)).toBe('false');
  });
  it('should return `"true"` from `true`', () => {
    expect(castas.str(true)).toBe('true');
  });
  it('should return `""` from `""`', () => {
    expect(castas.str('')).toBe('');
  });
  it('should return `""` from `""`', () => {
    expect(castas.str('', '5')).toBe('');
  });  
  it('should return `"1"` from `null, 1`', () => {
    expect(castas.str(null, 1)).toBe('1');
  });  
});

describe("castas.tstr", () => {
  it('should return `"1"` from `"", 1`', () => {
    expect(castas.tstr('', 1)).toBe('1');
  });
});

describe("castas.ts", () => {

  it("should return `1470076935364` from `'2016-08-01T18:42:15.364Z'`", () => {
    expect(castas.ts('2016-08-01T18:42:15.364Z')).toBe(1470076935364);
  });

  it("should return `1470076935364` from `'1470076935364'`", () => {
    expect(castas.ts('1470076935364')).toBe(1470076935364);
  });

  it("should return `1470076935364` from `new Date(1470076935364)`", () => {
    expect(castas.ts(new Date(1470076935364))).toBe(1470076935364);
  });    
  
});
