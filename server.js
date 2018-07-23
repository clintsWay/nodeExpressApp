const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express</h1>');
    res.send({
        name: 'clint',
        likes: [
            'hamburgers',
            'french fries',
            'beer'
        ]
    });
});
app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/bad', (req, res) => {
    res.send({
        name: 'bad',
        errorMessage: 'bad request'
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});