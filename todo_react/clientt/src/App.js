import "./App.css";
import { useState,useEffect } from "react";
import Axios from "axios";

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [gett, setgetdata] = useState([]);
  const [editId, setEditId] = useState(null);
  const data = {
    title: title,
    description: description,
  };
    

  function save() {
    if(title =="" || description == ""){
      return;
    }
    if (editId){
      Axios.put(`http://localhost:5000/update/${editId}`, data)
      .then((res) => {
        console.log(res);
        setTitle("")
        setDescription("")
        get();
        setEditId(null);
      })
      .catch((error) => {
        console.log(error);
      });
    }else{
      console.log("post worked");
        Axios.post(`http://localhost:5000/post`, data)
      .then((res) => {
        console.log(res);
        setTitle('');
        setDescription('');
        get();
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }

const get = async ()=>{
  console.log("get");
    await Axios.get(`http://localhost:5000/get`).then((res) => {
        console.log(res);
        setgetdata(res.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(error);
      });
}

function deletedata(item){
  console.log(item.title);
  Axios.delete(`http://localhost:5000/delete/${item._id}`)
  .then((res)=>{
    console.log(res);
    get();
  }).catch((error)=>{
    console.log(error);
  })
}

function editdata(id){
  console.log("edit called",id);
  const itemToEdit = gett.find((item) => item._id === id);
  console.log(itemToEdit);
  setTitle(itemToEdit.title);
  setDescription(() => itemToEdit.description);
  setEditId(id);
  console.log(title);
}

  useEffect(()=>{
    get();
  },[]);

  return (
    <div className="container">
      <form id="form">
        <label htmlFor="title">Title :</label>
        <input id="title" onChange={(e) => setTitle(e.target.value) } value={title}/>
        <br />
        <label htmlFor="description">Description :</label>
        <input
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          value = {description}
        />
        <br />
      </form>
      <div id="btn">
        <button onClick={save}>{editId ? "Update" : "Save"}</button>
      </div>
      <div>
        <h2>Fetched Data:</h2>
        <ul>
          {gett.map((item) => (
            <li key={item._id}>
              <h3>{item.title}</h3>: {item.description}
              <button onClick={() => editdata(item._id)}>Edit</button>
              <button onClick={()=>deletedata(item)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
