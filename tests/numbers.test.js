// test how to compare numbers
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual work the same for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// test floating point equality. sometimes you don't want a test to fail because of a rounding error
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3) -- fails because of rounding err
  expect(value).toBeCloseTo(0.3);
});
