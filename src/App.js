import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Splash from './pages/Splash';
import SignUp from './pages/SignUp'
import EmailVerification from './pages/EmailVerification';
import EmailVerified from './pages/EmailVerified';
import ForgotPassword from './pages/ForgotPassword';
import EditProfile from './pages/EditProfile';
import Settings from './pages/Settings';
import HomePage from './pages/HomePage';
import AddContacts from './pages/AddContacts';

function App() {
  return (
    <Router>
      <main className="background">
        <Routes>
          <Route path='/' element={<Splash />} />      
          <Route path='/sign-up' element={<SignUp />} />      
          <Route path='/email-verification' element={<EmailVerification />} />      
          <Route path='/email-verified' element={<EmailVerified />} />      
          <Route path='/forgot-password' element={<ForgotPassword />} />      
          <Route path='/edit-profile' element={<EditProfile />} />      
          <Route path='/settings' element={<Settings />} />      
          <Route path='/home-page' element={<HomePage />} />      
          <Route path='/add-contact' element={<AddContacts />} />      
        </Routes>  
      </main>
    </Router>
  );
}

export default App;
