import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import BugetPage from './Page/BugetPage';
import HomePage from './Page/HomePage';



function App() {

const [open,setOpen] = useState(true);

  return (
    <>
    <NavBar setOpen={setOpen} open={open}/>
    <Routes>
      <Route path="/" element={<><HomePage open={open}/></>}/>
      <Route path="/budget" element={<><BugetPage open={open}/></>}/>
    </Routes>
    <Footer open={open}/>
    </>
  );
}

export default App;
