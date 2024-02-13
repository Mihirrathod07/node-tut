
// Display file list from folder
const fs =require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');
// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+"/Hello"+i+".txt","a simple tet file");
// }

fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log("file name is", item)
    })
})



// getting input from command line
// const fs = require('fs');

// const input = process.argv;

// if(input[2]=='add')
// {
//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove')
// {
//     fs.unlinkSync(input[3])
// }
// else
// {
//     console.log("invalid input ")
// }



// simple basic api
// const http= require('http');
// const data =require('./data');
// http.createServer((req,resp)=>{
// resp.writeHead(200,{'Content-Type':'application/json'});
// resp.write(JSON.stringify(data));
// resp.end();
// }).listen(8000);