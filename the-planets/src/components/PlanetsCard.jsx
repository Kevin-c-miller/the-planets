import AllPlanets from './AllPlanets';
import './Box.css';

export default function PlanetsCard(props) {
  return (
    <div>
      <div className="container-fluid d-flex justify-content-center">
        <div>
          <AllPlanets />
        </div>
      </div>
    </div>
  );
}
