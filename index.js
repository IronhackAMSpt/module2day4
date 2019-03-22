const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


app.use('/', (req, res, next)=> {
    console.log(req.url);
    next();
});

app.use(express.static('public'));



app.get('/', (req, res, next) => {
    const data = [{
        name: "mr Wiggles",
        age: 13,
        allergy: "water"
    },{
        name: "mr pickles",
        age: 3,
        allergy: "flees"
    }, {
        name: "Garfield",
        age: 5
    }];

    res.render('index', {cat: data});
});

app.get("/catcafe", (req, res, next) => {
    res.render('catcafe');
})

app.listen(3000, () => {
    console.log("server listening at 3000");
});