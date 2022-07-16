import { useState } from 'react';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import HomePage from './Page/HomePage';



function App() {

const [open,setOpen] = useState(true);

  return (
    <>
    <NavBar setOpen={setOpen} open={open}/>
    <HomePage open={open}/>
    <Footer open={open}/>
    </>
  );
}

export default App;
