import './App.css';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import SoicalLinks from './components/SoicalLinks';
import Experience from './components/Experience'
import Contact from './components/Contact';
function App() {
  return (
    <div >
  <NavBar/>
  <Home/>
  <About/>
  <SoicalLinks/>
  <Portfolio/>
  <Experience/>
  <Contact/>

    </div>
  );
}

export default App;
