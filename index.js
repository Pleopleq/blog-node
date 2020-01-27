const express    = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded ({extended:true}));


app.get('/', (req,res) => {
    res.render('landing.ejs')
})

app.get('/signin', (req, res) => {
    res.render('signin.ejs')
})

app.post('/signin', (req, res) => {
    res.send('Se supone que ya estas adentro aqui o algo asi')
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', (req, res) => {
    res.send('se supone que aqui ya te registraste y la madre')
})

app.listen(3000, () =>{
    console.log('Server up')
})