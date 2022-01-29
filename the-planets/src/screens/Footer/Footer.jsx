import './Footer.css';
import { Github, Linkedin } from '../../assets/index.js';

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
                src={Github}
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
                src={Linkedin}
                alt="Linkedin logo"
              />
            </a>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Kevin Miller
            <br />
            Images courtesy of NASA
          </p>
        </div>
      </div>
    </div>
  );
}
