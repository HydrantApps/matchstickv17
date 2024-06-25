#!/usr/bin/env node

//const {execSync} = require('child_process');
import { execSync } from "child_process";
const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.log(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};
console.lof("test");
const repoName = process.argv[2];
const gitCheckoutCmd = `git clone --depth 1 https://github.com/HydrantApps/matchstickv17.git ${repoName}`;
const installDeps = `cd ${repoName} && npm i`;

console.log(`Getting depenencies from github into folder ${repoName}`);

const getCode = runCommand(gitCheckoutCmd);
if (!getCode) {
  process.exit(-1);
}

console.log(`Code download sucessfull!`);
console.log(`Next, let's install the packages.`);

const installedDeps = runCommand(installDeps);
if (!installedDeps) {
  process.exit(-1);
}
console.log("Congratulations, the install was sucessful!");
console.log(`Now, Let's get coding!!!`);
console.log("Follow these commands to get started");
console.log(`cd ${repoName}`);
console.log("npm start");
