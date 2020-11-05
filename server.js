const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('personnes.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5555;

server.use(middlewares);
server.use(router);

server.listen(port);