// Appel JSON
let adjectif = null;
let maxAdj = 0;

async function GetFile(){
    let file = await fetch('./adjectif.json');
    let json = await file.json();

    console.log(json);
    adjectif = json;
    maxAdj = json.length;
}
GetFile();



const pokemonCount = 151;
var pokedex = {};



async function displayPokemon() {
    pokedex = {};
    const randomPokemon = getRandomPokeNumber(pokemonCount);
    await getPokemon(randomPokemon);
    
    document.getElementById("nom-Pokemon").innerText = " ";
    document.getElementById("plus-Mid-Text").innerText = " ";
   
    let pokemon = document.createElement("div");
    
    pokemon.id = randomPokemon;
    pokemon.innerText = randomPokemon.toString() + ". " + pokedex[randomPokemon]["name"];
    document.getElementById("nom-Pokemon").append(pokemon);
    
    pokeImg = document.getElementById("pokemon-img").src = pokedex[randomPokemon]["img"];

    let plusMidText = document.createElement("p");
    plusMidText.className = "font-black text-6xl text-slate-50";
    plusMidText.innerText = "+";
    document.getElementById("plus-Mid-Text").append(plusMidText);

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
    
    let adjectifName = adjectif[num];
     
    document.getElementById("adjectif").innerText = adjectifName;   

    console.log(adjectif[num]);

}


// RANDOM FUNCTION

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