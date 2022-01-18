import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {} from 'react-router-dom';
import api from '../services/apiConfig/planet.js';
import './PlanetDetails.css';
import PlanetDetailsCard from './PlanetDetailsCard.jsx';

export default function PlanetDetails() {
  const [planet, setPlanet] = useState({});
  const { id } = useParams();

  // get request for a specific planet
  useEffect(() => {
    const fetchPlanet = async () => {
      const res = await api.get(`/${id}`);
      setPlanet(res.data);
    };
    fetchPlanet();
    //eslint-disable-next-line
  }, []);

  if (!planet.fields) {
    return (
      <div>
        <h2>Loading....</h2>
      </div>
    );
  }

  return (
    <div>
      <PlanetDetailsCard planet={planet} id={id} />
    </div>
  );
}
