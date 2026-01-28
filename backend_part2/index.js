const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")));
console.log(__dirname);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/author/:username', (req, res) => {
    res.send(`Welcome, ${req.params.username}`);
});

app.get('/author/:username/:age', (req, res) => {
    res.send(`Welcome, ${req.params.username} of age ${req.params.age}`);
});

app.listen(3000, () => {
    console.log('Server is running');
});



// setting up parsers for from

// setting up ejs for ejs pages
//     install ejs from npm
//     setup ejs as a view engine


// setting up public static files

// dynamic Routing
//       dynamic Routing
//       how to get data coming from frontend at backend route


