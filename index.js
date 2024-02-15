const express = require('express');
const app = express();
const reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please provide your age")
    }
    else if (req.query.age<18) {
        resp.send("You are under aged")
    }
    else {
        next();
    }
}

app.use(reqFilter);

app.get('/', (res, resp) => {
    resp.send('Welcome to Home page')
});

app.get('/users', (res, resp) => {
    resp.send('Welcome to Users page')
});
app.listen(8000)



















// const express =require('express');
// const path = require('path');

// const app =express();
// const publicPath= path.join(__dirname,'public');

// app.use(express.static(publicPath));

// app.listen(8000);




