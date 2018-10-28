const express = require ('express');
const port = 8081;

const server = express();

// verbos || Method
// GET, POST, PUT (patch quase igual) e DELETE

server.get ('/',(req, res)=>
   res.send('<h1>HOME</h1>')
)

server.get ('/fotos',(req, res)=>
   res.send('<img src=https://pbs.twimg.com/profile_images/484465391926652928/GrhXElzJ_400x400.png>')
)

server.get ('/cadastro',(req, res)=>
   res.send('<h1>Cadastro</h1>')
)

server.listen(port, () => {
   console.log (`Servidor está de pé em:
   http:\\localhost:${port}`);
});