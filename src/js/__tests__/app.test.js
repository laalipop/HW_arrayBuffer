import { ArrayBufferConverter, getBuffer } from '../app';

test('should sum', () => {
  const test = new ArrayBufferConverter();
  test.load(getBuffer());
  expect(test.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
