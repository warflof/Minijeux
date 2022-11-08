/* TODO LIST :
    X Générer un mot alétoire
    O Afficher le mot masqué
    O Pouvoir proposer des lettres
    O Afficher les lettres trouvés
    O Générer un nombre d'erreurs max
    O Afficher des lettres visibles (En fonction de la difficulté).
*/

const buttonPlay = document.getElementById('beginGame');
const allWords = ['Corruption', 'Pot-de-vin', 'Dictateur',
 'Afrique', 'Torture', 'Peuple'];

const keyboardDiv = document.getElementById('keyboard');

 let wordToFindDiv = document.getElementById('wordToFindDiv');

buttonPlay.addEventListener('click', function(){
    beginGame();
})

function beginGame() {
    // Clear le mot à trouver sous forme de barres 
    wordToFindDiv.innerHTML = '';

    // Générer un mot au hasard

    let wordToFind = generateWord();
    
    

    let wordToFindArray = Array.from(wordToFind);
    console.log(wordToFindArray);

    let table = document.createElement('table');
    let line = document.createElement('tr');
    wordToFindArray.forEach(letter => {

        let td = document.createElement('td');
        td.dataset.letter = letter;
        td.innerText = "_";
        line.appendChild(td);


    });

    table.appendChild(line);
    wordToFindDiv.appendChild(table);

    generateKeyboard();

}

function generateWord(){
    let indexWord = getRandomInt(allWords.length);
    return allWords[indexWord];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateKeyboard(){
    let alphabet = generateAlphabet(true);
    alphabet.forEach(letter => {
        let lettreDiv = document.createElement("div");
        lettreDiv.innerHTML = letter;
        lettreDiv.classList.add('keyboardStyle')
        keyboardDiv.appendChild(lettreDiv);
    })
}

function generateAlphabet(capital = false) {
	// return [...Array(26)].map((_, i) => String.fromCharCode(i + (capital ? 65 : 97)));

    let tab = [];
    let i = 65;
    if(!capital)
    {
        i+=32;
    }
    let finish = i+26;
    for(i; i<finish; i++) {
            tab.push(String.fromCharCode(i));
    }
    return tab
}


