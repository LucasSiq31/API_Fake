function Valorant(){
    //VALORANT
    const myJSON = `[
        "Valorant", "Riot Games", "Pc", "Tiro Tático", "2020", 
        "<img src='https://s2-techtudo.glbimg.com/gMvILaxMJ-7sjNCGR3517VcVh2c=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/N/j/3cZcm6Qf6TxFIAW0nMNg/como-baixar-valorant-de-graca-the-squad.jpg' alt=''>"
    ]`;
    console.log(myJSON)

    const myArray = JSON.parse(myJSON);
    console.log(myArray)
    
    document.getElementById("nome").innerHTML= myArray[0]
    document.getElementById("desenvolvedor").innerHTML= myArray[1]
    document.getElementById("plataforma").innerHTML= myArray[2]
    document.getElementById("genero").innerHTML= myArray[3]
    document.getElementById("ano").innerHTML= myArray[4]
    document.getElementById("foto").innerHTML= myArray[5]
    
}

//FORTNITE
function Fortnite(){
    const myJSON = `[
        "Fortnite", "Epic Games", "Pc, Console e Mobile", "Battle Royale", "2017", 
        "<img src='https://cdn2.unrealengine.com/01-26br-c4s4-egs-launcher-pdp-2560x1440-2560x1440-bf7792f322f7.jpg' alt=''>"
        ]`;
    console.log(myJSON)

    const myArray = JSON.parse(myJSON);
    console.log(myArray)

    document.getElementById("nome").innerHTML= myArray[0]
    document.getElementById("desenvolvedor").innerHTML= myArray[1]
    document.getElementById("plataforma").innerHTML= myArray[2]
    document.getElementById("genero").innerHTML= myArray[3]
    document.getElementById("ano").innerHTML= myArray[4]
    document.getElementById("foto").innerHTML= myArray[5]
}

//ROCKET LEAGUE
function Rocket(){
    const myJSON = `[
        "Rocket League", "Psyonix", "Pc, Console", "Esporte e Ação", "2015",
        "<img src='https://rocketleague.media.zestyio.com/rl_home_f2p-launch_cross_10656.jpg?width=1920&fit=bounds' alt=''>"
    ]`;
    console.log(myJSON)

    const myArray = JSON.parse(myJSON);
    console.log(myArray)

    document.getElementById("nome").innerHTML= myArray[0]
    document.getElementById("desenvolvedor").innerHTML= myArray[1]
    document.getElementById("plataforma").innerHTML= myArray[2]
    document.getElementById("genero").innerHTML= myArray[3]
    document.getElementById("ano").innerHTML= myArray[4]
    document.getElementById("foto").innerHTML= myArray[5]
}
//FIFA 23
function Fifa(){
    const myJSON = `[
        "FIFA 23", "EA Sports", "Pc e Console", "Esporte", "2022",
        "<img src='https://cdn1.epicgames.com/offer/f5deacee017b4b109476933f7dd2edbd/EGS_EASPORTSFIFA23StandardEdition_EACanada_S1_2560x1440-aaf9c5273c27a485f2cce8cb7e804f5c' alt=''>"
    ]`;
    console.log(myJSON)

    const myArray = JSON.parse(myJSON);
    console.log(myArray)

    document.getElementById("nome").innerHTML= myArray[0]
    document.getElementById("desenvolvedor").innerHTML= myArray[1]
    document.getElementById("plataforma").innerHTML= myArray[2]
    document.getElementById("genero").innerHTML= myArray[3]
    document.getElementById("ano").innerHTML= myArray[4]
    document.getElementById("foto").innerHTML= myArray[5]
}
//GENSHIN IMPACT
function Impact(){
    const myJSON = `[
        "Genshin Impact", "miHoyo", "Pc, PS4 e Mobile", "Aventura, Ação e RPG", "2020",
        "<img src='https://webstatic.hoyoverse.com/upload/op-public/2023/07/05/c4602ccbf1b3a7fbaeec0da7eaf07e7a_7420107217794365486.jpeg' alt=''>"
    ]`;
    console.log(myJSON)

    const myArray = JSON.parse(myJSON);
    console.log(myArray)

    document.getElementById("nome").innerHTML= myArray[0]
    document.getElementById("desenvolvedor").innerHTML= myArray[1]
    document.getElementById("plataforma").innerHTML= myArray[2]
    document.getElementById("genero").innerHTML= myArray[3]
    document.getElementById("ano").innerHTML= myArray[4]
    document.getElementById("foto").innerHTML= myArray[5]
}
