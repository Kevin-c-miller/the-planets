import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
import Navbar from './screens/Nav/Navbar';
import Footer from './screens/Footer/Footer';
import PlanetDetails from './screens/PlanetDetails/PlanetDetails';
import AddNewEntry from './screens/AddNewEntry/AddNewEntry';
import UserEntries from './screens/UserEntries/UserEntries';
import PlanetsCard from './screens/Planets/PlanetsCard';
import PageNotFound from './screens/PageNotFound/PageNotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />

      <ToastContainer
        position="top-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
