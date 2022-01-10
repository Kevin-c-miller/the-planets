import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {} from 'react-router-dom';
import api from '../services/apiConfig/planet.js';

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
      <div className="planet-container">
        <div className="planet-picture">
          <img
            style={{ width: '400px', height: '350px' }}
            src={planet.fields.image}
            alt={planet.fields.Name}
          />
        </div>
        <div className="planet-info">
          <h2>{planet.fields?.Name}</h2>
          {planet.fields?.orderFromSun}
          <br />
          {planet.fields?.planetStatus}
          <br />
          {planet.fields?.planetType}
          <br />
          {planet.fields?.distanceFromSun}
          <br />
          {planet.fields?.lengthOfDay}
          <br />
          {planet.fields?.lengthOfYear}
          <br />
          {planet.fields?.size}
          <br />
          {planet.fields?.numberOfMoons}
          <br />
          {planet.fields?.temperature}
          <br />
          {planet.fields?.atmosphere}
          <br />
          {planet.fields?.rings}
          <br />
          {planet.fields?.discoveryDate}
          <br />
          {planet.fields?.randomFacts}
          <br />
        </div>
      </div>
    </div>
  );
}
