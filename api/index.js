const express = require ('express');
const port = 8081;

const server = express();

server.get ('/',(req, res)=>
   res.send('<h1>HOME</h1>')
)

server.get ('/fotos',(req, res)=>
   res.send('<h1>fotos</h1>')
)

server.listen(port, () => {
   console.log (`Servidor está de pé em:
   http:\\localhost:${port}`);
});