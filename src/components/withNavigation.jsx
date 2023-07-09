import { useNavigate } from 'react-router-dom';

export function withNavigation(Component) {
  // more router thins here;
  return function ComponentWithNavigation(props) {
    return <Component {...props} navigate={useNavigate()} />;
  };
}
