function validateform() {
    console.log("Clicked validateform");
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const dropdown = document.getElementById("dropdown").value;
    const radio = document.querySelector('input[name="radio"]:checked') ? document.querySelector('input[name="radio"]:checked').value : "";
    const checkbox = document.getElementById("checkbox").checked ?"yes": "No";
    const comment = document.getElementById("comment").value;
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const eml = document.getElementById("eml");

    if (firstname === "") {
        fname.innerText = "Please Fill This";
    } else {
        fname.innerText = "";
    }
    if (lastname === "") {
        lname.innerText = "Please Fill This";
    } else {
        lname.innerText = "";
    }
    if (email === "") {
        eml.innerText = "Please Fill This";
    } else {
        eml.innerText = "";
    }
    if (firstname != "" && lastname != "" && email != "" ){
        createtable();
    }
    

    // var tableHtml = "<table><tr><th>Field</th><th>Value</th></tr>";
    // tableHtml += "<tr><td>First Name</td><td>" + firstname + "</td></tr>";
    // tableHtml += "<tr><td>Last Name</td><td>" + lastname + "</td></tr>";
    // tableHtml += "<tr><td>Email</td><td>" + email + "</td></tr>";
    // tableHtml += "<tr><td>Checkbox</td><td>" + checkbox + "</td></tr>";
    // tableHtml += "<tr><td>Radio</td><td>" + radio + "</td></tr>";
    // tableHtml += "<tr><td>Comment</td><td>" + comment + "</td></tr>";
    // tableHtml += "<tr><td>Dropdown</td><td>" + dropdown + "</td></tr>";
    // tableHtml += "</table>";
    
    // document.getElementById("table").innerHTML = tableHtml;
    
    function createtable(){
        const tablelist = document.getElementById("tablee");
        
        const data = {FirstName:firstname,LastName:lastname,Email:email,Radio:radio,Checkbox:checkbox,Dropdown:dropdown,Comment:comment}
        
        for (var value in data){
            const list = document.createElement("li");
            list.textContent = `${value}:${data[value]}`
            tablelist.appendChild(list)
        }
    
    }
}

function clearform() {
    location.reload();
}
