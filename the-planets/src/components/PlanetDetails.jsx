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

          <p>
            <b>Order From Sun:</b> {planet.fields?.orderFromSun}
          </p>

          <p>
            <b>Planet Type:</b> {planet.fields?.planetType}
          </p>

          <p>
            <b>Distance from the sun:</b> {planet.fields?.distanceFromSun}{' '}
          </p>

          <p>
            <b>Length of a day:</b> {planet.fields?.lengthOfDay}
          </p>

          <p>
            <b>Length of a year</b>
            {planet.fields?.lengthOfYear}
          </p>

          <p>
            <b>Size:</b> {planet.fields?.size}
          </p>

          <p>
            <b>Number of Moons:</b> {planet.fields?.numberOfMoons}
          </p>

          <p>
            <b>Average Temperature:</b> {planet.fields?.temperature}
          </p>

          <p>
            <b>Atmosphere:</b> {planet.fields?.atmosphere}
          </p>

          <p>
            <b>Number of Rings:</b> {planet.fields?.rings}
          </p>

          <p>
            <b>Discovered:</b> {planet.fields?.discoveryDate}
          </p>

          <p>
            <b>Random Facts:</b> {planet.fields?.randomFacts}
          </p>
        </div>
      </div>
    </div>
  );
}
