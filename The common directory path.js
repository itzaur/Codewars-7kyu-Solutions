/*
Description:

Return please the common directory path for specified array of full filenames.

Some details:

   ['/dream/images/image1.png', '/dream/images/image2.png']  => '/dream/images/'
   ['/http/assets/style.css', '/https/scripts/app.js',  'home/setting.conf'] => ''
   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'


*/
function getCommonDirectoryPath(paths) {
  let result = '';
  const splitPaths = paths.map((path) => path.split('/'));

  for (let i = 0; i < splitPaths[0].length; i++) {
    const current = splitPaths[0][i];

    if (splitPaths.every((path) => path[i] === current)) {
      result += current + '/';
    } else {
      break;
    }
  }

  return result;
  //////////////////////////////////////////!SECTION
  // let i = 0;

  // while (paths.every((path) => path[i] == paths[0][i])) i++;

  // return paths[0].slice(0, i).replace(/[^\/]+$/, '');
}
//////////////////////////////////////////!SECTION
// getCommonDirectoryPath = (a) =>
//   a
//     .map((e) => e.split(/(\/)/))
//     .reduce((x, y) =>
//       x.slice(
//         0,
//         y.findIndex((e, i) => e !== x[i])
//       )
//     ).join``;

console.log(
  getCommonDirectoryPath([
    '/dream/images/image1.png',
    '/dream/images/image2.png',
  ])
); //'/dream/images/'
console.log(
  getCommonDirectoryPath([
    '/http/assets/style.css',
    '/https/scripts/app.js',
    'home/setting.conf',
  ])
);
('');
console.log(
  getCommonDirectoryPath(['/web/assets/style.css', '/.bin/mocha', '/read.me'])
); //'/'
console.log(
  getCommonDirectoryPath([
    '/web/favicon.ico',
    '/web-scripts/dump',
    '/webalizer/logs',
  ])
); //'/'
