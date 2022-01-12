import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {} from 'react-router-dom';
import api from '../services/apiConfig/planet.js';
import './PlanetDetails.css';
import PlanetDetailsCard from './PlanetDetailsCard.jsx';

export default function PlanetDetails() {
  const [planet, setPlanet] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchPlanet = async () => {
      const res = await api.get(`/${id}`);
      setPlanet(res.data);
    };
    fetchPlanet();
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
