// Je veux prendre le texte de leTexteARecuperer
// Lorsque l'on clique sur le bouton Remplacer
// leTexteARemplacer et remplacer par leTexteARecuperer

function RemplaceLeTexte() {
    //Recupere le texte de mon Input
    let textRecuperer = document.getElementById('leTexteARecuperer').value;

    //Recupere le texte de leTexteARemplacer
    let textARemplacer = document.querySelector('#leTexteARemplacer');

    // Remplace le texte en interchangeant
    textARemplacer.textContent = textRecuperer;
}



function RemplaceLeTitre(){
    //Recupere le texte de l'input Titre
    //Puis Recupere le titre à remplacer et le remplace immédiatement

    let inputTitre = document.getElementById('inputTitreWysiwyg').value;
    document.querySelector('#titreWysiwigResultat').textContent = inputTitre;

    let inputImg = document.getElementById('inputimgWysiwyg').value;
    document.getElementById('imgWysiwigResultat').src = inputImg;

    let inputContent = document.getElementById('inputContentWysiwyg').value;
    document.querySelector('#textWysiwigResultat').textContent = inputContent;


}
var btn = document.getElementById('btnGenererWysiwyg');
btn.addEventListener('click', RemplaceLeTitre);

var inputPressTitle = document.getElementById('inputTitreWysiwyg');
inputPressTitle.addEventListener('keyup', RemplaceLeTitre);
inputPressTitle.addEventListener('change', RemplaceLeTitre);