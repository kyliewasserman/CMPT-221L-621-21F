let express = require('express');
let app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let router = express.Router();
let port = 3000;

app.get("/", function(req, res) {
    var printThis = "Please enter information in one of these forms."
    res.render("index", {name1: printThis});
});

app.get("/test", function(req, res) {
    res.send([1, 2, 3]);
});

app.post("/login", function(req, res) {
    console.log(req.body.login);
    res.redirect('/')
})

app.post("/create", function(req, res) {
    console.log(req.body.create);
    res.redirect('/')
})

app.listen(port, function() {
    console.log("Server running on localhost:3000");
});