import * as helpers from '../../src/helper/log.helper';

describe('Console Log', () => {
  test('should log DB connection message', () => {
    const spy = jest.spyOn(helpers, 'logDBConnection');
    helpers.logDBConnection();
    expect(spy).toHaveBeenCalled();
  });

  test('should log DB connection error message', () => {
    const spy = jest.spyOn(helpers, 'logDBConnectionError');
    helpers.logDBConnectionError();
    expect(spy).toHaveBeenCalled();
  });

  test('should log app start message', () => {
    const spy = jest.spyOn(helpers, 'logStartMsg');
    helpers.logStartMsg();
    expect(spy).toHaveBeenCalled();
  });

  test('should log app stop message', () => {
    const spy = jest.spyOn(helpers, 'logStopMsg');
    helpers.logStopMsg();
    expect(spy).toHaveBeenCalled();
  });
});
