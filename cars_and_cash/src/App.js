import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavStuff/NavBar.js';
import HomePage from './components/Pages/HomePage.js';
import Vehicles from './components/Pages/Vehicles.tsx';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' Component={HomePage} />
          <Route path='/vehicles' Component={Vehicles} />
          <Route path='/about' Component={AboutPage} />
          <Route path='/contact' Component={ContactPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
