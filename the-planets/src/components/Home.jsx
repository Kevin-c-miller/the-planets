import './Home.css';
import HomeImageCarousel from './HomeImageCarousel';

export default function Home() {
  return (
    <div className="Home">
      <h1>Planets and the Solar System</h1>
      <div>
        <HomeImageCarousel />
      </div>
    </div>
  );
}
