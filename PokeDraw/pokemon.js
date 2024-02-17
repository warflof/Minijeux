
const pokemonCount = 151;
const maxAdj = 6;
var pokedex = {};
var adjectif = {};



//window.onload = 
async function displayPokemon() {
    pokedex = {};
    const randomPokemon = getRandomPokeNumber(pokemonCount);
    await getPokemon(randomPokemon);
    
    document.getElementById("nom-Pokemon").innerText = " ";
   
    let pokemon = document.createElement("div");
    
    pokemon.id = randomPokemon;
    pokemon.innerText = randomPokemon.toString() + ". " + pokedex[randomPokemon]["name"];
    document.getElementById("nom-Pokemon").append(pokemon);
    
    pokeImg = document.getElementById("pokemon-img").src = pokedex[randomPokemon]["img"];

    getAdjectif(getRandomAdjectifNumber(maxAdj));

    console.log(pokedex);
} 

async function getPokemon(num) {
    let url = "https://tyradex.vercel.app/api/v1/pokemon/" + num.toString();

    let res = await fetch(url);
    let pokemon = await res.json();

    let pokemonName = pokemon["name"]["fr"];
    let pokemonSprite = pokemon["sprites"]["regular"];

    pokedex[num] = {"name" : pokemonName, "img" : pokemonSprite};
}

async function getAdjectif(num) {
    let adj = await fetch(' ./adjectif.json')
    let adjectif = await adj.json();
    
    let adjectifName = adjectif[num];
     
    document.getElementById("adjectif").innerText = " + " + adjectifName;   

    console.log(adjectif);

    const array = [];

    for (var i in  adjectif) {
        array.push([i, adjectif[i]]);
    }

    return array.length;
}



function getRandomPokeNumber(max) {
    pokemonNumber = Math.floor(Math.random() * max);
    if(pokemonNumber > 0){
        return pokemonNumber;
    } else {
        getRandomPokeNumber(max);
    }
}

function getRandomAdjectifNumber(maxAjd) {
    return Math.floor(Math.random() * maxAjd);
}