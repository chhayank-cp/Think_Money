import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const  Investment = () => {
  return (
    <> <Navbar/>
    <div>
      <Link to="/Equity">
      <button>Equity</button>
      </Link>
      <Link to="/Gold">
        <button>Gold</button>
      </Link>
    
    </div>
  </>
  );   
}

export default Investment;
