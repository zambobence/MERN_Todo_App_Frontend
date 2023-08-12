import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Home from './note/pages/Home';
import Header from './header/Header';
import AuthContext from './shared/context/auth-context';
import useAuth from './shared/hooks/use-auth';
import Authentication from './user/pages/Authentication';
import Hero from './hero/Hero';
import Profile from './user/pages/Profile';
import Footer from './footer/Footer';
import Redirect from './shared/components/Redirect';

function App() {

  const {login, logout,isLoggedIn, token, userData} = useAuth()

  let routes

  if (!token){
    routes = (
    <Routes>
      <Route exact path="/" element={<Authentication />}/>
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
    )
  } else {
    routes = (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
    )
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        login: login,
        logout:logout,
        token: token,
        userData: userData
      }}
    >
      <Router>
        <Hero>
          <Header />
        </Hero>
          {routes}
      </Router>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
