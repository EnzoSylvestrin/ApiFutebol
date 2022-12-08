
export type Jogos = {
    estadio?: "Estádio Catar",
    data: String;
    horario: String;
    times: Array<String>;
    bandeiras: Array<String>;
    grupo: String;
    resultado?: String;
    jogadores?: Array<Array<String>>;
}

export const getJogos = () : Array<Jogos> => {
    const Jogos : Array<Jogos> = [

        //GRUPO A
        {
            data: "20/11/2022",
            horario: '13:00',
            times: ["Catar", "Equador"],
            bandeiras: ["https://s1.static.brasilescola.uol.com.br/be/conteudo/images/bandeira-do-catar.jpg", "https://s5.static.brasilescola.uol.com.br/be/2022/11/bandeira-equador.jpg"],
            grupo: 'A',
            resultado: "0 x 2",
            jogadores: [["Enner Valencia"]]
        },
    
        {
            data: ("21/11/2022"),
            horario: '13:00',
            times: ["Senegal", "Holanda"],
            bandeiras: ["https://http2.mlstatic.com/D_NQ_NP_708704-MLB31738655067_082019-O.jpg", "https://www.holandaevoce.nl/binaries/large/content/gallery/nl-netherlandsandyou/content-afbeeldingen/vlag-nederland.png"],
            resultado: "0 x 2",
            grupo: 'A',
            jogadores: [["Cody Gakpo", "Davy Klaassen"]]
        },
    
        {
            data: ("25/11/2022"),
            horario: '10:00',
            times: ["Catar", "Senegal"],
            bandeiras: ["https://s1.static.brasilescola.uol.com.br/be/conteudo/images/bandeira-do-catar.jpg", "https://http2.mlstatic.com/D_NQ_NP_708704-MLB31738655067_082019-O.jpg"],
            grupo: 'A',
        },
        
        //GRUPO B
        {
            data: ("21/11/2022"),
            horario: '10:00',
            times: ["Inglaterra", "Irã"],
            bandeiras: ["https://static.todamateria.com.br/upload/ba/nd/bandeira_da_inglaterra_bb.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/1280px-Flag_of_Iran.svg.png"],
            grupo: 'B',
            jogadores: [["Jude Bellingham", "Bukayo Saka", "Raheem Sterling", "Marcus Rashford", "Jack Grealish"], ["Mehdi Taremi"]],
            resultado: "6 x 2",
        },
        
        {
            data: ("21/11/2022"),
            horario: '16:00',
            times: ["Estados Unidos", "País Gales"],
            bandeiras: ["https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/05/bandeira-estados-unidos.jpg", "https://www.conexaoeuropa.com.br/wp-content/uploads/2021/02/welsh-flag-23199_1280.jpg"],
            grupo: 'B',
            jogadores: [["Timothy Weah"], ["Gareth Bale"]],
            resultado: "1 x 1",
        },
    
        {
            data: ("21/11/2022"),
            horario: '10:00',
            times: ["Inglaterra", "Estados Unidos"],
            bandeiras: ["https://static.todamateria.com.br/upload/ba/nd/bandeira_da_inglaterra_bb.jpg", "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/05/bandeira-estados-unidos.jpg"],
            grupo: 'B',
        },

        //GRUPO C 
        {
            data: ("22/11/2022"),
            horario: '07:00',
            times: ["Argentina", "Arábia Saudita"],
            bandeiras: ["https://static.significados.com.br/foto/argentina.jpg", "https://www.bandeirasnacionais.com/data/flags/ultra/sa.png"],
            grupo: 'C',
            jogadores: [["Lionel Messi"], ["Saleh, Salem Al-Dawsari"]],
            resultado: "1 x 2",

        },

        {
            data: ("22/11/2022"),
            horario: '13:00',
            times: ["México", "Polônia"],
            bandeiras: ["https://s4.static.brasilescola.uol.com.br/be/2022/10/bandeira-do-mexico.jpg", "https://abrir.link/nKDDw"],
            grupo: 'C',
            resultado: "0 x 0",
        },

        {
            data: ("26/11/2022"),
            horario: '10:00',
            times: ["Polônia", "Arábia Saudita"],
            bandeiras: ["https://abrir.link/nKDDw", "https://www.bandeirasnacionais.com/data/flags/ultra/sa.png"],
            grupo: 'C',
        },

        //GRUPO D
        {
            data: ("22/11/2022"),
            horario: '10:00',
            times: ["Dinamarca", "Tunísia"],
            resultado: "0 x 0",
            bandeiras: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png", "http://geo5.net/imagens/bandeira-do-imperio-otomano-2000px.png"],
            grupo: 'D',
        },
        
        {
            data: ("22/11/2022"),
            horario: '16:00',
            times: ["França", "Austrália"],
            resultado: "4 x 1",
            bandeiras: ["https://static.todamateria.com.br/upload/fr/an/frana_a.jpg", "https://s4.static.brasilescola.uol.com.br/be/2022/10/bandeira-nova-zelandia.jpg"],
            grupo: 'D',
            jogadores: [["Adrien Rabiot", "Olivier Giroud", "Kylian Mbappé"], ["Craig Goodwin"]],
        },
    
        {
            data: ("26/11/2022"),
            horario: '13:00',
            times: ["França", "Dinamarca"],
            bandeiras: ["https://static.todamateria.com.br/upload/fr/an/frana_a.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png"],
            grupo: 'D'
        },


        //GRUPO E
        {
            data: ("23/11/2022"),
            horario: '10:00',
            times: ["Alemanha", "Japão"],
            bandeiras: ["https://imagepng.org/wp-content/uploads/2017/10/bandeira-alemanha.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/2560px-Flag_of_Japan.svg.png"],
            grupo: 'E',
            jogadores: [["İlkay Gündoğan"], ["Ritsu Doan", "Takuma Asano"]],
            resultado: "1 x 2",
        },

        {
            data: ("23/11/2022"),
            horario: '13:00',
            times: ["Espanha", "Costa Rica"],
            bandeiras: ["https://imagepng.org/wp-content/uploads/2017/09/bandeira-espanha.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/1280px-Flag_of_Costa_Rica_%28state%29.svg.png"],
            grupo: 'E',
            jogadores: [["Dani Olmo", "Marco Asensio", "Ferran Torres", "Gavi", "Carlos Soler", "Álvaro Morata"], []],
            resultado: "7 x 0",
        },

        {
            data: ("27/11/2022"),
            horario: '16:00',
            times: ["Espanha", "Alemanha"],
            bandeiras: ["https://imagepng.org/wp-content/uploads/2017/09/bandeira-espanha.png", "https://imagepng.org/wp-content/uploads/2017/10/bandeira-alemanha.png"],
            grupo: 'E',
        },
        
        //GRUPO F
        {
            data: ("23/11/2022"),
            horario: '07:00',
            times: ["Marrocos", "Croácia"],
            resultado: "0 x 0",
            bandeiras: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/255px-Flag_of_Morocco.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1280px-Flag_of_Croatia.svg.png"],
            grupo: 'F',
        },

        {
            data: ("23/11/2022"),
            horario: '16:00',
            times: ["Bélgica", "Canadá"],
            resultado: "1 x 0",
            bandeiras: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/2363px-Flag_of_Belgium.svg.png", "https://imagepng.org/wp-content/uploads/2017/10/bandeira-canada.png"],
            grupo: 'F',
            jogadores: [["Michy Batshuayi"], []],
        },

        {
            data: ("27/11/2022"),
            horario: '10:00',
            times: ["Bélgica", "Marrocos"],
            bandeiras: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/2363px-Flag_of_Belgium.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/255px-Flag_of_Morocco.svg.png"],
            grupo: 'F',
        },

        //GRUPO G
        {
            data: ("24/11/2022"),
            horario: '07:00',
            times: ["Suíça", "Camarões"],
            bandeiras: ["https://static.vecteezy.com/ti/vetor-gratis/p3/1218824-ilustracao-da-suica-bandeira-gratis-vetor.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/255px-Flag_of_Cameroon.svg.png"],
            grupo: 'G',
        },

        {
            data: ("24/11/2022"),
            horario: '16:00',
            times: ["Brasil", "Sérvia"],
            bandeiras: ["https://www.curitiba.pr.leg.br/atividade-parlamentar/legislacao/imagens/bandeira-do-brasil.png/image", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1024px-Flag_of_Serbia.svg.png"],
            grupo: 'G',
        },

        {
            data: ("28/11/2022"),
            horario: '07:00',
            times: ["Camarões", "Sérvia"],
            bandeiras: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/255px-Flag_of_Cameroon.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1024px-Flag_of_Serbia.svg.png"], 
            grupo: 'G',
        },

        //GRUPO H
        {
            data: ("24/11/2022"),
            horario: '10:00',
            times: ["Uruguai", "Coreia do Sul"],
            bandeiras: ["https://bandeira.net/wp-content/uploads/2018/08/bandeira-do-uruguai.png", "https://imagepng.org/wp-content/uploads/2017/08/bandeira-coreia-do-sul.png"],
            grupo: 'H',
        },

        {
            data: ("24/11/2022"),
            horario: '13:00',
            times: ["Portugal", "Gana"],
            bandeiras: ["https://imagepng.org/wp-content/uploads/2017/09/bandeira-portugal.png", "https://www.bandeirasnacionais.com/data/flags/ultra/gh.png"],
            grupo: 'H',
        },

        {
            data: ("28/11/2022"),
            horario: '10:00',
            times: ["Coreia do Sul", "Gana"],
            bandeiras: ["https://imagepng.org/wp-content/uploads/2017/08/bandeira-coreia-do-sul.png", "https://imagepng.org/wp-content/uploads/2017/09/bandeira-portugal.png"], 
            grupo: 'H',
        },
    ]

    return Jogos;
}