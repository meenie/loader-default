import {SystemJSLoader} from '../src/index';

describe('the system.js loader', () => {
  it('should have some tests', () => {
    var loader = new SystemJSLoader();
    expect(loader).not.toBe(null);
  });
});