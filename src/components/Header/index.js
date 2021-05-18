import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <>
    <Link to="/">Home</Link>
    <Link to="/profile">Profile</Link>
  </>
)