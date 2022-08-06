const gamesListArr = [

    {name: 'Corra, Dino! Corra!', img: './dinoGame/assets/img/trex.png', url: './dinoGame/index.html'},

    {name: 'Memory Game', img: './src/assets/img/games/memoryGame.png', url: './memoryGame/index.html'},

    // {name: '', img: '', url: ''},
]

function gamesList() {

    let getList = document.getElementById('gamesList')

    for(let i = 0; i < gamesListArr.length; i++ ){

        let gameItem = getList.innerHTML += `
        
            <li class="gameCard">
            
                <div class="gameImg"><img src="${gamesListArr[i].img}" alt="${gamesListArr[i].name}"></div>

                <hr>

                <div class="gameNome"><a href="${gamesListArr[i].url}">${gamesListArr[i].name}</a></div>
            
            </li>

        `
    }

    // gamesListArr.forEach((item) => {
        
    //     `
    //     <li class="gameCard">
                
    //         <div class="gameImg"><img src='${item.img}' alt="${item.name}"></div>

    //         <hr>

    //         <div class="gameNome"><a href="${item.url}">${item.name}</a></div>
                
    //     </li>
    //     `
    // })
}

gamesList()