import './App.scss'
import { Route, Routes } from 'react-router-dom';
import { PopUpProvider } from './context/PopUpContext';
import Layout from './components/Layout';
import Home from './components/HomePage';
import About from './components/About';
import Models from './components/Models';
import Testemonials from './components/Testemonials';
import OurTeam from './components/OurTeam';
import Contact from './components/Contact';

function App() {
  return (
    <PopUpProvider>
      <Routes>
        <Route exact path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/models' element={<Models />} />
          <Route path='/testemonials' element={<Testemonials />} />
          <Route path='/our-team' element={<OurTeam />} /> 
          <Route path='/contact' element={<Contact />} /> 
        </Route>
      </Routes>
    </PopUpProvider>
  )
}

export default App
