import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AllPlanets from './components/AllPlanets';
import PlanetDetails from './components/PlanetDetails';
import AddNewEntry from './components/AddNewEntry';
import UserEntries from './components/UserEntries';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Planets and the Solar System</h1>} />
        <Route path="/planets" element={<AllPlanets />} />
        <Route path="/planets/:id" element={<PlanetDetails />} />
        <Route path="/new" element={<AddNewEntry />} />
        <Route path="/user-entries" element={<UserEntries />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
