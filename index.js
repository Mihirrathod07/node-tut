




let a=10;
let b=0;

let waitingData=new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve(30)
}, 2000)
})
waitingData.then((data)=>{
    b=data;
    console.log(a+b)
})





// Asynchronous Programming Language
// let a=10;
// let b=0;

// setTimeout(() => {
//     b=20
// }, 2000)
// console.log(a+b)
// console.log("start exe...")

// setTimeout(() => {
//     console.log("logic exe...")
// }, 2000)
// console.log("complete exe...")






// Crud opration with file system
// const { dir } = require('console');
// const fs =require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'crud');
// const filePath= `${dirPath}/apple.txt`;

//fs.writeFileSync(filePath,'this is the simple files');
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })
// fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
//     if(!err) console.log("file is updated")
// })
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name changed")
// })
// fs.unlinkSync(`${dirPath}/fruit.txt`)





// Display file list from folder
// const fs =require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'files');
//  for(i=0;i<5;i++)
//  {
//      fs.writeFileSync(dirPath+"/Hello"+i+".txt","a simple tet file");
//  }

// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((item)=>{
//         console.log("file name is", item)
//     })
// })







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