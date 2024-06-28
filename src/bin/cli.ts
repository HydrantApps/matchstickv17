#!/usr/bin/env node

import { execSync, exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);
const repo = `https://github.com/HydrantApps/matchstickv17.git`;
const repoName = process.argv[2];

async function runShellCmd(command: string) {
  try {
    const { stdout, stderr } = await execPromise(command);
    console.log(stdout);
    console.log(stderr);
  } catch {
    (err: any) => {
      console.error(err);
    };
  }
}

const greeting = `__    __     ______     ______   ______     __  __     ______     ______   __     ______     __  __       
/\ "-./  \   /\  __ \   /\__  _\ /\  ___\   /\ \_\ \   /\  ___\   /\__  _\ /\ \   /\  ___\   /\ \/ /       
\ \ \-./\ \  \ \  __ \  \/_/\ \/ \ \ \____  \ \  __ \  \ \___  \  \/_/\ \/ \ \ \  \ \ \____  \ \  _"-.     
 \ \_\ \ \_\  \ \_\ \_\    \ \_\  \ \_____\  \ \_\ \_\  \/\_____\    \ \_\  \ \_\  \ \_____\  \ \_\ \_\    
  \/_/  \/_/   \/_/\/_/     \/_/   \/_____/   \/_/\/_/   \/_____/     \/_/   \/_/   \/_____/   \/_/\/_/    
                                                                                                           
`;

async function setup() {
  console.log(greeting);
  try {
    await runShellCmd(`git clone --depth 1 ${repo} ${repoName}`);
    //process.chdir(folderPath);

    console.log(`installing dependencies, please wait...`);
    await runShellCmd(`npm i`);
    console.log(`dependencies installed successfully!`);

    await runShellCmd(`npx rimraf ./.git`);
    console.log(`old .git folder deleted successfully!`);

    // appendFileSync(".gitignore", "\r\ndist", "utf8");
    // appendFileSync(".gitignore", "\r\n.env", "utf8");

    // /** remove extra files and folders from disk. we don't need it anymore */
    // unlinkSync(join(process.cwd(), "quick-start.gif"));
    // unlinkSync(join(process.cwd(), "CHANGELOG.md"));
    // unlinkSync(join(process.cwd(), "README.md"));
    // unlinkSync(join(process.cwd(), "bin", "setup.js"));
    // rmdirSync(join(process.cwd(), "bin"));

    //await runShellCmd(`git init && git add . && git commit -am "init commit"`);
    //console.log(`new git repo initialized successfully!`);

    // console.log(`Commands to run the project:`);
    // console.log();
    // console.log(`cd ${folderName}`);
    // console.log();
    // console.log(`npm start`);
    // console.log();
    // console.log(`Happy Hacking!`);

    // if (runVsCode) {
    //   console.log(`starting vscode...`);
    //   runShellCmd(`code ${folderPath}`);
    // }
  } catch (error) {
    console.log(error);
  }
}

setup();

// const runCommand = (command:string) => {
//   try {
//     execSync(`${command}`, { stdio: "inherit" });
//   } catch (e) {
//     console.log(`Failed to execute ${command}`, e);
//     return false;
//   }
//   return true;
// };

//const gitCheckoutCmd = `git clone --depth 1 ${repo} ${repoName}`;
//const installDeps = `cd ${repoName} && npm i`;

console.log(`Getting depenencies from github into folder ${repoName}`);

// const getCode = runCommand(gitCheckoutCmd);
// if (!getCode) {
//   process.exit(-1);
// }

console.log(`Code downloaded sucessfull!`);
console.log(`Next, let's install the packages.`);

// const installedDeps = runCommand(installDeps);
// if (!installedDeps) {
//   process.exit(-1);
// }
console.log('Congratulations, the install was sucessful!');
console.log(`Now, Let's get coding!!!`);
console.log('Follow these commands to get started');
console.log(`cd ${repoName}`);
console.log('npm start');
