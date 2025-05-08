// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber - valid formats', () => {
  expect(isPhoneNumber('619-555-1234')).toBe(true);
  expect(isPhoneNumber('(760) 444-3210')).toBe(true);
});

test('isPhoneNumber - invalid inputs', () => {
  expect(isPhoneNumber('1234567')).toBe(false);
  expect(isPhoneNumber('phone-number')).toBe(false);
});

test('isEmail - valid emails', () => {
  expect(isEmail('user@example.com')).toBe(true);
  expect(isEmail('test123@gmail.com')).toBe(true);
});

test('isEmail - invalid emails', () => {
  expect(isEmail('missingatsign.com')).toBe(false);
  expect(isEmail('also@bad@email@double.com')).toBe(false);
});

test('isStrongPassword - valid passwords', () => {
  expect(isStrongPassword('Hello123')).toBe(true);
  expect(isStrongPassword('CSrocks2025')).toBe(true);
});

test('isStrongPassword - invalid passwords', () => {
  expect(isStrongPassword('a1')).toBe(false);
  expect(isStrongPassword('12345678')).toBe(false);
});

test('isDate - valid dates', () => {
  expect(isDate('05/07/2025')).toBe(true);
  expect(isDate('1/1/1999')).toBe(true);
});

test('isDate - invalid dates', () => {
  expect(isDate('May 7, 2025')).toBe(false);
  expect(isDate('not-a-date')).toBe(false); // safer than 13/40/2022
});

test('isHexColor - valid hex codes', () => {
  expect(isHexColor('#FFF')).toBe(true);
  expect(isHexColor('#a1b2c3')).toBe(true);
});

test('isHexColor - invalid hex codes', () => {
  expect(isHexColor('#12345')).toBe(false);
  expect(isHexColor('g12h45')).toBe(false);
});