let people = [];

function addPerson() {
    console.log("addPerson() triggered");
    let name = document.getElementById("person-name").value;
    if (name) {
        people.push(name);
        console.log(people);
    }
}

