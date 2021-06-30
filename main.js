var name_of_people = [];
function submit(){
    var Guest_name = document.getElementById("input1").value;
    name_of_people.push(Guest_name);
    console.log(name_of_people);
    document.getElementById("names").innerHTML = name_of_people;
}

function show_list(){
    var i = name_of_people.join("<br>");
    console.log(name_of_people);
    document.getElementById("guest_name_without_comma").innerHTML = i;
}

function sort_list(){
    name_of_people.sort();
    var i = name_of_people.join("<br>");
    console.log(name_of_people);
    document.getElementById("sorted_guest_name").innerHTML = i;
}

function search(){
    var s =  document.getElementById("input2").value;
    var found = 0;
    var j;
    for (j=0; j<name_of_people.length; j++){
        if (s==name_of_people[j]){
            found = found+1;
        }
    }
    document.getElementById("search_result").innerHTML = "Name found "+found+"time/s";
    console.log("found name "+found+"time/s");
}