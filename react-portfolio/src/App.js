import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import Connect from './Components/Connect';

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/"></Link>
        <Link to="/connect"></Link>
      </header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/connect" element={<Connect />} />
      </Routes>
    </div>
  );
}

export default App;