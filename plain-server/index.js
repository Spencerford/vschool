let http = require("http");
const PORT = 8080;

//req --> request
//res ---> response

let server = http.createServer((req, res) => {
    if(req.method === "GET"){
        res.writeHead(200, {"content-type": "text/html"});
        if(req.url === "/"){
            res.write("<h1>this would be my index.html</h1>");
        } else if(req.url === "/blog"){
            res.write("<h1>this would be my blog.html</h1>");
        }
        res.end();
    }
});

server.listen(PORT);