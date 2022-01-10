import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">
          <h1>The Planets</h1>
        </Link>
        <Link to="/planets">View All Planets</Link>
        <Link to="/new">Add New Entry</Link>
        <Link to="/user-entries">View User Entries</Link>
      </nav>
    </div>
  );
}
