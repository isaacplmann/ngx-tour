'use strict';

let path = require('path');
let childProcess = require('child_process');
let chokidar = require('chokidar');

let binPath = childProcess.execSync('npm bin', {
  encoding: 'utf8',
  cwd: process.cwd()
});
let ngcCommand = 'ngc -p ./tsconfig.aot.json';
let fullCommand = binPath.trim() + '/' + ngcCommand;

chokidar.watch(
  ['src/**/*.component.ts', 'src/**/*.template.html', 'src/**/*.style.css'],
  { ignoreInitial: true }
).on('all', () => {
  console.log(`> ${ngcCommand}`);
  childProcess.execSync(fullCommand, {
    encoding: 'utf8',
    cwd: process.cwd()
  });
  console.log('> ngc finished');
});
