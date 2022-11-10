
// JSON.
    
    let selectValue = document.getElementById('select');
    let streetSelect = document.getElementById('streetName');
    
    function deJSONiny() {
        selectValue.innerText = "";
        const json = '[{"id":33,"name":"Boni Avenue"},{"id":34,"name":"Shaw Boulevard"},{"id":35,"name":"Rue Madeleine"},{"id":36,"name":"Shaw Boulevard"}]';
        let deJSONiny = JSON.parse(json);   
        console.log(deJSONiny);

        deJSONiny.forEach(element => {
            
            let selectChoice = document.createElement('option');
            selectChoice.dataset.select = element;
            selectChoice.innerText = element.name;
            selectValue.appendChild(selectChoice);
        });

    

    }



