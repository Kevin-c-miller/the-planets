import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div>
      <Link to="/">
        <img
          src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
          alt="error page"
          style={{
            height: '55%',
            width: '65%',
            border: '3px solid white',
            borderRadius: '10px',
          }}
        />
      </Link>
    </div>
  );
}
