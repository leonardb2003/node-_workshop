//  console.log("Hello World");
// require('./addition');

// let {addition} = require('./addition');
// addition(3, 7);
// addition(7, 7);

// const http =require('http');
// // port
// const port = parseInt(process.env.port)
// || 4000; 

// // web server
// http.createServer((req, res)=>{
//     const currUrl = req.url;
//     console.log('Url: ', currUrl, '\nMethod: ', req.method);
//     res.writeHead(200, {'Content-type': 'text/html'});
//     switch(currUrl) {
//         case '/':
//             res.end('You are home');
//         break
//         case '/about':
//             res.end('About me page');
//         break
//         case '/data':
//             res.end('Page data');
//         break
//         default:
//             res.end('Page / content was not found');
//     }
// }).listen(port, ()=>{
//     console.log(`Server is running at port ${port}`);
// })

const express = require('express');
// port
const port = parseInt(process.env.port) || 4000;
// Express app
const app = express();
// Router
const route = express.Router();

app.use(
    route
)
// Home or /
route.get('/', (reg, res)=>{
    res.status(200).send("Well Done!");
})
app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
})