function RemplaceLeTitre(){
    //Recupere le texte de l'input Titre
    //Puis Recupere le titre à remplacer et le remplace immédiatement

    let inputTitre = document.getElementById('inputTitreWysiwyg').value;
    document.querySelector('#titreWysiwigResultat').textContent = inputTitre;

    let inputImg = document.getElementById('inputimgWysiwyg').value;
    document.getElementById('imgWysiwigResultat').src = inputImg;

    let inputContent = document.getElementById('inputContentWysiwyg').value;
    document.querySelector('#textWysiwigResultat').textContent = inputContent;

    let imgMaxWidth = document.getElementById('imgMaxWidth').value;
    document.getElementById('imgWysiwigResultat').style.width = ''+imgMaxWidth+'px';

    let colorTitle = document.getElementById('inputColorTitreWysiwyg').value;
    document.getElementById('titreWysiwigResultat').style.color = colorTitle;

    let sizeTitle = document.getElementById('inputSizeTitreWysiwyg').value;
    document.getElementById('titreWysiwigResultat').style.fontSize = `${sizeTitle}px`;

}

function onMouseHover(){
    var tousLesLabels = document.querySelectorAll('label');
    tousLesLabels.forEach(monLabel => {
        monLabel.style.color ='red';
    })
}

function onMouseLeave(){
    var tousLesLabels = document.querySelectorAll('label');
    tousLesLabels.forEach(monLabel => {
        monLabel.style.color ='white';
    })
}


    var alignTextLeft = document.getElementById('textAlignLeft').checked = false;
    var alignTextCenter = document.getElementById('textAlignCenter').checked = false;
    var alignTextRight = document.getElementById('textAlignRight').checked = false;




function alignCenter(){
    
    if(alignTextCenter = true){
        document.getElementById('titreWysiwigResultat').style.textAlign = "center";
        document.getElementById('textAlignLeft').checked = false;
        document.getElementById('textAlignRight').checked = false;
        }
}


var inputsWithEvent = document.querySelectorAll('.OnchangeRefresh');

inputsWithEvent.forEach(node => {
    node.addEventListener('keyup', RemplaceLeTitre);
    node.addEventListener('change', RemplaceLeTitre);

    node.addEventListener('mouseover', onMouseHover);
    node.addEventListener('mouseleave', onMouseLeave);
    node.addEventListener('click', alignCenter);
    
});