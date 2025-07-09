let people = [];

function addPerson() {
    console.log("addPerson() triggered");
    let name = document.getElementById("person-name").value;
    if (name) {
        people.push(name);
        addpersontolist();
        console.log(people);
    }

    document.getElementById("person-name").value = "";

    

}



function addpersontolist() {
    
    let payers = document.getElementById("paid-by");

    let splitters = document.getElementById("split-between");
    
    payers.innerHTML = "";

    splitters.innerHTML = "";


     for (let i = 0; i < people.length; i++) {
        let opt = document.createElement("option");
        opt.value = people[i];
        opt.textContent = people[i];
        
        payers.appendChild(opt);
        splitters.appendChild(opt.cloneNode(true));
    }

}