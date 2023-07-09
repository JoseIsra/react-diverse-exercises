import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export function Dashboard({ logoutUser }) {
  const navigate = useNavigate();

  const goBack = () => {
    logoutUser();
    navigate('/');
  };

  return (
    <section>
      <h1>Are you logged bro?</h1>
      <p>If you see this, i think you are</p>
      <button onClick={goBack}>Log Out</button>
    </section>
  );
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func,
};
