import express from 'express';
import session from 'express-session';
import cors from 'cors';

import {Jogos, getJogos} from './Objects/jogos';

const app = express();

app.use(session({secret: 'dwajioawdjoijdawioawdjoawsjdawjipiawd'}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json(getJogos());
});

let jogos = getJogos();

app.get('/grupos/:grupo', (req, res) => {
    let grupo = req.params.grupo.toLowerCase();

    let JogosIncluidos : Array<Jogos> = [];

    for (let jogo of jogos) {
        if (jogo.grupo.toLowerCase() == grupo) {
            JogosIncluidos.push(jogo);
        }
    }
    JogosIncluidos.length > 0 ? res.json(JogosIncluidos) : res.json({erro: 'Nenhum jogo encontrado com esse grupo!'});
});

app.get('/time/:time', (req, res) => {
    let time = req.params.time.toLowerCase();

    let JogosIncluidos : Array<Jogos> = [];

    for (let jogo of jogos) {
        if (jogo.times[0].toLowerCase() == time || jogo.times[1].toLowerCase() == time) {
            JogosIncluidos.push(jogo);
        }
    }
    
    JogosIncluidos.length > 0 ? res.json(JogosIncluidos) : res.json({erro: 'Nenhum jogo encontrado desse time!'});

});

app.get('/countries/:qtd', (req, res) => {
    let qtd = parseInt(req.params.qtd);

    let Countrys : Array<String> = [];

    let id = 0;

    for (let i = 0; i < qtd; i++) {
        if (Countrys.indexOf(jogos[i].times[id]) == -1) {
            Countrys.push(jogos[i].times[id])
        }
        else {
            i--;
        }

        if (id == 0) {
            id = 1;
        }
        else {
            id = 0;
        }
    }

    res.json(Countrys);
})

var porta = process.env.PORT || 8080;

app.listen(porta, () => {
    console.log('listening on port ' + porta);    
});