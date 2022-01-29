import Carousel from 'react-bootstrap/Carousel';
import '../../screens/Home/Home.css';
import {
  Mars,
  Sun,
  Supernova,
  Earth,
  Saturn,
  Jupiter,
  Uranus,
  Comet,
} from '../../assets/index.js';

//image carousol being rendered on hompage of app
export default function HomeImageCarousel() {
  return (
    <div>
      <Carousel fade>
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
            <p>
              NASA Extreme Ultraviolet Imaging Telescope aboard ESA’s SOHO
              spacecraft took this image of a huge, handle-shaped prominence in
              1999. Prominences are huge clouds of relatively cool dense plasma
              suspended in the Sun hot, thin corona.
            </p>
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

        <Carousel.Item>
          <img className="d-block w-100" src={Uranus} alt="uranus" />
          <Carousel.Caption>
            <h3>Uranus</h3>
            <p>Taken by Voyager 2 as it sails past Uranus in Jan. 1986</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Comet} alt="comet" />
          <Carousel.Caption>
            <h3>Comet ISON</h3>
            <p>
              Comet ISON shines brightly in this image taken on the morning of
              19 Nov. 2013. This is a 10-second exposure taken with the Marshall
              Space Flight Center 20&quot; telescope in New Mexico.{' '}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
