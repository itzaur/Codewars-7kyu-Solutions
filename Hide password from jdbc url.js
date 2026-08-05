/*
Description:

We have to create a function that receives a connection string with password included and you have to mask the password i.e. change password by asterisks.

Preconditions:

    non empty valid url
    password always next to string section password=
    assume password will not contain ampersand sign for sake of simplicity
    to make it more real it has non ASCII characters
    "password=" and "user" will occur only once

    empty passwords are not validated but best solutions take empty passwords into account

Example:
input

    jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345

output

    jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=*****

Extra readings:

https://alvinalexander.com/java/jdbc-connection-string-mysql-postgresql-sqlserver
*/
function hidePasswordFromConnection(urlString) {
  return urlString.replace(
    /(password=)([^&]*)/,
    (_, el1, el2) => `${el1}${'*'.repeat(el2.length)}`,
  );
}
////////////////////////////////////////////////!SECTION
// const hidePasswordFromConnection = (url) =>
//   url.replace(/(?<=password\=)[^&]+/, (pass) => '*'.repeat(pass.length));

console.log(
  hidePasswordFromConnection(
    'jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345',
  ),
); //"jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=*****"
