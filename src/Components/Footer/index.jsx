const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
          <h5 className="text-lg font-bold">Sobre Nosotros</h5>
          <p className="text-sm">
            Somos un equipo dedicado a brindar la mejor información y noticias.
          </p>
        </div>
        <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
          <ul className="text-sm">
            <li>
              <a href="/" className="hover:underline">
                Inicio
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-right">
          <div className="flex justify-center md:justify-end">
            <a
              href="https://facebook.com"
              className="text-white mx-2 hover:text-gray-400"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.618v-3.622h3.202V8.413c0-3.165 1.933-4.888 4.758-4.888 1.354 0 2.516.101 2.853.146v3.305h-1.957c-1.534 0-1.83.73-1.83 1.797v2.358h3.66l-.477 3.622h-3.183V24h6.245c.73 0 1.323-.594 1.323-1.324V1.325C24 .593 23.406 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="text-white mx-2 hover:text-gray-400"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.557a9.94 9.94 0 01-2.828.775 4.93 4.93 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.954 13.954 0 011.671 3.149a4.916 4.916 0 001.523 6.574 4.902 4.902 0 01-2.229-.616v.062a4.916 4.916 0 003.946 4.827 4.936 4.936 0 01-2.224.084 4.917 4.917 0 004.6 3.417 9.867 9.867 0 01-6.102 2.104c-.395 0-.786-.023-1.17-.068A13.94 13.94 0 007.548 21c9.057 0 14.01-7.509 14.01-14.01 0-.214-.005-.428-.015-.64A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              className="text-white mx-2 hover:text-gray-400"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.428.511a4.92 4.92 0 011.787 1.787c.272.459.456 1.258.511 2.428.059 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.511 2.428a4.92 4.92 0 01-1.787 1.787c-.459.272-1.258.456-2.428.511-1.266.059-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.428-.511a4.92 4.92 0 01-1.787-1.787c-.272-.459-.456-1.258-.511-2.428-.059-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.97.511-2.428a4.92 4.92 0 011.787-1.787c.459-.272 1.258-.456 2.428-.511 1.266-.059 1.645-.07 4.85-.07zm0-2.163c-3.259 0-3.67.014-4.947.072-1.274.058-2.17.25-2.927.533a6.895 6.895 0 00-2.61 1.637 6.895 6.895 0 00-1.637 2.61c-.283.757-.475 1.653-.533 2.927-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.058 1.274.25 2.17.533 2.927a6.895 6.895 0 001.637 2.61 6.895 6.895 0 002.61 1.637c.757.283 1.653.475 2.927.533 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.274-.058 2.17-.25 2.927-.533a6.895 6.895 0 002.61-1.637 6.895 6.895 0 001.637-2.61c.283-.757.475-1.653.533-2.927.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.058-1.274-.25-2.17-.533-2.927a6.895 6.895 0 00-1.637-2.61 6.895 6.895 0 00-2.61-1.637c-.757-.283-1.653-.475-2.927-.533-1.277-.058-1.688-.072-4.947-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.153a3.991 3.991 0 110-7.981 3.991 3.991 0 010 7.981zm6.406-11.846a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-4">
        © 2024 Fernanda Familiar. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
