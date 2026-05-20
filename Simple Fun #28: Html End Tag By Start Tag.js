/*
Description:
Task

You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.

Given the starting HTML tag, find the appropriate end tag which your editor should propose.
Example

For startTag = "<button type='button' disabled>", the output should be "</button>";

For startTag = "<i>", the output should be "</i>".
Input/Output

    [input] string startTag/start_tag

    [output] a string
*/
function htmlEndTagByStartTag(startTag) {
  const result = startTag.split` `[0].replace('<', '</');

  return result.endsWith('>') ? result : `${result}>`;
  ////////////////////////////////////////!SECTION
  //   return '</' + startTag.match(/\w+/) + '>';
  ////////////////////////////////////////!SECTION
  //   return startTag.replace(/<(\w+).+/, '</$1>');
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>")); //"</button>"
console.log(htmlEndTagByStartTag('<i>')); //"</i>"
console.log(
  htmlEndTagByStartTag(
    "<div id='my_area' class='data' title='This is a test for title on Div tag'>",
  ),
); //"</div>"
