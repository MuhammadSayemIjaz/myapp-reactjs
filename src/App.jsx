import React from 'react';
import './scss/App.scss'
// import Error from './Pages/Error';
// import Signup from './Pages/SignUp';
// import SignOut from './components/SignOut';
import { ToastContainer } from 'react-toastify';
import Routing from './Routes/Routes';
// import Login from './Pages/Login';

function App() {

  return (
    <>
    {/* <SignOut/> */}
    {/* <Error/> */}
     {/* <Signup/> */}
     {/* <Login/> */}
     <Routing/>
     <ToastContainer />
    </>
  );
}

export default App;
