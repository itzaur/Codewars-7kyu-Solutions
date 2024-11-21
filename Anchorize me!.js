/*
Description:
Parse the text and replace Globally url with corresponding html syntax.

Supported protocols:

http
https
ftp
ftps
file
smb
NOTE: Ideal will be with ** Regex **

Input
'hello FTP://world.com !'

Output
'hello <a href="FTP://world.com">FTP://world.com</a> !'

Input
'hello http://world.com !'

Output
'hello <a href="http://world.com">http://world.com</a> !'
*/
function anchorize(text) {
  return text.replace(
    /(http|https|ftp|ftps|file|smb)?:\/\/(\S+)/gi,
    (el) => `<a href="${el}">${el}</a>`
  );
  //////////////////////////////////!SECTION
  //   return text.replace(/(https?|ftps?|file|smb)\S+/gi, '<a href="$&">$&</a>');
  //////////////////////////////////!SECTION
  //   return text.replace(/\w+:\/{2}\S+/gi, `<a href="$&">$&</a>`);
}

console.log('<xmp>' + anchorize('hello http://world.com !') + '</xmp>'); //'<xmp>'+'hello <a href="http://world.com">http://world.com</a> !'+'</xmp>'
console.log('<xmp>' + anchorize('Hello https://World.com') + '</xmp>'); //'<xmp>'+'Hello <a href="https://World.com">https://World.com</a>'+'</xmp>'
console.log('<xmp>' + anchorize('Hello FTP://World.com') + '</xmp>'); //'<xmp>'+'Hello <a href="FTP://World.com">FTP://World.com</a>'+'</xmp>'
