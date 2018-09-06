import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as contentController from '../controllers/content';

const { NODE_PORT } = process.env;
const server = express();

server.use(bodyParser.json());
server.use('/', cors(), contentController.index);
server.listen({ port: NODE_PORT }, () => console.log(`Server started on port ${NODE_PORT}`));
