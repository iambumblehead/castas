// Filename: castas.spec.js  
// Timestamp: 2017.04.23-14:12:40 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

import test from 'ava';
import castas from './castas.js';

test('castas.bool should return `true` from `"true"`', t => {
  t.is(castas.bool('true'), true);
});

test('castas.bool should return `false` from `"false"`', t => {
  t.is(castas.bool('false'), false);
});

test('castas.bool should return `true` from `null, true`', t => {
  t.is(castas.bool(null, true), true);
});

test('castas.bool should return `false` from `null, false`', t => {
  t.is(castas.bool(null, false), false);
});

test('castas.bool should return `true` from `undefined, true`', t => {
  t.is(castas.bool(undefined, true), true);
});  

test('castas.arr should return `["one"]` from `["one"]`', t => {
  t.is(castas.arr(["one"])[0], "one");
});
test('castas.arr should return `["one","two","three"]` from `"one,two,three"`', t => {
  t.is(castas.arr("one,two,three")[2], "three");
});
test('castas.arr should return `[]` from `[], "one,two,three"`', t => {
  t.is(castas.arr([], "one,two,three")[2], undefined);
});  

test('castas.str should return `"1"` from `1`', t => {
  t.is(castas.str(1), '1');
});
test('castas.str should return `"0"` from `0`', t => {
  t.is(castas.str(0), '0');
});
test('castas.str should return `"false"` from `false`', t => {
  t.is(castas.str(false), 'false');
});
test('castas.str should return `"true"` from `true`', t => {
  t.is(castas.str(true), 'true');
});
test('castas.str should return `""` from `""`', t => {
  t.is(castas.str(''), '');
});
test('castas.str should return `""` from `"", "5"`', t => {
  t.is(castas.str('', '5'), '');
});  
test('castas.str should return `"1"` from `null, 1`', t => {
  t.is(castas.str(null, undefined), undefined);
});  

test('castas.tstr should return `"1"` from `"", 1`', t => {
  t.is(castas.tstr('', undefined), undefined);
});

test("castas.ts should return `1470076935364` from `'2016-08-01T18:42:15.364Z'`", t => {
  t.is(castas.ts('2016-08-01T18:42:15.364Z'), 1470076935364);
});

test("castas.ts should return `1470076935364` from `'1470076935364'`", t => {
  t.is(castas.ts('1470076935364'), 1470076935364);
});

test("castas.ts should return `1470076935364` from `new Date(1470076935364)`", t => {
  t.is(castas.ts(new Date(1470076935364)), 1470076935364);
});

test("castas.date should return `new Date( 0 )` from `'0'`", t => {
  t.is(castas.date( 0 ).getTime(), new Date( 0 ).getTime());
});

test("castas.date should return `new Date( 1470076935364 )` from `'1470076935364'`", t => {
  t.is(castas.date( 1470076935364 ).getTime(), new Date( 1470076935364 ).getTime());
});

test("castas.date should return `new Date( 1470076935364 )` from `new Date( 1470076935364 )`", t => {
  t.is(castas.date( new Date( 1470076935364 ) ).getTime(), new Date( 1470076935364 ).getTime());
});

test("castas.date should return `new Date( 1470076935364 )` from `'2016-08-01T18:42:15.364Z'`", t => {
  t.is(castas.date('2016-08-01T18:42:15.364Z').getTime(), new Date( 1470076935364 ).getTime() );
});

test("castas.date should return default date if given val is not date", t => {
  t.is(castas.date('', new Date( 1470076935364 )).getTime(), new Date( 1470076935364 ).getTime() );
});
