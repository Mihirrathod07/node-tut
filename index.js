const express =require('express');
const app =express();

app.get('',(req,res)=>{
    console.log("data sent by browser =>>>>  ",req.query.name)
    res.send("Welcome, " +  req.query.name);
  
});

app.get('/about',(req,res)=>{
    res.send('hello, this is about page');
});

app.listen(8000);





// const express =require('express');
// const app =express();

// app.get('',(req,res)=>{
//     res.send('hello, this is home page');
// });

// app.get('/about',(req,res)=>{
//     res.send('hello, this is about page');
// });

// app.listen(8000);


