// pull in express
const express = require('express');
// set app to be an instance of express
const app = express();

// set the PORT or choose environment variables
const PORT = process.env.PORT || 5000

// app.express gives us access to lots of methods, such as listen
// we can listen to a specific port
// pass in a callback to print out when connected
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

// create main route
app.get('/' , (req, res) => {
    res.send('hello world')
})

// create about route
app.get('/about' , (req, res) => {
    res.send('This is About')
})