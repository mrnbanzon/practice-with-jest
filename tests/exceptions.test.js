// test errors thrown by functions with toThrow
function compiledCode() {
  throw new Error('I have failed you Anakin, I have failed you');
}

test('compiling did not go as expected', () => {
  expect(compiledCode).toThrow();
  expect(compiledCode).toThrow(Error);

  expect(compiledCode).toThrow('I have failed you Anakin, I have failed you');
  expect(compiledCode).toThrow(/failed/);
});
