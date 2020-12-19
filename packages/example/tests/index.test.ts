import example from '../src';

describe('test example export data', function () {
  test('test export example name', () => {
    expect(example.name).toEqual('zwkang');
  });
  test('test export example description', () => {
    expect(example.description).toEqual('hello world');
  });
});
