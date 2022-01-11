import './Footer.css';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <a
              href="https://github.com/Kevin-c-miller"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ height: '50px', width: '50px' }}
                src={github}
                alt="Github logo"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/kevin-c-miller/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ height: '50px', width: '50px' }}
                src={linkedin}
                alt="Linkedin logo"
              />
            </a>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Kevin Miller
          </p>
        </div>
      </div>
    </div>
  );
}
