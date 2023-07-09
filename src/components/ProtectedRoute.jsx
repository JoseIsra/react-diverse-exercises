import { useNavigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export function ProtectedRoute({ isLogged, children }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  };
  if (!isLogged) {
    return (
      <div>
        <p>No estás autorizado de veresto</p>
        <button onClick={goBack}>Volver</button>
      </div>
    );
  }
  return <Outlet />;
}

ProtectedRoute.propTypes = {
  isLogged: PropTypes.bool,
  children: PropTypes.node,
};
