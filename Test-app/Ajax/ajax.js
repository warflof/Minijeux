function ShowUsers(){
    const xhr = new XMLHttpRequest();
    //Appel la requête JS
    xhr.open('GET', 'http://reqres.in/api/users?page=1');

    //Event d'appel au clic du bouton
    xhr.addEventListener('readystatechage', function() {
        //Si le lien est ok et que tout est envoyé, alors on affiche les données
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                console.log("Response = " + xhr.response);
                
            }
            console.log("Response = " + xhr.response);
        };
    });
    xhr.send();
};

const students = [
    {
      name: 'Paul',
      age: 15,
      scores: [
        {matiere: 'Maths', note: 10},
        {matiere: 'Français', note: 12},
        {matiere: 'Anglais', note: 14},
      ]
    }, 
    {
      name: 'Marie',
      age: 14,
      scores: [
        {matiere: 'Maths', note: 15},
        {matiere: 'Français', note: 9},
        {matiere: 'Anglais', note: 10},
      ]
    },
]

let JSONiny = JSON.stringify(students);
console.log(JSONiny);

let DeJSONiny = JSON.parse(JSONiny);
console.log(DeJSONiny[0].name);
