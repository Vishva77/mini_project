import React, { useState } from "react";
import "./Form.css";
import Axios from "axios";

function Form() {
    const [vehiclename, setvehiclename] = useState("");
    const [price, setprice] = useState("");
    const [year, setyear] = useState("");
    const [whatsapp, setwhatsapp] = useState("");
    const [img, setimg] = useState("");

const handleSubmit = () => {
    const data = { vehicleName:vehiclename, price:price, year:year, whatsapp:whatsapp, img:img };
    Axios.post("http://localhost:5000/info/datapost",data).then((res) => {
        console.log(res);
        console.log(data, "data sent successfully");
        window.location.reload();
    })
    };
    return (
    <div className="container">
        <div className="form">
        <label htmlFor="vehiclename">Vehicle Name :</label>
        <input
            id="vehiclename"
            onChange={(e) => setvehiclename(e.target.value)} />

        <label htmlFor="Price">Price :</label>
        <input id="Price" onChange={(e) => setprice(e.target.value)} />

        <label htmlFor="year">Year :</label>
        <input id="year" onChange={(e) => setyear(e.target.value)} />

        <label htmlFor="whatsapp">Whatsapp No :</label>
        <input id="whatsapp" onChange={(e) => setwhatsapp(e.target.value)} />

        <label htmlFor="img">img :</label>
        <input id="img" onChange={(e) => setimg(e.target.value)} />

        <button className="button" onClick={() => handleSubmit()}>
            Save
        </button>
        </div>
    </div>
);
}

export default Form;
