const express = require("express");
const cors = require("cors");

const app = express()

app.use(cors());
app.use(express.json())


app.post('/login', function (req, res, next) {
    const success = req.body.username === "admin" && req.body.password === "1234";
    if (success) {
        res.status(200);
    } else {
        res.status(401);
    }
    setTimeout(() => res.send() , 3000);
});

app.post('/users', function (req, res, next) {
    setTimeout(() => {
        res.status(200);
        res.json(req.body);
    } , 3000);
});

app.listen(8080, function () {
    console.log('starting wbox-forms test server');
});
