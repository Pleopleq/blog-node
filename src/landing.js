const express    = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

const makePath = (dir, filename) => {
    return path.resolve(__dirname, "..", "public", dir, filename);
};

const todos = ['learn scrum', 'learn react', 'lift heavy'];

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, "..", "public")));


app.get('/index', (req ,res) => {
    res.render(makePath("public", "index.ejs"));
})


app.post('/todo', (req, res) => {
    todos.push(req.body.todo);
    res.json(req.body);
 })


app.listen(3000, () =>{
    console.log('Server up')
})

