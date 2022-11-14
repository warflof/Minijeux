function ShowUsers(){
  const nbPages = document.getElementById('pages').value;
  getUsers(nbPages);

};

/*
            let myhtml = "";
                  object.data.forEach(element => {

                    myhtml += '<div><img src="'+element.avatar+'"/><div><p>'+element.first_name+' '
                              +element.last_name+'</p></div>'

                  document.getElementById("AllUsers").innerHTML = myhtml;
                    
                  });
*/
function getUsers(numeroPage){
  const request = new XMLHttpRequest();
  const url = 'https://reqres.in/api/users?page='+numeroPage
  request.open('GET', url);

  request.addEventListener('readystatechange', function() {
    //Si le lien est ok et que tout est envoyé, alors on affiche les données
    if(request.readyState === 4) {
          if(request.status === 200) {
              console.log("Response = " + request.response);
              const object = JSON.parse(request.response);
              setUsersInPages(object);
              
             
              
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

}

function setUsersInPages(object){
  let myhtml = "";
     object.data.forEach(element => {

      myhtml += '<div><img src="'+element.avatar+'"/><div><p>'+element.first_name+' '
                 +element.last_name+'</p></div>'
      
                 document.getElementById("AllUsers").innerHTML = myhtml;
                    
      });
}

