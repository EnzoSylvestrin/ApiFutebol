
type Jogos = {
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
            resultado: "2 x 0",
            jogadores: [["Enner Valencia"]]
        },
    
        {
            data: ("21/11/2022"),
            horario: '13:00',
            times: ["Senegal", "Holanda"],
            bandeiras: ["https://http2.mlstatic.com/D_NQ_NP_708704-MLB31738655067_082019-O.jpg", "https://www.holandaevoce.nl/binaries/large/content/gallery/nl-netherlandsandyou/content-afbeeldingen/vlag-nederland.png"],
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
            bandeiras: ["https://static.todamateria.com.br/upload/ba/nd/bandeira_da_inglaterra_bb.jpg", "Flag_of_Iran.svg.webpFlag_of_Iran.svg.webp"],
            grupo: 'B',
            jogadores: [["Jude Bellingham", "Bukayo Saka", "Raheem Sterling", "Marcus Rashford", "Jack Grealish"], ["Mehdi Taremi"]],
        },
        
        {
            data: ("21/11/2022"),
            horario: '16:00',
            times: ["Estados Unidos", "País Gales"],
            bandeiras: ["https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/05/bandeira-estados-unidos.jpg", "https://www.conexaoeuropa.com.br/wp-content/uploads/2021/02/welsh-flag-23199_1280.jpg"],
            grupo: 'B',
            jogadores: [["Timothy Weah"], ["Gareth Bale"]],
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
            bandeiras: [],
            grupo: 'C',
            jogadores: [["Lionel Messi"], ["Saleh, Salem Al-Dawsari"]],
        },

        {
            data: ("22/11/2022"),
            horario: '13:00',
            times: ["México", "Polônia"],
            bandeiras: [],
            grupo: 'C',
            jogadores: [],
        },

        {
            data: ("26/11/2022"),
            horario: '10:00',
            times: ["Polônia", "Arabia Saudita"],
            bandeiras: [],
            grupo: 'C',
            jogadores: [],
        },

        //GRUPO D
        {
            data: ("22/11/2022"),
            horario: '10:00',
            times: ["Dinamarca", "Tunísia"],
            bandeiras: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png", "http://geo5.net/imagens/bandeira-do-imperio-otomano-2000px.png"],
            grupo: 'B',
        },
        
        {
            data: ("22/11/2022"),
            horario: '16:00',
            times: ["França", "Austrália"],
            bandeiras: ["https://static.todamateria.com.br/upload/fr/an/frana_a.jpg", "https://s4.static.brasilescola.uol.com.br/be/2022/10/bandeira-nova-zelandia.jpg"],
            grupo: 'B',
            jogadores: [["Timothy Weah"], ["Gareth Bale"]],
        },
    
        {
            data: ("21/11/2022"),
            horario: '10:00',
            times: ["Inglaterra", "Estados Unidos"],
            bandeiras: ["https://static.todamateria.com.br/upload/ba/nd/bandeira_da_inglaterra_bb.jpg", "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/05/bandeira-estados-unidos.jpg"],
            grupo: 'B',
        },


        //GRUPO E
        {
            data: ("23/11/2022"),
            horario: '10:00',
            times: ["Alemanha", "Japão"],
            bandeiras: [],
            grupo: 'E',
            jogadores: [["İlkay Gündoğan"], ["Ritsu Doan", "Takuma Asano"]],
        },

        {
            data: ("23/11/2022"),
            horario: '13:00',
            times: ["Espanha", "Costa Rica"],
            bandeiras: [],
            grupo: 'E',
            jogadores: [["Michy Batshuayi"], []],
        },

        {
            data: ("27/11/2022"),
            horario: '10:00',
            times: ["Bélgica", "Marrocos"],
            bandeiras: [],
            grupo: 'E',
            jogadores: [],
        },
        
        //GRUPO F
        {
            data: ("23/11/2022"),
            horario: '07:00',
            times: ["Marrocas", "Crocia"],
            bandeiras: [],
            grupo: 'F',
            jogadores: [],
        },

        {
            data: ("23/11/2022"),
            horario: '16:00',
            times: ["Bélgica", "Canadá"],
            bandeiras: [],
            grupo: 'F',
            jogadores: [["Michy Batshuayi"], []],
        },

        {
            data: ("27/11/2022"),
            horario: '10:00',
            times: ["Bélgica", "Marrocos"],
            bandeiras: [],
            grupo: 'F',
            jogadores: [],
        },

        //GRUPO G

        //GRUPO H
    ]

    return Jogos;
}