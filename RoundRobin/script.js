
var i = 0;
var j = 0;
var original = document.getElementById('InputPlayers');
var NbPlayer = document.getElementById('PlayerNb');

// Duplique les input afin d'ajouter des Joueurs
function duplicate() {
    
    if(j < 7){
    var clone = original.cloneNode(true);
    clone.nodeName ="InputPlayers" + ++i;
    //clone.onclick = duplicate;
    
        original.parentNode.appendChild(clone);
        j++
        NbPlayer.innerHTML = j+1;
    }
    else{
        alert('Vous ne pouvez plus ajouter de membres');
    }
          
}

function getForm() {
    let myForm = document.getElementById('NomJoueurs');

    let formObj = new FormData(myForm);
    let playersList = formObj.getAll('name[]');

    var numberOfRounds = playersList.length -1;

        function generateRounds() {
            textRound = document.getElementById('roundRobin');
            textMatch = document.getElementById('match');
             
            //Initie le nombre de rounds en fonction du nombre de participants

                for(round = 0; round < numberOfRounds; round++) {
                    document.write('<h1 class="round">' + 'Round ' + (round+1) + '</h1>');

                    // Dispatche les participants entre eux
                
                    
                    //
                    for (var match = 0; match < playersList.length / 2; match++) {
                        document.write('<link rel="stylesheet" href="style.css"> <div class="meet"> <fieldset>' + playersList.at(match) + " - " + 
                        playersList.at(playersList.length - match -1) + ' </fieldset> </div>');
                    }
                    
                // Splice va retirer    
                playersList.splice(1, 0, playersList[numberOfRounds]);
                playersList.pop();

                }

        }
    
    generateRounds();   

}


