const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
    console.log('Root route accessed');
});

app.listen(3000);


