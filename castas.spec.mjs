import test from 'node:test'
import assert from 'node:assert/strict'
import castas from './castas.mjs';

test('castas.bool should return `true` from `"true"`', () => {
  assert.strictEqual(castas.bool('true'), true);
});

test('castas.bool should return `false` from `"false"`', () => {
  assert.strictEqual(castas.bool('false'), false);
});

test('castas.bool should return `true` from `null, true`', () => {
  assert.strictEqual(castas.bool(null, true), true);
});

test('castas.bool should return `false` from `null, false`', () => {
  assert.strictEqual(castas.bool(null, false), false);
});

test('castas.bool should return `true` from `undefined, true`', () => {
  assert.strictEqual(castas.bool(undefined, true), true);
});  

test('castas.arr should return `["one"]` from `["one"]`', () => {
  assert.strictEqual(castas.arr(["one"])[0], "one");
});
test('castas.arr should return `["one","two","three"]` from `"one,two,three"`', () => {
  assert.strictEqual(castas.arr("one,two,three")[2], "three");
});
test('castas.arr should return `[]` from `[], "one,two,three"`', () => {
  assert.strictEqual(castas.arr([], "one,two,three")[2], undefined);
});  

test('castas.str should return `"1"` from `1`', () => {
  assert.strictEqual(castas.str(1), '1');
});
test('castas.str should return `"0"` from `0`', () => {
  assert.strictEqual(castas.str(0), '0');
});
test('castas.str should return `"false"` from `false`', () => {
  assert.strictEqual(castas.str(false), 'false');
});
test('castas.str should return `"true"` from `true`', () => {
  assert.strictEqual(castas.str(true), 'true');
});
test('castas.str should return `""` from `""`', () => {
  assert.strictEqual(castas.str(''), '');
});
test('castas.str should return `""` from `"", "5"`', () => {
  assert.strictEqual(castas.str('', '5'), '');
});  
test('castas.str should return `"1"` from `null, 1`', () => {
  assert.strictEqual(castas.str(null, undefined), undefined);
});  

test('castas.tstr should return `"1"` from `"", 1`', () => {
  assert.strictEqual(castas.tstr('', undefined), undefined);
});

test("castas.ts should return `1470076935364` from `'2016-08-01T18:42:15.364Z'`", () => {
  assert.strictEqual(castas.ts('2016-08-01T18:42:15.364Z'), 1470076935364);
});

test("castas.ts should return `1470076935364` from `'1470076935364'`", () => {
  assert.strictEqual(castas.ts('1470076935364'), 1470076935364);
});

test("castas.ts should return `1470076935364` from `new Date(1470076935364)`", () => {
  assert.strictEqual(castas.ts(new Date(1470076935364)), 1470076935364);
});

test("castas.date should return `new Date( 0 )` from `'0'`", () => {
  assert.strictEqual(castas.date( 0 ).getTime(), new Date( 0 ).getTime());
});

test("castas.date should return `new Date( 1470076935364 )` from `'1470076935364'`", () => {
  assert.strictEqual(castas.date( 1470076935364 ).getTime(), new Date( 1470076935364 ).getTime());
});

test("castas.date should return `new Date( 1470076935364 )` from `new Date( 1470076935364 )`", () => {
  assert.strictEqual(castas.date( new Date( 1470076935364 ) ).getTime(), new Date( 1470076935364 ).getTime());
});

test("castas.date should return `new Date( 1470076935364 )` from `'2016-08-01T18:42:15.364Z'`", () => {
  assert.strictEqual(castas.date('2016-08-01T18:42:15.364Z').getTime(), new Date( 1470076935364 ).getTime() );
});

test("castas.date should return default date if given val is not date", () => {
  assert.strictEqual(castas.date('', new Date( 1470076935364 )).getTime(), new Date( 1470076935364 ).getTime() );
});
