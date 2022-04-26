import * as helpers from '../helpers';

describe('A simple test for the filter function', () => {
  test('the length of the array must not be 0', () => {
    var allData = [
      {
        date_ms: 1641772800000,
        performance: 0.2,
      },
      {
        date_ms: 1641859200000,
        performance: 0.33,
      },
    ];
    var startDate = new Date('2022-01-4');
    var endDate = new Date('2022-01-15');

    allData = helpers.dateFilter(startDate, endDate, allData);

    expect(allData.length).not.toBe(0);
  });
});