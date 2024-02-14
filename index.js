
const express =require('express');
const app =express();

app.get('',(req,res)=>{
    res.send(`
    <h1>hello, this is home page</h1>
    <a href ="/about"> Go to About page </a>
    `);
});

app.get('/about',(req,res)=>{
    res.send(`
    <input type = "text" placeholder=" User Name" value="${req.query.name}" />
    <button>Click Me</button>
    <a href ="/"> Go to Home page </a>
    `);
});

app.get('/help',(req,res)=>{
    res.send([{
        name:'mihir',
        email:'mihir@gmail.com'
    },
    {
        name:'mihir Rathod',
        email:'mihirrathod@gmail.com' 
    }
    ]);
});

app.listen(8000);







// Routing params request and response
// const express =require('express');
// const app =express();

// app.get('',(req,res)=>{
//     console.log("data sent by browser =>>>>  ",req.query.name)
//     res.send("Welcome, " +  req.query.name);
  
// });

// app.get('/about',(req,res)=>{
//     res.send('hello, this is about page');
// });

// app.listen(8000);




// Create a pages
// const express =require('express');
// const app =express();

// app.get('',(req,res)=>{
//     res.send('hello, this is home page');
// });

// app.get('/about',(req,res)=>{
//     res.send('hello, this is about page');
// });

// app.listen(8000);


