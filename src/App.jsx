import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from './pages/loginSignup/login-sign-up'
import MainApp from './pages/mainApp';
import LandingPage from './pages/loginSignup/landingpage';
import PasswordRetrieval from './pages/loginSignup/password-retrieval';
import ChangePassword from './pages/loginSignup/changepassword';


function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/login-signup' element={<LoginSignup />}/>
        <Route path ='/main-app' element={<MainApp />}/>
        <Route path ='/forgot-password' element={<PasswordRetrieval />}/>
        <Route path ='/change-password' element={<ChangePassword />}/>
      </Routes>
     </BrowserRouter>
  )
}

export default App
