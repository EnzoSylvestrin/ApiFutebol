import express from 'express';
import session from 'express-session';
import cors from 'cors';

import {getJogos} from './Objects/jogos';

const app = express();

app.use(session({secret: 'dwajioawdjoijdawioawdjoawsjdawjipiawd'}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json(getJogos());
})

var porta = process.env.PORT || 8080;

app.listen(porta, () => {
    console.log('listening on port ' + porta);    
});