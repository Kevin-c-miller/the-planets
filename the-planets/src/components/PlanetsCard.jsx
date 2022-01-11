import AllPlanets from './AllPlanets';
import './Box.css';

export default function PlanetsCard(props) {
  return (
    <div>
      <div className="container-fluid d-flex justify-content-center">
        {/* <div className="row"> */}
        <div>
          <AllPlanets />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
