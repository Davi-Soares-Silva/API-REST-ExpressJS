const http = require ('http');
const port = 8081;
const url = '127.0.0.1';

const server = http.createServer((request, response)=>{
   const respostas = [];
   respostas["/"] = '<h1>Fernando Leonid</h1>';
   respostas["/fotos"] = '<h1>FOTOS</h1>';
   respostas["/contato"] = '<h1>FOTOS</h1>';

   response.end(respostas[request.url]);

   // if (request.url == '/fotos'){
   //    response.end ('<h1>FOTOS</h1>')
   // }else{
   //    response.end('<h1>Fernando Leonid</h1>')
   // }
});

server.listen(port, url, () =>{
   console.log(`Servidor de pé em ${url}:${port}` ); //interpolação 
});