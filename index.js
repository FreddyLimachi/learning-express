const express = require('express')
const morgan = require('morgan')
const app = express();


// Settings
app.set('appName', 'Learning Express.js')
app.set('port', 3000);
app.set('view engine', 'ejs');


// Middelwares
app.use(express.json());
app.use(morgan('dev'));


app.get('/', (req, res) => {
    const data = [{name: 'Jhon'},{name: 'Joe'},{name: 'Cameron'},{name: 'Ryan'}]
    res.render('index.ejs', {people: data});
})

app.get('/user', (req, res) => {
    res.json({
        username: 'Freddy',
        lastname: 'Limachi'
    });
});

app.post('/user/:id', (req, res) => {
    console.log(req.body)
    console.log(req.params)
    res.send('post request received');
})

app.put('/user/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send('update request received');
})

app.delete('/user/:id', (req, res) => {
    console.log("el usuario "+req.params.id+" fue eliminado")
    res.send('<h1>Delete request received</h1>');
})

app.use(express.static('public'))

app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log('Server on port '+app.get('port'));
})