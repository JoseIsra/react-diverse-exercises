// import { BooksApi } from './components/BooksApi';
// import { Profiler } from 'react';
import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Landing } from './components/Landing';
import { Profile } from './components/Profile';
import { ProtectedRoute } from './components/ProtectedRoute';

// import { TheForward } from './components/TheForward';

// <Profiler
//   id="App"
//   onRender={(
//     id,
//     phase,
//     actualDuration,
//     baseDuration,
//     startTime,
//     endTime
//   ) => {
//     console.log({
//       id,
//       phase,
//       actualDuration,
//       baseDuration,
//       startTime,
//       endTime,
//     });
//   }}
// >
//   <Home />
// </Profiler>
function App() {
  const [logIn, setLogin] = useState(false);
  const logUser = () => {
    setLogin(true);
  };
  const logoutUser = () => {
    setLogin(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing isLog={logIn} logUser={logUser} />} />
        <Route element={<ProtectedRoute isLogged={logIn} />}>
          <Route
            path="/profile"
            element={<Profile logoutUser={logoutUser} />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard isLog={logIn} logoutUser={logoutUser} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
