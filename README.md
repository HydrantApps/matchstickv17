# Matchstick

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
```
$ sudo apt get node
```

### Angular CLI 
Once node is installed you can use to get the latest version of the angular cli.<br />

```
  $ npm i -g @angular/cli
```

### Firebase Functions
You will need the firebase cli installed globally on your system to push firebase function changes and init the project. <br />

```
  $ npm i -g firebase-tools
```

### Git 
You will need git installed on your machine and in your environment path to push your changes to your newly created repo 

Alternatively you can use the [GitHub Desktop Client]()

## Installation 
This package can be installed from npm package manager just run the following command <br />

```
  $ npx create-matchstick-app repoName
```

Go to [The Firebase Console](https://console.firebase.google.com)

Create a new Firebase project and add Firestore, authentication, storage and hosting. 

Next to go to add new project and select web 
This will provide you with a firebase config object. 

Copy this object and add this to your environment.ts file. (Make sure your environment.ts file is in the .git ignore file so that it isn’t checked in) 
the firebase config will look like this

```
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
│   │   ├── auth                    # Dashboard Page
│       │   ├── dashboard           # Dashboard Page
│       │   ├── forgot              # Forgot Password Page
│       │   ├── login               # Login Page
│       │   ├── profile             # User Profile Page
│       │   ├── register            # Register User Page
│       │   ├── auth.service.ts     # Auth Specific Services
│       │   └── auth.types.ts       # Auth Specific Types and Interfaces
│   │   ├── home                    # Home Page
│   │   ├── shared                  # Shared Re-usable Components
│   │   ├── NotFound                # Not Found Page
│   │   └── Shared                  # Shared Re-usable Components
│   └── static                      # Main route definitions and async split points
│       ├── images                  # Images for the app
│       │   └── favicon.ico         # Favicon for the app
│       └── theme                   # Assets for the app
│           ├── fonts               # Fonts for the app
│           ├── index.js            # Setup for the Theme
│           └── variables.js        # CSS variables for colors and Sizes
│   ├── index.html                  # Main HTML page container for app
│   ├── index.js                    # Application Entry Point and Route Definition
│   ├── index.css                   # Application-wide styles (generally settings)
├── .editorconfig                   # Editor Configuration
├── .gitignore                      # Git Ignore File
├── angular.json                    # Angular Configuration
├── package-lock.json               # Unit tests
├── package.json                           # Unit tests
├── README.md                           # Unit tests
├── tsconfig.app.json                           # Unit tests
├── tsconfig.json                           # Unit tests
└── tsconfig.spec.json                           # Unit tests
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

## Product Road Map

## Licenses

