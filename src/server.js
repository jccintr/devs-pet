import express from "express";
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import path from 'path';
import rotas from './routes/index.js';
//import { fileURLToPath } from 'url';
//const __filename = fileURLToPath(import.meta.url);

//const __dirname = path.dirname(__filename);
const __dirname = path.resolve();

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
//console.log('dirname='+__dirname);
//console.log('path='+path.join(__dirname,'views'));
server.set('views', path.join(__dirname,'./src/views'));
server.engine('mustache',mustache());

server.use(express.static(path.join(__dirname,'./public')));

// rotas 
server.use(rotas);

server.use((req,res)=>{
    res.render('pages/404');
});
console.log('Servidor executando na porta '+process.env.PORT);
server.listen(process.env.PORT);
