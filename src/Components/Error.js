import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div>
      <h1>Something went wrong</h1>
      <Link to='/'>
        Back Home
      </Link>
    </div>
  );
};

export default Error;