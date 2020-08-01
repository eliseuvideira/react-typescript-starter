import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => (
  <div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
    <div>Home</div>
  </div>
);

export default Index;
