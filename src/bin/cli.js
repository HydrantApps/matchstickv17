#!/usr/bin/env node
"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                    ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                    : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
exports.__esModule = true;
var child_process_1 = require("child_process");
var util_1 = require("util");
var execPromise = (0, util_1.promisify)(child_process_1.exec);
var repo = "https://github.com/HydrantApps/matchstickv17.git";
var repoName = process.argv[2];
function runShellCmd(command) {
  return __awaiter(this, void 0, void 0, function () {
    var _a, stdout, stderr, _b;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _c.trys.push([0, 2, , 3]);
          return [4 /*yield*/, execPromise(command)];
        case 1:
          (_a = _c.sent()), (stdout = _a.stdout), (stderr = _a.stderr);
          console.log(stdout);
          console.log(stderr);
          return [3 /*break*/, 3];
        case 2:
          _b = _c.sent();
          (function (err) {
            console.error(err);
          });
          return [3 /*break*/, 3];
        case 3:
          return [2 /*return*/];
      }
    });
  });
}
var greeting =
  '__    __     ______     ______   ______     __  __     ______     ______   __     ______     __  __       \n/ "-./     /  __    /__  _ /  ___   / _    /  ___   /__  _ /    /  ___   / / /       \n  -./      __   /_/ /   ____     __    ___    /_/ /       ____     _"-.     \n  _  _   _ _     _   _____   _ _  /_____     _   _   _____   _ _    \n  /_/  /_/   /_//_/     /_/   /_____/   /_//_/   /_____/     /_/   /_/   /_____/   /_//_/    \n                                                                                                           \n';
function setup() {
  return __awaiter(this, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          console.log(greeting);
          _a.label = 1;
        case 1:
          _a.trys.push([1, 5, , 6]);
          return [
            4 /*yield*/,
            runShellCmd(
              "git clone --depth 1 ".concat(repo, " ").concat(repoName),
            ),
          ];
        case 2:
          _a.sent();
          //process.chdir(folderPath);
          console.log("installing dependencies, please wait...");
          return [4 /*yield*/, runShellCmd("npm i")];
        case 3:
          _a.sent();
          console.log("dependencies installed successfully!");
          return [4 /*yield*/, runShellCmd("npx rimraf ./.git")];
        case 4:
          _a.sent();
          console.log("old .git folder deleted successfully!");
          return [3 /*break*/, 6];
        case 5:
          error_1 = _a.sent();
          console.log(error_1);
          return [3 /*break*/, 6];
        case 6:
          return [2 /*return*/];
      }
    });
  });
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
console.log("Getting depenencies from github into folder ".concat(repoName));
// const getCode = runCommand(gitCheckoutCmd);
// if (!getCode) {
//   process.exit(-1);
// }
console.log("Code downloaded sucessfull!");
console.log("Next, let's install the packages.");
// const installedDeps = runCommand(installDeps);
// if (!installedDeps) {
//   process.exit(-1);
// }
console.log("Congratulations, the install was sucessful!");
console.log("Now, Let's get coding!!!");
console.log("Follow these commands to get started");
console.log("cd ".concat(repoName));
console.log("npm start");
