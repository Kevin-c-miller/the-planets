import Carousel from 'react-bootstrap/Carousel';
import {
  Mars,
  Sun,
  Supernova,
  Earth,
  Saturn,
  Jupiter,
} from '../assets/index.js';

export default function HomeImageCarousel() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Mars}
            alt="mars surface from mars rover"
          />
          <Carousel.Caption>
            <h3>Mars</h3>
            <p>Mars Surface from the Opportunity Rover</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Sun} alt="The Sun" />
          <Carousel.Caption>
            <h3>The Sun</h3>
            <p>Taken from NuSTAR (Nuclear Spectroscopic Telescope Array)</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Saturn}
            alt="Saturns rings up close from Cassini"
          />

          <Carousel.Caption>
            <h3>Saturn's Rings</h3>
            <p>Close up image of Saturn's rings taken by the Cassini craft</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Earth}
            alt="Earth seen from the moon"
          />

          <Carousel.Caption>
            <h3>Earth from the Moon</h3>
            <p>Earth is seen rising above the moon on Dec. 24, 1968</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Jupiter}
            alt="Jupiter big red spot"
          />

          <Carousel.Caption>
            <h3>Jupiter's Red Spot</h3>
            <p>Jupiter's giant red spot taken from Juno craft.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Supernova} alt="supernova" />

          <Carousel.Caption>
            <h3>Crab Nebula Supernova</h3>
            <p>
              This image shows a composite view of the Crab nebula, an iconic
              supernova remnant in our Milky Way galaxy, as viewed by the
              Herschel Space Observatory and the Hubble Space Telescope.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
