/*
Description:
Task

You have set an alarm for some of the weekdays.

Days of the week are encoded in binary representation like this:

0000001 - Sunday
0000010 - Monday
0000100 - Tuesday
0001000 - Wednesday
0010000 - Thursday
0100000 - Friday 
1000000 - Saturday

For example, if your alarm is set only for Sunday and Friday, the representation will be 0100001.

Given the current day of the week, your task is to find the day of the week when the alarm will ring next time.
Input/Output

    [input] integer Current Day

The weekdays range from 1 to 7, 1 is Sunday and 7 is Saturday.

    [input] integer Available Weekdays

An integer between 1 and 127, inclusive (which means the alarm will ring at least once per week). Days of the week are encoded in its binary representation.

    [output] an integer

The next day available. The weekday format is same as Current Day.
Example

For Current Day = 4, Available Weekdays = 42, the result should be 6.

Current Day = 4 means current day is Wednesday
Available Weekdays = 42, convert to binary is "0101010"
So the next day the alarm will ring is Friday (6)
*/
function nextDayOfWeek(currentDay, availableWeekDays) {
  return [1, 2, 3, 4, 5, 6, 7]
    .map((el) => ((currentDay + el - 1) % 7) + 1)
    .find((el) => availableWeekDays & (2 ** (el - 1)));
}
////////////////////////////////////////!SECTION
// function nextDayOfWeek(day, num) {
//   num = num.toString`2`.padStart(8, '0').repeat`2`.slice(0, 16 - day);
//   return (num.length - num.lastIndexOf`1` + day) % 8;
// }

console.log(nextDayOfWeek(4, 42)); //6
console.log(nextDayOfWeek(6, 42)); //2
console.log(nextDayOfWeek(7, 42)); //2
