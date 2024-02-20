// Appel JSON
let adjectif = null;
let maxAdj = 0;

let timerDisplay = null;
let nIntervalId;

async function GetFile(){
    let file = await fetch('./adjectif.json');
    let json = await file.json();

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
    document.getElementById("timerCountHidden").innerText = " ";
       
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

     // Retire Hidden des TimersButtons 
     let timerButton30 = document.getElementById("timerStartButton30");
     timerButton30.classList.remove("hidden"); 
 
     let timerButton60 = document.getElementById("timerStartButton60");
     timerButton60.classList.remove("hidden"); 
 
     let timerButton180 = document.getElementById("timerStartButton180");
     timerButton180.classList.remove("hidden"); 

     let cross = document.getElementById("cross");
     cross.classList.remove("hidden")

     

} 

function CloseTimers(){
    let timerButton30 = document.getElementById("timerStartButton30");
     timerButton30.classList.add("hidden"); 
 
     let timerButton60 = document.getElementById("timerStartButton60");
     timerButton60.classList.add("hidden"); 
 
     let timerButton180 = document.getElementById("timerStartButton180");
     timerButton180.classList.add("hidden"); 

     let cross = document.getElementById("cross");
     cross.classList.add("hidden")
}

function SetTimer(departMinutes) {
    
    let temps = departMinutes * 60;

    let timerButton30 = document.getElementById("timerStartButton30");
    timerButton30.classList.add("hidden"); 

    let timerButton60 = document.getElementById("timerStartButton60");
    timerButton60.classList.add("hidden"); 

    let timerButton180 = document.getElementById("timerStartButton180");
    timerButton180.classList.add("hidden"); 

    let cross = document.getElementById("cross");
    cross.classList.add("hidden");

    clearInterval(nIntervalId);

    const delay = 1000;

    timerDisplay = document.createElement("div");
    timerDisplay.id = "timer";
    timerDisplay.className = "font-black text-6xl text-slate-50 hidden";
    document.getElementById("timerCountHidden").appendChild(timerDisplay);

    
    nIntervalId = setInterval(() => {
        let minutes = parseInt(temps / 60, 10);
        let secondes = parseInt(temps % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        secondes = secondes < 10 ? "0" + secondes : secondes;
        timerDisplay.innerText = `${minutes}:${secondes}`;
        temps = temps <= 0 ? 0 : temps -1
    }, delay)


    document.getElementById("timer").classList.remove("hidden");    
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