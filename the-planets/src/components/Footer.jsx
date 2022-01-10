import './Footer.css';

export default function Footer() {
  return (
    <div>
      <footer class="bg-dark text-center text-white">
        <div class="container p-4 pb-0">
          <section class="mb-4">
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/in/kevin-c-miller/"
              role="button"
            >
              <img src="" alt="linkedin logo" />
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="https://github.com/Kevin-c-miller"
              role="button"
            >
              <img src="" alt="github logo" />
            </a>
          </section>
        </div>
        <div
          class="text-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          © 2022 Copyright: Kevin Miller
        </div>
      </footer>
    </div>
  );
}
