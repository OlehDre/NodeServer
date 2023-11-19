const http = require("http")

http.createServer(function(request, response){
    
    response.setHeader("Content-Type", "text; charset=utf-8;");

    if(request.url === "/home" || request.url === "/"){
        response.write("Work");
    }

    response.end("NodeJs");


}).listen(3000, "127.0.0.1", function(){
    console.log("Server start listening");
});