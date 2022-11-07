formCalculGain.onsubmit =() =>{
    // On récupère le formulaire dans le HTML 
    let formGain = document.getElementById('formCalculGain')
    // On le transforme en objet FormData
    let formObj = new FormData(formGain);

    // On récupère les Inputs
    let tauxHoraire = formObj.get('tauxHoraire');
    let tauxJournalier = formObj.get('tjm');
    let extras = formObj.get('extras');

    let qteTauxHoraire = formObj.get('qteTauxHoraire');
    let qteTauxJournalier = formObj.get('qteTJM');
    let qteExtras = formObj.get('qteExtras');

    let charges = formObj.get('charges');
    
    // On commence le calcul du Brut
    let gainHeure = tauxHoraire * qteTauxHoraire;
    let gainJour = tauxJournalier * qteTauxJournalier;
    let gainExtras = extras * qteExtras;

    let total = gainHeure + gainJour + gainExtras;

    document.getElementById('resultatBrut').innerText = total+" €";

    
    
    return false;
}

function InputCalcOnTime(){

    let formGain = document.getElementById('formCalculGain')
    // On le transforme en objet FormData
    let formObj = new FormData(formGain);

    // On récupère les Inputs
    let tauxHoraire = formObj.get('tauxHoraire');
    let tauxJournalier = formObj.get('tjm');
    let extras = formObj.get('extras');

    let qteTauxHoraire = formObj.get('qteTauxHoraire');
    let qteTauxJournalier = formObj.get('qteTJM');
    let qteExtras = formObj.get('qteExtras');

    let charges = formObj.get('charges');
    
    // On commence le calcul du Brut
    let gainHeure = tauxHoraire * qteTauxHoraire;
    let gainJour = tauxJournalier * qteTauxJournalier;
    let gainExtras = extras * qteExtras;

    tauxJournalier = tauxHoraire * qteTauxHoraire;
    tauxHoraire = tauxJournalier / qteTauxHoraire;
    
    document.getElementById('resultTxHoraire').value = tauxHoraire;
    document.getElementById('resultTJM').value = tauxJournalier;
    

}

var inputsWithEvent = document.querySelectorAll('.onChangeRefresh');

inputsWithEvent.for(node => {
    node.addEventListener('change', InputCalcOnTime);
});