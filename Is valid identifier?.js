/*
Description:

Given a string, determine if it's a valid identifier.
Here is the syntax for valid identifiers:

    Each identifier must have at least one character.
    The first character must be picked from: alpha, underscore, or dollar sign. The first character cannot be a digit.
    The rest of the characters (besides the first) can be from: alpha, digit, underscore, or dollar sign. In other words, it can be any valid identifier character.

Examples of valid identifiers:

    i
    wo_rd
    b2h

Examples of invalid identifiers:

    1i
    wo rd
    !b2h
*/
function isValid(idn) {
  return !!idn.match(/^[A-Za-z_$][A-Za-z0-9_$]*$/);
  //////////////////////////////////!SECTION
  //   return /^[a-z_$][\w$]*$/i.test(id);
}

console.log(isValid('$dollar$igns')); //true
console.log(isValid('_leading_UNDERSCORE')); //true
console.log(isValid('camelCase')); //true
console.log(isValid('PascalCase')); //true
console.log(isValid('snake_case')); //true
console.log(isValid('UPPER_SNAKE_CASE')); //true
console.log(isValid('kebab-case')); //false
console.log(isValid('1ok0okay')); //false
console.log(isValid('!Ok')); //false
console.log(isValid('')); //false
console.log(isValid('no no')); //false
