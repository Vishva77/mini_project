function postData(check,id="") {

  const title = document.getElementById("title");
  const description = document.getElementById("description");

  if (!title || !description) {
      return alert("EMPTY");
  }

  const data = {
      title: title.value,
      description: description.value,
  };
  if(check == "Update" && id.length > 0){
    console.log("UPDATE");
    fetch(`http://localhost:7000/todo/${id}`, {
          method: "PUT",
          headers: {
              "content-type": "application/json",
          },
          body: JSON.stringify(data),
      }).then((res) => {
        location.reload();
          getData();
      });
  }else{
    fetch(`http://localhost:7000/todo`, {
      method: "POST",
      headers: {
          "content-type": "application/json",
      },
      body: JSON.stringify(data),
  }).then((res) => {
    title.value ="";
    description.value = "";
      getData();
  });
  }
  
}

function getData() {
  fetch(`http://localhost:7000/todo`, {
      method: "GET",
      headers: {
          "content-type": "application/json",
      },

  }).then((res) => {
          if (!res.ok) {
              return alert("Something went wrong");
          }
          return res.json();
          
      }).then((data) => {

        displayData(data);

      }).catch((error) => {
          console.error("Fetch error:", error);
      });
}

function displayData(data) {
  var dataContainer = document.getElementById("table");
  dataContainer.innerHTML = "";

  data.forEach((item) => {
      const tr = document.createElement("tr");
      const tdtitle = document.createElement("td");
      const tddesc = document.createElement("td");
      const delbtn = document.createElement("button");
      const editbtn = document.createElement("button");

      tdtitle.innerHTML = item.title;
      tddesc.innerHTML = item.description;
      tdtitle.key = item._id
      delbtn.innerHTML = "Delete";
      editbtn.innerHTML = "Edit";
      delbtn.onclick = () => delfun(item._id);
      editbtn.onclick = () => editfun(item._id, item.title, item.description);

      tr.appendChild(tdtitle);
      tr.appendChild(tddesc);
      tr.appendChild(editbtn);
      tr.appendChild(delbtn);

      dataContainer.appendChild(tr);
  });
}

function delfun(itemId) {
  console.log("deleted");
  fetch(`http://localhost:7000/todo/${itemId}`, {
      method: "DELETE",
      headers: {
          "content-type": "application/json",
      },
      
  }).then((res) => {
      getData();
  });
}

function editfun(itemId, ctitle, cdes) {
  console.log(itemId);

  const title = document.getElementById("title");
  title.value = ctitle;

  const description = document.getElementById("description");
  description.value = cdes;

  const btn = document.getElementById("button2");
  btn.innerHTML = "Update";

  // Pass itemId as the second argument to postData
  btn.onclick = () => postData("Update", itemId);
}



getData();  // Fetch initial data