import { useState } from 'react';
import Form from "./Form.js";
import Table from "./Table.js";
import "./Header.css";

function Header() {
  const [form, SetForm] = useState(false);
  const [table, SetTable] = useState(false);

  return (
    <div className="Header">
      <h1>Online Selling Platform</h1>
      <div className='btn'>
    <button onClick={() =>{SetForm(!form)}}>SELL</button>
    <button  onClick={() =>{SetTable(!table)}}>BUY</button>
    </div>
    {form && <Form/>}
    {table && <Table/>}

    </div>
  );
}

export default Header;
