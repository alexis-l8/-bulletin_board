// Upper Camel Case variable names for all module global variables which are assigned required modules
// Simple node.js code style tips to improve code quality - https://gist.github.com/hueniverse/a06f6315ea736ed1b46d
const Hapi = require ('hapi');
const server = new Hapi.Server;
const routes = require('./routes')
const inert = require('inert')
const vision = require('vision')
const handlebars = require('./handlebars')

server.connection({
  port: process.env.PORT || 3000, //process.env.PORT sets the environment variable PORT to port your web server should listen to - http://stackoverflow.com/questions/18864677/what-is-process-env-port-in-node-js
  host:'localhost'
})

server.register([inert, vision], (err) => {
  if (err) throw err;

  server.views(handlebars);
  server.route(routes);
})




module.exports = server;
