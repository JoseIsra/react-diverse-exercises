import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export function Landing({ isLog, logUser }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLog) {
      navigate('/profile');
    }
  }, [isLog]);
  return (
    <section>
      <h1>Welcome to the landing page bro</h1>
      <p>You are not logged out</p>
      <div>
        <button onClick={logUser}>Log in</button>
      </div>
    </section>
  );
}

Landing.propTypes = {
  isLog: PropTypes.bool,
  logUser: PropTypes.func,
};
