import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import BugetPage from './Page/BugetPage';
import ExpansesPage from './Page/ExpansesPage';
import HomePage from './Page/HomePage';
import LoginPage from './Page/LoginPage';



function App() {

  const [open, setOpen] = useState(true);

  return (
    <>
      <Routes>
        <Route path="/" element={<>
          <NavBar setOpen={setOpen} open={open} />
          <HomePage open={open} />
          <Footer open={open} /></>} />
        <Route path="/budget" element={<>
          <NavBar setOpen={setOpen} open={open} />
          <BugetPage open={open} />
          <Footer open={open} /></>} />
        <Route path="/expenditure" element={<>
          <NavBar setOpen={setOpen} open={open} />
          <ExpansesPage open={open} />
          <Footer open={open} /></>} />
        <Route path="/login" element={<><LoginPage /></>} />
      </Routes>
    </>
  );
}

export default App;
