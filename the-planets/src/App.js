import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AllPlanets from './components/AllPlanets';
import PlanetDetails from './components/PlanetDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Planets and the Solar System</h1>} />
        <Route path="/planets" element={<AllPlanets />} />
        <Route path="/planets/:id" element={<PlanetDetails />} />
        <Route path="/new" element={<div>Add an entry</div>} />
        <Route path="/user-entries" element={<div>User Entries</div>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
