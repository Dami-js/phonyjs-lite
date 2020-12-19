#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const ncp = require('ncp').ncp;

ncp.limit = 16;

function validate(input, answers) {
  const regex = /\s/g;
  const hasUpperCase = (/[A-Z]/.test(input));
  if (input.match(regex) || hasUpperCase) {
    return 'App name cannot contain space or uppercase value'
  }
  return true;
}

function createAppFolder(dir) {
  // check if folder name exist
  if (fs.existsSync(dir)) {
    console.log('a folder with the app name exists, please choose another name');
    return;
  }
  // create folder if it does not exist
  fs.mkdirSync(dir)
  console.log('creating app...');
  console.log('app folder created!');
}

function copyPackageFilesToAppFolder(src, dest) {
  // ncp(source, destination, callback)
  console.log('Fetching files! Please wait...');
  ncp(src, dest,
    function (err) {
      if (err) {
        return console.error(err);
      }
      console.log('Files fetched successfully!');
    });
}

inquirer
  .prompt([
    /* Pass your questions in here */
    { type: 'input', message: 'Enter app name: ', name: 'appName', validate }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    const cwd = process.cwd();
    const dir = path.join(cwd, `/${answers.appName}`);
    const packageFolder = path.join(path.basename(path.dirname('./index.js')), 'src/package');

    createAppFolder(dir)
    copyPackageFilesToAppFolder(packageFolder, dir)

  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });