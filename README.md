<img src="https://github.com/HydrantApps/matchstickv17/assets/3653774/41b19fda-28ab-4c9b-a500-ba7137240610" alt="logo" />

## Matchstick is an Angular PWA with a firebase backend that you can use to fire up your app as quick as possible

![CircleCI (branch)](https://img.shields.io/circleci/build/github/HydrantApps/matchstickv17/main) ![GitHub commit activity](https://img.shields.io/github/commit-activity/w/HydrantApps/matchstickv17) ![GitHub repo size](https://img.shields.io/github/repo-size/HydrantApps/matchstickv17)

A demo can be seen here
[Demo Site]()

Test Credentials
username: demouser@matchstick.com
password: DemoUser1234!


This version serves as an updated version of a series of different boilerplate repos i have made in the past (in no particular order).
* [Angular Start](https://github.com/josephnwachukwu/AngularStart)
* [Angular MatchStick](https://github.com/josephnwachukwu/angular-matchstick)
* [Restart React Starter](https://github.com/josephnwachukwu/Re-Start_React_Starter)
* [Kickstartr](https://github.com/josephnwachukwu/kickstartr)
* [PHP Restful Membership System ](https://github.com/josephnwachukwu/PHP-Restful-Membership-System)

## Primary Packages
* [AngularFire](https://github.com/angular/angularfire)
* [Firebase 9](https://firebase.google.com/)
* [Bulma](https://bulma.io/)
* [Bulma Extensions](https://bulma.io/extensions/) 
* [Font Awesome](https://fontawesome.com/)
* [Webpack bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
* [Husky](https://github.com/typicode/husky)
* [Maskito](https://maskito.dev/frameworks/angular)
* [IntroJs](https://introjs.com/docs/wrappers/angularjs)
* [AOS](https://michalsnik.github.io/aos/)

This project follows [Angular Patterns and Anti-Patterns]()

## Getting started 
### Prerequisites and Requirements
Node `18` or later 
You can install node from [NodeJS](https:nodejs.org)
Or from the command line using 
```bash
$ sudo apt get node
```

### Angular CLI 
Once node is installed you can use to get the latest version of the angular cli.<br />

```bash
  $ npm i -g @angular/cli
```

### Firebase Functions
You will need the firebase cli installed globally on your system to push firebase function changes and init the project. <br />

```bash
  $ npm i -g firebase-tools
```

### Git 
You will need git installed on your machine and in your environment path to push your changes to your newly created repo 

Alternatively you can use the [GitHub Desktop Client]()

## Installation 
This package can be installed from npm package manager just run the following command <br />

```bash
  $ npx create-matchstick-app repoName
```

Go to [The Firebase Console](https://console.firebase.google.com)

Create a new Firebase project and add Firestore, authentication, storage and hosting. 

Next to go to add new project and select web 
This will provide you with a firebase config object. 

Copy this object and add this to your environment.ts file. (Make sure your environment.ts file is in the .git ignore file so that it isn’t checked in) 
the firebase config will look like this

```bash
const firebaseConfig = {
  apiKey: "AIzaSyA0mh8xWZUbRkSjZnTS4mmWifl2WAYxZ3A",
  authDomain: "yourAppName.firebaseapp.com",
  databaseURL: "https://yourappDatabase.firebaseio.com",
  projectId: "yourAppName",
  storageBucket: "yourAppName.appspot.com",
  messagingSenderId: "XXXXXXXXXX",
  appId: "1:XXXXXXXXXX:web:XXXXXXXXXXXXXXXXX"
};
```

Next install firebase tools globally on your system so that you can use the firebase cli

Next run the firebase init to connect your repo to the newly created project. 
This will create a firebase.json fire in the root of your project that contains some configurations for your firebase set up. 

## Commands

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:8080`. "webpack-dev-server --config \"config/webpack.serve.dev\" --progress --inline".|
|`test`|Runs unit tests with Karma and generates a coverage report. "mocha --require ignore-styles --reporter mocha-multi-reporters --reporter-options configFile=config/mocha-multi-reporters.json tests/ignore-utils.js tests/helpers/setup.js tests/**/*tests.js src/**/*tests.js"|
|`dev`|Same as `npm start`, but enables nodemon for the server as well.|
|`serve-dist`|Serves the production verstion fo the app "webpack-dev-server --config \"config/webpack.serve.prod\""|
|`prestart`|Removes Unecessary packages and runs tests "npm run lint && npm run test"|
|`clean`|remove the dist folder "rimraf dist"|
|`build`|Builds the Production version of the app "webpack --config \"config/webpack.build.prod\" --optimize-minimize --progress -p"|
|`lint:js`|Lint all `.js` files. "eslint \"./src\"", [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix). |
|`lint`|Lint all `.js` and `.css` files. "npm run lint:js && npm run lint:css" |
|`lint:css`|Lint and fix all `.css` files. "stylelint \"./src/**/*.css\"", |

## Application Structure

This application strcuture here as a suggestion and can be changed to fit your needs. It is meant to be a guideline.

```
.
├── .angular                        # Angular Cache
├── .husky                          # Husky Configuration
├── node_modules                    # Installed Modules and Packages
├── src                             # Application source code
│   ├── app                         # Components that dictate major page structure
│   │   ├── auth                    # Auth Components
│   │   │   ├── admin               # Admin panel to manage users
│   │   │   ├── dashboard           # Dashboard Page
│   │   │   ├── forgot              # Forgot Password Page
│   │   │   ├── login               # Login Page
│   │   │   ├── profile             # User Profile Page
│   │   │   ├── register            # Register User Page
│   │   │   ├── auth.service.ts     # Auth Specific Services
│   │   │   └── auth.types.ts       # Auth Specific Types and Interfaces
│   │   ├── home                    # Home Page
│   │   ├── shared                  # Shared Re-usable Components
│   │   ├── todo                    # Todo components
│   │   ├── NotFound                # Not Found Page
│   │   ├── Shared                  # Shared Re-usable Components Services and Directives
│   │   │   ├── notifications       # Dashboard Page
│   │   │   ├── form-utils.service  # form utility methods
│   │   │   ├── utils.service.ts    # utility methods
│   │   ├── app.component.html      # Entry Component Template Header, Footer, and Router Outlet
│   │   ├── app.component.scss      # Entry Component Styles
│   │   ├── app.component.ts        # Entry Component Class Definition
│   │   ├── app.config.ts           # Application Config
│   │   └── app.routes.ts           # Application Routes
│   ├── assets                      # Main route definitions and async split points
│   │   ├── audio                   # Audio Files
│   │   ├── fonts                   # Font Files
│   │   └── images                  # Image Files
│   ├── bin                         # Excecutable Shell Commands
│   ├── evironments                 # Environment Specific Variables
│   ├── footer                      # Footer Component
│   ├── header                      # Header Component
│   ├── types                       # Custom Types for Js Modules
│   ├── .prettierrc                 # Custom Types for Js Modules
│   ├── favicon.ico                 # Custom Types for Js Modules
│   ├── index.html                  # Main HTML page container for app
│   ├── main.ts                     # Application Entry Point and Route Definition
│   └── styles.scss                 # Application-wide styles (generally settings)
├── .editorconfig                   # Editor Configuration
├── .gitignore                      # Git Ignore File
├── angular.json                    # Angular Configuration
├── package-lock.json               # Package lock File
├── package.json                    # NPM Package Directory
├── README.md                       # **** This File
├── tsconfig.app.json               # Extenstion of is config for the angular app and compiler rules
├── tsconfig.json                   # Compiler rles
└── tsconfig.spec.json              # Test for TS config file 
```

## Features
Matchstick contains a full login system with the following pages:
* Login 
* Register 
* Forgot password 
* Dashboard
* Profile page


All pages are complete with form validation and firebase authentication and firestore setup.  
Newly created users will also have an entry created in the users firestore collection with default data which can be updated from the profile page. 

### Header
The header is also connected to firebase authentication and displays different menus based on the firebase authenticated state. 

### Home page 
The home page is separated into hero sections and has parallax scrolling using the animate on scroll AOS library. 

### IntroJs 
IntroJs is preinstalled and can be used to create a guide or assist with form completion. A demo can be seen in the profile page. 

### Font Awesome Icons
Icons and glyphs are from the font awesome package v5.9 

### Todo 
A simple todo list application to demonstrate firebase crud operations with the use of signals 

### Admin panel 
A simple panel to delete users or promote their tier

### Notifications 
A notifications service that either uses browser notifications or displays notifications in a comment on the window. 

### Husky
Husky is a precommit git hook that prevents checking in with code errors 

### Webpack bundle analyzer 
This shows a diagram of all the bundles in your package and their relative size to the project 

## Release Notes
|Date              |Version    |Realease Notes|
|------------------|-----------|--------------|
|June 23,2024|17.2.1|Initial Release|

## Product Road Map
|Date              |Version    |Realease Notes|
|------------------|-----------|--------------|
|July 2024|17.3.0|New Ionic/Angular version|
|August 2024|17.4.0|New React Version|
|September 2024|17.5.0|Chat Module and Messaging Module|


## Projects that use versions of Matchstick
* [Invoicer](https:invoicer.me)
* [Epoch Time Tracking](epochtime.com)
* [Invoicer Ionic App](github.com/josephnwachukwu/invoicerapp)
* [CoParent Plus]()
* [Card Club]()

If you use Matchstick for a project send a pull request to add your project to the list.

## Licenses

