import React from 'react';
import PlanetDetailsModal from './PlanetDetailsModal';

export default function PlanetDetailsCard(props) {
  const { planet } = props;
  return (
    <div className="planet-detail-container">
      <div className="row text-center">
        <div className="text-light">
          <div className="mb-3">
            <h2 id="planet-header">{planet.fields?.Name}</h2>
          </div>
          <div className="img-fluid planet-img">
            <img
              style={{ width: '400px', height: '350px' }}
              src={planet.fields.image}
              alt={planet.fields.Name}
            />
          </div>
        </div>
      </div>
      <div className="planet-info-container">
        <div className="row text-center">
          <div className="col-md">
            <div className="card card-planet bg-dark text-light">
              <div className="h1 mb-3">
                <i class="bi bi-globe"></i>
              </div>
              <div className="card-text">
                <p>
                  <b>Order From Sun</b> <br /> {planet.fields?.orderFromSun}
                </p>
                <p>
                  <b>Planet Type:</b> <br /> {planet.fields?.planetType}
                </p>
                <p>
                  <b>Distance from the sun:</b>
                  <br /> {planet.fields?.distanceFromSun}
                </p>
                <p>
                  <b>Length of a day:</b>
                  <br /> {planet.fields?.lengthOfDay}
                </p>
                <p>
                  <b>Length of a year</b>
                  <br />
                  {planet.fields?.lengthOfYear}
                </p>
                <p>
                  <b>Number of Moons:</b>
                  <br /> {planet.fields?.numberOfMoons}
                </p>
                <p>
                  <b>Size:</b>
                  <br /> {planet.fields?.size}
                </p>
                <p>
                  <b>Number of Rings:</b>
                  <br />
                  {planet.fields?.rings}
                </p>
                <p>
                  <b>Average Temperature:</b>
                  <br />
                  {planet.fields?.temperature}
                </p>
                <p>
                  <b>Atmosphere:</b>
                  <br />
                  {planet.fields?.atmosphere}
                </p>
                <p>
                  <b>Discovered:</b> <br />
                  {planet.fields?.discoveryDate}
                </p>
                <p>
                  <b>Random Facts:</b>
                  <br />
                  <PlanetDetailsModal
                    planetFacts={planet.fields?.randomFacts}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
