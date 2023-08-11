import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './note/pages/Home';
import Login from './user/pages/Login';
import Register from './user/pages/Register';
import Header from './header/Header';
import useHttpClient from './shared/hooks/use-http';
import LoadingSpinner from './shared/components/LoadingSpinner';
import Modal from './shared/components/Modal';

function App() {

  const {isLoading, errorStatus, sendRequest, clearError} = useHttpClient()

  const handleRegister = async (requestBody) => {
    console.log(requestBody)
    const data = await sendRequest(
      'https://mern-todo-app-backend-60nd.onrender.com/register',
      "POST",
      {},
      requestBody
    )
  }

  const handleLogin = async (requestBody) => {
    console.log('HandleLogin')
    console.log(requestBody)
    sendRequest(
      'https://mern-todo-app-backend-60nd.onrender.com/login', 
      "POST", 
      {},
      requestBody
    )
  }

  return (
    <Router>
      <Header />
      {isLoading && <LoadingSpinner />}
      {!isLoading && errorStatus && <Modal content={errorStatus} onCancel={clearError} />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/authenticate" element={
          <Login
            handleLogin={handleLogin}
            handleRegister={handleRegister} />}
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
