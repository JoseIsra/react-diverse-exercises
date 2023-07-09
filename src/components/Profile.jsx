import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export function Profile({ logoutUser }) {
  const navigate = useNavigate();
  const handleLogOut = () => {
    logoutUser();
    navigate('/');
  };
  return (
    <section>
      <h1>El profile</h1>
      <Link to="/dashboard">Go dashboard</Link>
      <button onClick={handleLogOut}>Log out</button>
    </section>
  );
}

Profile.propTypes = {
  logoutUser: PropTypes.func,
};
