import { useState } from 'react';
import Form from "./Form.js";
import Table from "./Table.js";
import "./Header.css";

function Header() {
  const [form, setForm] = useState(false);
  const [table, setTable] = useState(false);

  const toggleForm = () => {
    setForm(true);
    setTable(false);
  };

  const toggleTable = () => {
    setTable(true);
    setForm(false);
  };

  return (
    <div className="Header">
      <h1>Online Selling Platform</h1>
      <div className='btn'>
        <button onClick={toggleForm}>SELL</button>
        <button onClick={toggleTable}>BUY</button>
      </div>
      {form && <Form />}
      {table && <Table />}
    </div>
  );
}

export default Header;
