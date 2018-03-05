var http=require('http');
var fs=require('fs');

http.createServer(function(request,response){
    console.log('requet was mode:'+request.url);
    response.writeHead('200',{'Content-Type':'text/html'});
    var mstream=fs.createReadStream(__dirname+'/index.html','utf8');
    mstream.pipe(response);
}).listen(5244);
console.log("Listen to port 5244");