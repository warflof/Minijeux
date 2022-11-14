
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

};

function setUsersInPages(listUsers){
    let myhtml = "";
    listUsers.data.forEach(element => {
          myhtml += '<div><img src="'+element.avatar+'"/><p>'+element.first_name+' '+element.last_name+'</p></div>'
    });
    document.getElementById("AllUsers").innerHTML = myhtml;

    //On créer le nb de pages
    let nbPages = listUsers.total_pages;
    let currentPage = listUsers.page;

    let htmlPagination = "";
    for (let i = 1; i <=nbPages; i++) {
      if(i == currentPage){
        htmlPagination += '<button class="btn active" disabled>'+i+'</button>'
      }
      else {
        htmlPagination += '<button class="btn" onclick="getUsers('+i+')">'+i+'</button>'

      }
    }

    document.getElementById("pagination").innerHTML = htmlPagination;

};

document.addEventListener("DOMContentLoaded", function() {
  getUsers(1);
});
  



