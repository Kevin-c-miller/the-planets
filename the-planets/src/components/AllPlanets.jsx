import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/apiConfig/planet.js';
import PlanetsCard from './PlanetsCard.jsx';
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

  const renderCard = (planet, index) => {
    return (
      <div className="card text-center" key={index}>
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
      {/* <h2>Planets of Our Solar System</h2> */}
      <div className="grid">
        {planets.map(renderCard)}
        {/* <PlanetsCard planets={planets} /> */}
      </div>
    </>
  );
}
