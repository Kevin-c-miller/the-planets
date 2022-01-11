import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AllPlanets from './components/AllPlanets';
import PlanetDetails from './components/PlanetDetails';
import AddNewEntry from './components/AddNewEntry';
import UserEntries from './components/UserEntries';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PlanetsCard from './components/PlanetsCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/planets"
          element={<PlanetsCard />}
          className="all-planets"
        />
        <Route path="/planets/:id" element={<PlanetDetails />} />
        <Route path="/new" element={<AddNewEntry />} />
        <Route path="/user-entries" element={<UserEntries />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
