import { Routes, Route, useLocation } from 'react-router-dom';

import PersonList from './components/PersonList';
import Details from './components/Details';
import Forms from './components/Form';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Perfil from './components/Perfil';

import './App.css';
import { AnimatePresence } from 'framer-motion';


function App() {

  const location = useLocation();

  return (
    <div>
      <AnimatePresence location={location} key={location.pathname}>
        <NavBar />

        <Routes>

          <Route path='/' element={<PersonList />} />
          <Route path='details/:name' element={<Details />} />
          <Route path='login' element={<Forms />} />
          <Route path='perfil' element={<Perfil />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </div>
  );
}

export default App;

