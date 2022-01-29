import AllPlanets from '../../components/Planets/AllPlanets';
import '../../components/Shared/Box.css';

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
