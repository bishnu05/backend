// Node.js Basics:
// Introduction to Node.js
// Installing Node.js and npm
// Working with Modules
// File System Operations
// understanding HTTP Module

// Node js is a Javascript runtime environment.

// const fs = require('fs');

// fs.writeFile('example.txt', 'Hello, World!', (err) => {
//     if (err) console.error(err);
//     else console.log('First File created successfully!');
// });

// fs.appendFile('example.txt', ' New file created', (err) => {
//     if (err) console.error(err);
//     else console.log('File appended successfully!');
// });

// fs.rename('example.txt', 'newExample.txt', (err) => {
//     if (err) console.error(err);
//     else console.log('File renamed successfully!');
// });

// fs.copyFile('newExample.txt', './copy/copy.txt', (err) => {
//     if (err) console.error(err);
//     else console.log('File copied successfully!');
// });

// fs.unlink('newExample.txt', (err) => {
//     if (err) console.error(err);
//     else console.log('File deleted successfully!');
// });

// fs.rm("./copy", { recursive: true }, (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('Directory deleted successfully!');
//     }
// });

// fs.mkdir("myFolder", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Folder created");
// });

// basic how to read file
// const data = fs.readFileSync("example.txt", "utf8");
// console.log(data);

// fs.readFile("example.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// HTTP Module Example

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Hello from Node.js HTTP Server!');
// });

// server.listen(3000);

// NPM understanding
// installing and uninstalling anything basics & advanced
// understanding node_modules
// dependencies and devDependencies
// scripts - understanding default scripts and creating custom scripts

// console.log("Node.js basics script executed.");

// Express.js Framework:
// Introduction to Express.js

// Express js ek npm package hai jo Node.js ke upar web applications banane ke liye use hota hai.
// ye ek framework hai
// manages everything from receiving the request and giving response to the client.

// Setting up an Express.js Application
// Routing in Express.js
// Middleware in Express.js
// Handling Requests and Responses
// Error Handling in Express.js

import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  console.log("middleware 1 executed");
  next();
});

app.use(function (req, res, next) {
  console.log("middleware 2 executed");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.get("/about", (req, res) => {
  res.send("About Page!");
});

app.get("/profile", (req, res,next) => {
//   res.send("Profile Page!");
    next(new Error('Something went wrong in profile route!'));
});

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send("Something went wrong, We don't have any idea!");
});

app.listen(3000);


// form handling and working with forms

// handle backend process of forms and making sure the data from any frontend library, framework,templating engines, we still handle it at the backend


