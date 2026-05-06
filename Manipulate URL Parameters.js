/*
Description:

You need to write a function ( addOrChangeUrlParameter(url, keyValueParameter) ) that can manipulate URL parameters.

It should be able to

    add a parameter to an existing URL,

but also to

    change a parameter if it already exists.

Example:


addOrChangeUrlParameter("www.example.com", "key=value")
// -> 'www.example.com?key=value' (adds a parameter).

addOrChangeUrlParameter("www.example.com?key=value", "key2=value2" )
// -> 'www.example.com?key=value&key2=value2' (adds another parameter).

addOrChangeUrlParameter("www.example.com?key=oldValue`", "key=newValue" )
// ->'www.example.com?key=newValue' (changes the parameter).
*/
function addOrChangeUrlParameter(url, param) {
  const [key, value] = param.split('=');

  if (param === '') {
    return url;
  }

  return url.includes('?')
    ? url.replace(new RegExp(`([?&])${key}=[^&]*`), `$1${key}=${value}`) +
        (url.includes(`${key}=`) ? '' : `&${param}`)
    : `${url}?${param}`;
  ////////////////////////////////////!SECTION
  //   if (!param) return url;
  //   if (!url.includes('?')) return `${url}?${param}`;
  //   const [k, v] = param.split('=');
  //   if (!url.includes(k)) return `${url}&${k}=${v}`;
  //   return url.replace(RegExp(`(?<=${k}=)\\w+`), v);
}
////////////////////////////////////!SECTION
// const addOrChangeUrlParameter = (url, param) =>
//   ((val) =>
//     val.includes(param)
//       ? val
//       : `${url}${url.includes(`?`) ? `&` : `?`}${param}`)(
//     url.replace(new RegExp(`${param.split(`=`)[0]}=[^&]+`), param),
//   );

console.log(addOrChangeUrlParameter('http://example.com/', 'ID=1234')); //'http://example.com/?ID=1234'
console.log(addOrChangeUrlParameter('http://example.com?ID=666', 'ID=1234')); //'http://example.com?ID=1234'

let len = 'http://example.com'.length,
  ans = addOrChangeUrlParameter('http://example.com?Name=Allan', 'ID=1234');
console.log(ans); //'http://example.com?Name=Allan&ID=1234'
console.log(ans.indexOf('ID=1234') > len); //true
console.log(ans.indexOf('Name=Allan') > len); //true
console.log(addOrChangeUrlParameter('http://www.ample.gov', ''));
