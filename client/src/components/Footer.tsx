import { NavLink } from 'react-router';
import { SiLinktree, SiInstagram, SiTiktok, SiGmail, SiDiscord, SiFacebook } from 'react-icons/si';
function Footer() {
  return (
    <div className="bg-red w-screen text-cream flex flex-col gap-10 items-center min-h-1/4 max-h-screen">
      <div className="flex flex-col md:flex-row gap-10 w-fit self-center items-center mt-8">
        <NavLink
          to="/sponsors"
          className="font-body font-bold text-2xl md:text-xl hover:opacity-80 transition-all duration-300 ease-in-out"
        >
          Sponsors
        </NavLink>

        <NavLink
          to="/events"
          className="font-body font-bold text-2xl md:text-xl hover:opacity-80 transition-all duration-300 ease-in-out"
        >
          Events
        </NavLink>

        <NavLink
          to="/about"
          className="font-body font-bold text-2xl md:text-xl hover:opacity-80 transition-all duration-300 ease-in-out"
        >
          About
        </NavLink>

        <NavLink
          to="/join"
          className="font-body font-bold text-2xl md:text-xl hover:opacity-80 transition-all duration-300 ease-in-out"
        >
          Join Us
        </NavLink>
      </div>
      <div className="flex flex-row w-fit self-center items-center gap-7 sm:gap-10 fill-cream">
        <a href="https://www.facebook.com/uoadessertsociety">
          <SiFacebook className="w-6 h-6 hover:opacity-80 transition-all duration-300 ease-in-out" />
        </a>
        <a href="https://linktr.ee/dessertsociety">
          <SiLinktree className="w-6 h-6 hover:opacity-80 transition-all duration-300 ease-in-out" />
        </a>
        <a href="https://www.tiktok.com/@uoadessertsociety">
          <SiTiktok className="w-6 h-6 hover:opacity-80 transition-all duration-300 ease-in-out" />
        </a>
        <a href="https://www.instagram.com/uoadessertsociety/">
          <SiInstagram className="w-6 h-6 hover:opacity-80 transition-all duration-300 ease-in-out" />
        </a>
        <a href="mailto:uoadessertsociety@gmail.com">
          <SiGmail className="w-6 h-6 hover:opacity-80 transition-all duration-300 ease-in-out" />
        </a>
        <a href="https://discord.gg/zEQqXeb9QM">
          <SiDiscord className="w-6 h-6 hover:opacity-80 transition-all duration-300 ease-in-out" />
        </a>
      </div>
      <div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer px-4 py-2 bg-cream text-red font-semibold font-body rounded-full hover:opacity-80 transition-all duration-300 "
        >
          BACK TO TOP
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-end items-center gap-5 mx-5 mb-5">
        <p className="font-title text-6xl md:text-4xl xl:text-5xl hover:opacity-80 transition-all duration-300 ease-in-out">
          UADS
        </p>
        <p className="font-inter font-bold text-center text-sm md:text-left ">
          &copy; 2021 - {new Date().getFullYear()} UNIVERSITY OF AUCKLAND DESSERT SOCIETY. ALL
          RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
}

export default Footer;
