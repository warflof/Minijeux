function ShowUsers(){
    const request = new XMLHttpRequest();
    //Appel la requête JS
    request.open('GET', 'https://reqres.in/api/users?page=1');

    //Event d'appel au clic du bouton
    request.addEventListener('readystatechange', function() {
        //Si le lien est ok et que tout est envoyé, alors on affiche les données
        if(request.readyState === 4) {
              if(request.status === 200) {
                  console.log("Response = " + request.response);
                  const object = JSON.parse(request.response);
                  
                  let myhtml = "";
                  object.data.forEach(element => {

                    myhtml += '<div><img src="'+element.avatar+'"/><div><p>'+element.first_name+' '
                              +element.last_name+'</p></div>'
                    
                  });
                  document.getElementById("AllUsers").innerHTML = myhtml;
              }
              else if(request.status === 301) {
                alert("L'url de votre requête n'est pas bonne");
              }
              else{
                alert('Une erreur est survenue');
              }
            console.log("Response = " + request.response);
        };
    });
    request.send();
};


