import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/ui/NavBar/NavBar';
import MainPage from './components/pages/Main/MainPage';
import PostsPage from './components/pages/Posts/PostsPage';
import AuthPage from './components/pages/Auth/AuthPage';
import { UserContext } from './components/contexts/UserContext';
import PrivateRoute from './components/HOC/PrivateRoute';

function App(): JSX.Element {
  const context = useContext(UserContext);
  const user = context?.user;
  return (
    <Container>
      {user?.status === 'fetching' ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route element={<PrivateRoute isAllowed={user?.status === 'logged'} />}>
              <Route path="/posts" element={<PostsPage />} />
            </Route>
            <Route
              element={<PrivateRoute isAllowed={user?.status === 'empty'} redirectPath="/posts" />}
            >
              <Route path="/auth" element={<AuthPage />} />
            </Route>
          </Routes>
        </>
      )}
    </Container>
  );
}

export default App;
