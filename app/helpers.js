/* eslint-disable */
export function dateFilter(startDate, endDate, allData) {
  let result = allData;
  let start_ms =  Date.parse(startDate);
  let end_ms =  Date.parse(endDate);
  if(!isNaN(end_ms)) {
    result = result.filter(el => el.date_ms <= end_ms);
  }
  if(!isNaN(start_ms)) {
    result = result.filter(el => el.date_ms >= start_ms);
  }
  return result;
};