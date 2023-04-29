import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter ,Routes, Route ,Link}from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Boardgamescreen from './screens/Boardgamescreen';
import Registercreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';

function App() {
  return (
    
    <div className="App">
      <Navbar />
    
      <BrowserRouter>

      <Routes>
          <Route path="/home" exact element={<Homescreen/>} />
          <Route path="/book/:roomid" element={<Bookingscreen/>} />
          <Route path="/register" element={<Registercreen/>} />
          <Route path="/login" element={<Loginscreen/>} />
          <Route path="/changepassword" element={<ChangePasswordScreen/>} />

      </Routes>



    {/* try use memmory */}
      {/* <Routes>
          <Route path="/booking/:Bgameid" element={<Boardgamescreen/>} />
      </Routes> */}



      </BrowserRouter>


    </div>
    
  );
}

export default App;
