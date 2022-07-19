import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import BugetPage from './Page/BugetPage';
import ExpansesPage from './Page/ExpansesPage';
import LoginPage from './Page/LoginPage';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './State/index';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/firebase-auth';
import HomePage from './Page/HomePage';
import ProtectRoute from './Components/ProtectRoute';
import { collection, setDoc, doc, query, orderBy, onSnapshot, updateDoc } from 'firebase/firestore';
import {db} from './Firebase/firebase-connection';
import BudgetSub from './Components/BugetSub';


function App() {

  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);

  const user = useSelector(state => state.user);
  const budget = useSelector(state => state.budget);



  const [load, setLoad] = useState(true);


  const getData = async () => {
    const Collection = collection(db, "Budget");
    try {

        const q = query(Collection, orderBy("date", "desc"));
        onSnapshot(q, (snapshot) => {
            actions.setBudget(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            );
        });


    } catch (e) {
        console.log(e);
    }
}


  useEffect(() => {
    getData();
   
    onAuthStateChanged(auth, authUser => {
      if (user) {
        actions.setUser(authUser);
      } else {
        actions.setUser(authUser);
      }
    });
    setTimeout(function () {
      setLoad(false);
    }, 1000);
    
  }, []);



  return (
    <>
      {
        load === true ? <div style={{
          display: "flex", justifyContent: "center", alignItems
            : "center", height: "100vh"
        }}>Loading</div> : <>
          <Routes>
            <>
              <Route path="/" element={<ProtectRoute child={<>
                <NavBar setOpen={setOpen} open={open} />
                <HomePage open={open} setOpen={setOpen} />
                <Footer open={open} />
              </>} user={user} />} />
              <Route path="/budget" element={<ProtectRoute child={<>
                <NavBar setOpen={setOpen} open={open} />
                <BugetPage open={open} />
                <Footer open={open} /></>} user={user} />} />
              <Route path="/expenditure" element={<ProtectRoute child={<>
                <NavBar setOpen={setOpen} open={open} />
                <ExpansesPage open={open} />
                <Footer open={open} /></>} user={user}/>} />
              <Route path="/login" element={<LoginPage user={user}/>} />
            </>
          </Routes>
        </>
      }
    </>
  );
}

export default App;
