import { useState, useEffect } from 'react';
import api from '../services/apiConfig/planet.js';
import './Box.css';

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

  //function for the set up for each planet card - called as argument in map function below
  const renderCard = (planet, index) => {
    return (
      <div className="card text-center shadow" key={index}>
        <div className="overflow">
          <img
            style={{ height: '315px', width: '315px' }}
            src={planet.fields?.image}
            alt={planet.fields?.Name}
            className="card-img-top"
          />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{planet.fields?.Name}</h4>
          <a href={`/planets/${planet.id}`} className="btn btn-outline-success">
            Learn More
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <h2 style={{ color: 'white' }}>Planets of Our Solar System</h2>/
      <div className="grid">{planets.map(renderCard)}</div>
    </>
  );
}
