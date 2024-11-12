/*
Description:
Implement function createTemplate which takes string with tags wrapped in {{brackets}} as input and returns closure, which can fill string with data (flat object, where keys are tag names).

let personTmpl = createTemplate("{{name}} likes {{animalType}}");
personTmpl({ name: "John", animalType: "dogs" }); // John likes dogs
When key doesn't exist in the map, put there empty string.
*/
function createTemplate(template) {
  return function (args) {
    return template.replace(/{{(.*?)}}/g, (_, i) => args[i] || '');
  };
  ////////////////////////////////////!SECTION
  //   return (vars) => template.replace(/{{(\w+)}}/g, (m, v) => vars[v] || '');
}

let personTmpl = createTemplate(
  '{{firstName}} {{lastName}} likes {{interests}}'
);
console.log(personTmpl({ firstName: 'Albert', lastName: 'Einstein' })); //'Albert Einstein likes '
