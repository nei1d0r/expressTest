// pull in express
const express = require('express');
// set app to be an instance of express
const app = express();
//import path module
const path = require('path');

// set the PORT or choose environment variables
const PORT = process.env.PORT || 5000

//Set static folder, app.use (middleware)
app.use(express.static(path.join(__dirname, 'public')));

// app.express gives us access to lots of methods, such as listen
// we can listen to a specific port
// pass in a callback to print out when connected
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

// ROUTES
// create main route
// need to import path module (above) to handle file paths
app.get('/' , (req, res) => {
    // __dirname could be set in config
    res.sendFile('index.html')
})

// create about route
app.get('/about' , (req, res) => {
    res.send('This is About')
})

const members = [
    {
        id: 1,
        name: 'Bob',
        email: 'bob@bob.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'Ralph',
        email: 'ralph@bob.com',
        status: 'inactive'
    },
    {
        id: 3,
        name: 'Clarice',
        email: 'clarice@bob.com',
        status: 'inactive'
    },
    {
        id: 4,
        name: 'Jeff',
        email: 'Jeff@bob.com',
        status: 'active'
    }
]

//simple REST api - using fake data
//res.json
app.get('/api/members', (req, res) => {
    res.json(members);
})