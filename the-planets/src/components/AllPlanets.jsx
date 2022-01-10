import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/apiConfig/planet.js';

export default function AllPlanets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const res = await api.get(
        '?sort%5B0%5D%5Bfield%5D=orderFromSun&sort%5B0%5D%5Bdirection%5D=asc'
      );
      setPlanets(res.data.records);
    };
    fetchPlanets();
  }, []);

  return (
    <>
      <h2>Planets of Our Solar System</h2>
      <div className="all-planets">
        <ul>
          {planets.map((planet) => {
            return (
              <li key={planet.id}>
                <div>
                  <h2>{planet.fields.Name}</h2>
                  <Link to={`/planets/${planet.id}`}>
                    <img
                      style={{ width: '400px', height: '350px' }}
                      src={planet.fields.image}
                      alt={planet.fields.Name}
                    />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
