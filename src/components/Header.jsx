import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container py-2'>
        <Link className='navbar-brand mx-auto fs-3 fw-bold font-monospace' to='/'>
          Message Printer
        </Link>
      </div>
    </nav>
  );
}

export default Header;