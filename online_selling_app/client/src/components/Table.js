import React, { useState, useEffect } from 'react';
import axios from 'axios';
import whatsapp_icon from "../components/Images/whatsapp-icon.jpg1.png";
import './Table.css';

function Table() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/info/getdata")
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="vehicle-container">
            {data.map((item, index) => (
                <div key={index} className="vehicle-item">
                    <img src={item.img} alt="Vehicle" className="vehicle-image" />
                    <h3 className="vehicle-name">Vehicle Name: {item.vehicleName}</h3>
                    <h3 className="year">Year: {item.year}</h3>
                    <a href={`https://wa.me/91${item.whatsapp}?text=I Want To Buy Your Car`} className="whatsapp-link">
                        <img src={whatsapp_icon} alt="Whatsapp" className="whatsapp-icon" />
                    </a>
                    <h3 className="year"> {item.whatsapp}</h3>
                    <h3 className="price">Price: {item.price}</h3>
                </div>
            ))}
        </div>
    );
}

export default Table;
