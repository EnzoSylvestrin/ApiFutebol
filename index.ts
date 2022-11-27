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

app.get('/paises/:qtd', (req, res) => {
    let qtd = parseInt(req.params.qtd);

    let Countrys : Array<String> = [];

    let id = 0;
    let value = 0;

    let inc = false;

    for (let i = 0; i < qtd; i++) {

        if (value > jogos.length - 1) {
            break;
        }

        if (Countrys.indexOf(jogos[value].times[id]) == -1) {
            Countrys.push(jogos[value].times[id]);
        }
        else {
            i--;
        }

        if (inc) {
            value++;
            inc = false;
        }
        else {
            inc = true;
        }

        id++;
        id %= 2;

        console.log(id + '   ' + value);
    }

    res.json(Countrys);
});

app.get('/paises', (req, res) => {
    let Countrys : Array<String> = [];

    for (let jogo of jogos) {
        if (Countrys.indexOf(jogo.times[0]) == -1) {
            Countrys.push(jogo.times[0])
        }

        if (Countrys.indexOf(jogo.times[1]) == -1) {
            Countrys.push(jogo.times[1])
        }
    }

    res.json(Countrys);

});

app.get('/data/:dia', (req, res) => {
    let data = req.params.dia;
    let JogosIncluidos : Array<Jogos> = [];

    data = data.replace("-", "/");
    data = data.replace("-", "/");

    for (let jogo of jogos) {
        if (jogo.data == data) {
            JogosIncluidos.push(jogo);
        }
    }

    return JogosIncluidos.length > 0 ? res.json(JogosIncluidos) :  res.json({erro: 'Nenhum jogo encontrado desse time!'});
});

var porta = process.env.PORT || 8080;

app.listen(porta, () => {
    console.log('listening on port ' + porta);    
});