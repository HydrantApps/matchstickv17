# Matchstick


AngularFire
Firebase 9
Bulma 
Bulma Extensions 
Font Awesome 
Webpack bundle Analyzer
Husky
Maskito 
IntroJs 
AOS

This project follows Angular Patterns and Anti-Patterns 

Getting started 
Prerequisites 
Node v18 or later 
You can install node from nodejs.org
Or from the command line using 

Angular cli 
Once node is installed you can use npm install @angular/cli to get the latest version of the angular  cli 

Firebase Functions
You will need the firebase cli installed globally on your system to push firebase function changes and init the project 

Git 
You will need git installed on your machine and in your environment path to push your changes to your newly created repo 

Alternatively you can use the GitHub desktop client 

Installation 
This package can be installed from npm package manager just run the following command 
Run npx create-matchstick-app repoName 

Go to console.firebase.google.com

Create a new Firebase project and add Firestore, authentication, storage and hosting. 

Next to go to add new project and select web 
This will provide you with a firebase config object. 

Copy this object and add this to your environment.ts file. (Make sure your environment.ts file is in the .git ignore file so that it isn’t checked in) 

Next install firebase functions globally on your system so that you can use the firebase cli

Next run the firebase init to connect your repo to the newly created project. 
This will create a firebase.json fire in the root of your project that contains some configurations for your firebase set up. 

## Features
Matchstick contains a full login system with the following pages 
Login 
Register 
Forgot password 
Dashboard
Profile page
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
