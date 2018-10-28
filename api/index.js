const express = require ('express');
const port = 8081;

const server = express();

const COLLABS = [
   { nick: 'ronildolps', qtd: 382},
   { nick: 'guelo', qtd: 3452},
   { nick: 'vitorEmanoel', qtd: 205}
]

// verbos || Method
// GET, POST, PUT (patch quase igual) e DELETE

server.get ('/collabs', (req, res)=>{
   res.send(COLLABS);
})

server.listen(port, () => {
   console.log (`Servidor está de pé em:
   http:\\localhost:${port}`);
});