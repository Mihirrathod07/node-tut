
const express =require('express');
const path = require('path');

const app =express();
const publicPath= path.join(__dirname,'public');

app.set('view engine','ejs');

app.get('',(_,resp)=>{
resp.sendFile(`${publicPath}/index.html`)
})
app.get('/profile',(_,resp)=>{
    const user={
        name:'mihir rathod',
        email:'mihir@gmail.com',
        city: 'Ahmedabad',
        skills:['html','css','react','node']
    }
    resp.render('profile',{user});
})
app.get('/login',(_,resp)=>{
    resp.render('login')
})
app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
    })
    app.get('/help',(_,resp)=>{
        resp.sendFile(`${publicPath}/help.html`)
        })
        app.get('*',(_,resp)=>{
            resp.sendFile(`${publicPath}/404.html`)
            })
app.listen(8000);



















// const express =require('express');
// const path = require('path');

// const app =express();
// const publicPath= path.join(__dirname,'public');

// app.use(express.static(publicPath));

// app.listen(8000);




