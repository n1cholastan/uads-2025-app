import sal from '../assets/sal.png';
import { NavLink } from 'react-router';
import { useState } from 'react';
import '../utils/NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-screen">
      <div
        className={`navbar-container bg-cream my-3 mx-8 md:my-4 md:mx-4 p-2 rounded-4xl md:rounded-full border-red border-2 md:border-4 ${isOpen ? 'open' : ''}`}
      >
        <div className="flex flex-row items-center justify-between h-12 sm:h-16 md:h-20">
          <div className="sm:w-screen md:w-1/4 lg:w-1/3 xl:w-1/5 2xl:w-1/6 flex flex-row pl-2 justify-between md:justify-start items-center">
            <img
              src={sal}
              alt="Sal the snail"
              className={`w-[16%] sm:w-[15%] md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-2/3 m-1 xl:m-4 h-auto self-center transition-transform duration-500 ${
                isOpen ? 'rotate-360' : ''
              }`}
            />
            <NavLink
              to="/"
              className="md:flex text-red font-title text-4xl Fsm:text-5xl md:text-4xl lg:text-5xl self-center h-fit transition-colors duration-300 ease-in-out hover:text-brown "
            >
              UADS
            </NavLink>
            <div className="md:hidden self-center">
              <p
                onClick={() => setIsOpen(!isOpen)}
                className="relative cursor-pointer sm:px-5 py-3 rounded-full font-body font-bold w-fit min-w-[90px] text-center transition-colors duration-300 ease-in-out bg-red text-cream hover:bg-brown"
              >
                <span className="invisible">Close</span>
                <span className="absolute inset-0 flex items-center justify-center">
                  {isOpen ? 'Close' : 'Menu'}
                </span>
              </p>
            </div>
          </div>

          {/* Widescreen nav */}
          <div className="hidden md:flex flex-row pr-4 w-fit self-center items-center">
            <div className="md:px-5 lg:px-8">
              <NavLink
                to="/sponsors"
                className="font-body font-bold sm:text-xl md:text-md lg:text-xl xl:text-2xl text-red hover:text-brown transition-colors duration-300 ease-in-out"
              >
                Sponsors
              </NavLink>
            </div>
            <div className="md:px-5 lg:px-8">
              <NavLink
                to="/events"
                className="font-body font-bold sm:text-xl md:text-md lg:text-xl xl:text-2xl text-red hover:text-brown transition-colors duration-300 ease-in-out"
              >
                Events
              </NavLink>
            </div>
            <div className="md:px-5 lg:px-8">
              <NavLink
                to="/about"
                className="font-body font-bold sm:text-xl md:text-md lg:text-xl xl:text-2xl text-red hover:text-brown transition-colors duration-300 ease-in-out"
              >
                About
              </NavLink>
            </div>
            <a
              href="https://forms.gle/QVSvcjKLBgk3BZkC8"
              className="px-5 sm:px-10 md:px-5 lg:px-10 py-3 rounded-full font-body font-bold sm:text-xl md:text-lg lg:text-xl xl:text-2xl w-fit transition-colors duration-300 ease-in-out bg-red text-cream hover:bg-brown"
            >
              Join Us
            </a>
          </div>
        </div>

        {/* Mobile dropdown nav */}
        <div
          className={`md:hidden flex flex-col items-center gap-4 transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? 'opacity-100 max-h-96 pt-4' : 'opacity-0 max-h-0 pt-0'
          }`}
        >
          <NavLink
            to="/sponsors"
            className="block text-red font-body font-semibold hover:text-brown transition"
            onClick={() => setIsOpen(false)}
          >
            Sponsors
          </NavLink>
          <NavLink
            to="/events"
            className="block text-red font-body font-semibold hover:text-brown transition"
            onClick={() => setIsOpen(false)}
          >
            Events
          </NavLink>
          <NavLink
            to="/about"
            className="block text-red font-body font-semibold hover:text-brown transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <a
            href="https://forms.gle/QVSvcjKLBgk3BZkC8"
            className="w-1/2 text-center sm:px-5 py-1 rounded-full font-body font-semibold transition-colors duration-300 ease-in-out bg-red text-cream hover:bg-brown"
            onClick={() => setIsOpen(false)}
          >
            Join Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
