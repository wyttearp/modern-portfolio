const fs = require('fs-extra');

fs.copySync('public/Displacement.html', 'build/Displacement.html');
console.log('Displacement.html has been copied to the build folder');