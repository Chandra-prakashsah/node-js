const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const log=`${Date.now().toLocaleString()} ${req.url}\n`;
    fs.appendFile('server.log',log,(err,data)=>{
        switch (req.url) {
            case '/':
                res.end("Home Page")
                break;
             case '/about':
                res.end("About Page")
                break;
            default:
                res.end("Not Found")
                break;
        }
    });
});

server.listen(3000,()=>{
    console.log('listening on port 3000');
});
