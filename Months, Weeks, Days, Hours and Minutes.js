/*
Description:
Given a number of minutes, translate it into a readible human timestamp.

For example: 100 minutes equals "1 hour 40 minutes" And: 52874 minutes equals "1 month 1 week 1 day 17 hours 14 minutes"

Given that each month has 28 days.

The largest amount of minutes you'll have to test for is under a year so you'll have to translate it to Months, Weeks, Days, Hours and Minutes.
*/
function displayValue(value) {
  const minutesInHour = 60;
  const minutesInDay = minutesInHour * 24;
  const minutesInWeek = minutesInDay * 7;
  const minutesInMonth = minutesInDay * 28;

  const timeUnits = [
    { name: 'month', value: minutesInMonth },
    { name: 'week', value: minutesInWeek },
    { name: 'day', value: minutesInDay },
    { name: 'hour', value: minutesInHour },
    { name: 'minute', value: 1 },
  ];

  const result = [];

  for (const unit of timeUnits) {
    const unitValue = ~~(value / unit.value);

    if (unitValue > 0) {
      result.push(`${unitValue} ${unit.name}${unitValue > 1 ? 's' : ''}`);
    }

    value %= unit.value;
  }

  return result.length ? result.join(' ') : '0 minutes';
  ////////////////////////////////////////////////////////!SECTION
  //   return [
  //     `${(value / 60 / 24 / 7 / 4) | 0} month`,
  //     `${(value / 60 / 24 / 7) % 4 | 0} week`,
  //     `${(value / 60 / 24) % 7 | 0} day`,
  //     `${(value / 60) % 24 | 0} hour`,
  //     `${value % 60} minute`,
  //   ]
  //     .filter((e) => !/^0/.test(e))
  //     .map((e) => (/^1 /.test(e) ? e : e + 's'))
  //     .join(' ');
}

console.log(displayValue(1)); //"1 minute"
console.log(displayValue(100)); //"1 hour 40 minutes"
console.log(displayValue(40321)); //"1 month 1 minute"
console.log(displayValue(52874)); //"1 month 1 week 1 day 17 hours 14 minutes"
