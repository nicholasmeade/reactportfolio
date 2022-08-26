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
        <Link to="/"></Link>
        <Link to="/connect"></Link>
      </header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/connect" element={<Connect />} />
      </Routes>
      <Link to="/"></Link>
      <Link to="/connect"></Link>
    </div>
  );
}

export default App;