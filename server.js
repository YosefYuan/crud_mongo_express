const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

// app.listen(3000, function () {
//     console.log('listening on 3000');
// })

// app.get('/',(req,res) => {
//     res.send('Hello World')
// })
app.set('view engine','ejs');

app.get('/', (req, res) => {
    const cursor = db.collection('quotes').find().toArray((err,result) => {
        console.log(result);
        
        // renders index.ejs
        res.render('index.ejs',{quotes:result});
    });
    // console.log('cursor',cursor);
    // res.sendFile(__dirname + '/index.html')

})

// app.post('/quotes', (req, res) => {
//     console.log(req.body);
//     console.log('Hellooooooooooooooo!')
// })

const mongoDbUrl = 'mongodb://6e_hr:123456xyz@ds261430.mlab.com:61430/6e_hr';
const MongoClient = require('mongodb').MongoClient;

let db;

MongoClient.connect(mongoDbUrl, (err, client) => {
    if (err) return console.log(err);

    db = client.db('6e_hr');
    // console.log('db',db)
    app.listen(3000, () => {
        console.log('listening on 3000');
    })
})

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err);

        console.log('saved to database');
        res.redirect('/');
    })
})