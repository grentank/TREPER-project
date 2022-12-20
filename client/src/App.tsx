import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/ui/NavBar/NavBar';
import MainPage from './components/pages/Main/MainPage';
import PostsPage from './components/pages/Posts/PostsPage';
import AuthPage from './components/pages/Auth/AuthPage';

function App(): JSX.Element {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Container>
  );
}

export default App;
