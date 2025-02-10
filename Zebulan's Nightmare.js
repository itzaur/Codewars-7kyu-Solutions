/*
Description:

Zebulan has worked hard to write all his python code in strict compliance to PEP8 rules. In this kata, you are a mischievous hacker that has set out to sabotage all his good code.

Your job is to take PEP8 compatible function names and convert them to camelCase. For example:

"camel_case" --> "camelCase"
"zebulans_nightmare" --> "zebulansNightmare"
"get_string" --> "getString"
"convert_to_uppercase" --> "convertToUppercase"
"main" --> "main"
*/
function zebulansNightmare(functionName) {
  return functionName.split`_`.map((el, i) =>
    i > 0 ? el[0].toUpperCase() + el.slice(1) : el
  ).join``;
  //////////////////////////////////////!SECTION
  //   return functionName.replace(/_./g, (v) => v[1].toUpperCase());
  //////////////////////////////////////!SECTION
  //   return functionName.replace(/_(\w)/g, (_, $1) => $1.toUpperCase());
}

console.log(zebulansNightmare('camel_case')); //'camelCase'
console.log(zebulansNightmare('mark_as_issue')); //'markAsIssue'
console.log(zebulansNightmare('copy_paste_pep8')); //'copyPastePep8'
console.log(zebulansNightmare('goto_next_kata')); //'gotoNextKata'
console.log(zebulansNightmare('repeat')); //'repeat'
console.log(zebulansNightmare('trolling_is_fun')); //'trollingIsFun'
console.log(zebulansNightmare('why')); //'why'
console.log(zebulansNightmare('123_abc_def')); //'123AbcDef'
