import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import Connect from './Components/Connect/Connect';
import Navbar from './Components/Navbar/Navbar';
import './App.scss';

function App() {
  return (
    <div className="App" id="bootstrap-overrides">
      <header id="bootstrap-overrides">
        <Navbar />
        <Link to="/reactportfolio/"></Link>
        <Link to="/reactportfolio/connect"></Link>
      </header>
      <Routes>
        <Route exact path="/reactportfolio/" element={<Home />} />
        <Route exact path="/reactportfolio/connect" element={<Connect />} />
      </Routes>
    </div>
  );
}

export default App;