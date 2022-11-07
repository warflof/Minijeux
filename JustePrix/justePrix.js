 //Générer un chiffre aléatoire
//L'utilisateur fera des propositions
//Continuer tant qu'il n'a pas la bonne proposition

let numberToFind = 0;
let numberPropal = document.getElementById('propalNumber').value;
let HideShowButtonRestart = document.getElementsByClassName('restart')[0]; 
HideShowButtonRestart.style.display = 'none';
const countdown = document.getElementById('countdown');
let tempRestant = 0;
let compteurInterval = null;






document.getElementById('startGame').addEventListener("click", function () {
    numberToFind = getRandomInt (1000);
    
    let hiddenBox = document.getElementsByClassName('boxNumber')[0];
    hiddenBox.style.display = 'block';

    let hiddenButtonStart = document.getElementsByClassName('start')[0];
    hiddenButtonStart.style.display = 'none';
    
    let HideShowButtonRestart = document.getElementsByClassName('restart')[0]; 
    HideShowButtonRestart.style.display = 'none';

    let Result = document.getElementsByClassName('resultStyle')[0];
    Result.style.display = 'inline-block';

    tempRestant = 45;
    var compteur = setInterval(() => {
        countdown.innerHTML = tempRestant;
        tempRestant--;
        if(tempRestant <= -1) {
            clearInterval(compteur);
            countdown.innerHTML = "Perdu, tête de cul !";
            HideShowButtonRestart.style.display = 'inline-block';
            hiddenBox.style.display = 'none';
            Result.style.display = 'none';
        }

        
    }, 1000);



    
   


    
      

        
    
});

document.getElementById('restartGame').addEventListener("click", function () {
    location.reload();
    
})



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.getElementById('go')
    .addEventListener('click', function(event){
            CheckPropal();    
    })


document.getElementById('propalNumber')
    .addEventListener('keyup', function(event){
        if(event.key == 'Enter') {
            CheckPropal();
        }
    })

// Fonction qui nous dit si c'est Moins / Plus / Gagné
    function CheckPropal() {
        var numberPropal = document.getElementById('propalNumber').value;
        if(numberToFind > numberPropal) {
            // C'est plus
            let plusResult = document.getElementById('result');
            plusResult.innerHTML = "C'est plus"
            let audio = new Audio("Plus.mp3");
            audio.play();
        }

        else if(numberToFind < numberPropal) {
            // C'est moins
            let moinsResult = document.getElementById('result');
            moinsResult.innerHTML = "C'est moins";
            let audio = new Audio("Moins.mp3");
            audio.play();
        }

        else if(numberToFind == numberPropal) {
            // C'est gagné
            let winResult = document.getElementById('result');
            winResult.innerHTML = numberPropal +" <br> C'est Gagné !";
            let audio = new Audio("Gagné.mp3");
            audio.play();
            let hiddenBox = document.getElementsByClassName('boxNumber')[0];
            hiddenBox.style.visibility = 'hidden';
            let HideShowbuttonRestart = document.getElementsByClassName('restart')[0];
            HideShowbuttonRestart.style.display = 'inline-block';
            
            tempRestant = tempRestant;
            var compteur = clearInterval()
            countdown.innerHTML = tempRestant;
                
                
            clearInterval(compteur);
                    
                    HideShowButtonRestart.style.display = 'inline-block';
                    hiddenBox.style.display = 'none';
                    Result.style.display = 'none';
                
        
                
            
            
           
            
            
        }
    }



// Prendre le besoin et le transformer en outil métier(Fonctionnalités)
// Puis Mock-up et découpement en bloc de fonctionnalités pour écrire son pseudo code
