import croffle from '../assets/croffle.jpeg';
import sal_cookie from '../assets/sal cookie.jpeg';
import signuppic from '../assets/signuppic.jpeg'
import StarSeparator from '../components/StarSeparator';
import { useState, useEffect } from 'react';
import { ExecProps } from '../utils/FrontendTypes';
function AboutUs() {
  const [execs, setExecs] = useState<ExecProps[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/execs`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: ExecProps[]) => {
        console.log('Execs loaded:', data);
        setExecs(data);
      })
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  return (
    <div className="mb-20">
      <div className="text-center my-8 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80">
        <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-8">About Us</p>
      </div>
      <div className="mx-3 md:mx-8 mt-2 mb-8 sm:mb-12 md:mb-16 lg:mx-24 xl:mx-48 2xl:mx-80 grid grid-cols-1 sm:grid-cols-2 gap-6  sm:gap-8 lg:gap-20 p-4 bg-cream">
        <div className="self-center">
          <p className="font-title text-red text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-4 md:mb-8 text-center sm:text-left">
            Who are we?
          </p>
          <p className="font-body text-brown text-sm sm:text-base md:text-xl mb-2 sm:mb-6 text-center sm:text-left">
            The UoA Dessert Society is a student society based at the University of Auckland.
          </p>
          <p className="font-body text-brown text-sm sm:text-base md:text-xl mb-2 sm:mb-6 text-center sm:text-left">
            Founded in 2021, UADS aims to foster a safe social environment which celebrates the joy
            and beauty of desserts. For everything baked or sweet, UADS is the place to be!
          </p>
        </div>
        <div className="self-center mx-8 sm:mx-0">
          <div className="overflow-hidden rounded-xl md:rounded-3xl aspect-[3/4]">
            <img src={sal_cookie} alt="Sal as a cookie" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="mx-3 md:mx-8 mt-2 mb-8 sm:mb-12 md:mb-18 lg:mx-24 xl:mx-48 2xl:mx-80 grid grid-cols-1 sm:grid-cols-2 gap-6  sm:gap-8 lg:gap-20 p-4 bg-cream">
        <div className="hidden sm:block overflow-hidden rounded-xl md:rounded-3xl aspect-[3/4] self-center">
          <img src={croffle} alt="Croffles!" className="w-full h-full object-cover" />
        </div>

        <div className="self-center">
          <p className="font-title text-red text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-4 md:mb-8 text-center sm:text-left">
            What do we do?
          </p>
          <p className="font-body text-brown text-sm sm:text-base md:text-xl mb-2 sm:mb-6 text-center sm:text-left">
            Here at UADS, we try to be the place for all things dessert. We showcase and review new
            dessert spots on our socials, we work with local businesses to get our members deals at
            our sponsors, and we organize many events centred around desserts!
          </p>
          <p className="font-body text-brown text-sm sm:text-base md:text-xl mb-2 sm:mb-6 text-center sm:text-left">
            We like to have a range of different events focused on different activites, with an
            event at least every two weeks. Our events can be anything from baking workshos, bake
            sales, cookie decorating, study sessions, film screenings, and much more. Check out the
            events page to see what events we've done in the past and what we have planned.
          </p>
        </div>
      </div>

      <div className="text-center mt-2 md:mt-10 mb-0 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80">
        <p className="font-title text-red text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-8">
          Become A Member Today!
        </p>
        <p className="font-body text-brown text-sm sm:text-base md:text-xl lg:mx-10 2xl:mx-20 mb-2 sm:mb-6">
          Memberships are open to anyone and everyone, meaning you do not have to be a student at
          UoA to join!{' '}
        </p>
        <p className="font-body text-brown text-sm sm:text-base md:text-xl lg:mx-10 2xl:mx-20 mb-2 sm:mb-6">
          A UADS membership grants you free access to most of our events, allows you to redeem our
          sponsorship deals with your membership sticker, and puts you on our mailing list for our
          newsletter!
        </p>
        <div className="mx-8 sm:mx-32 md:mx-44 lg:mx-64 xl:mx-40 2xl:mx-64 my-10">
          <div className="overflow-hidden rounded-xl md:rounded-3xl aspect-[3/4]">
            <img src={signuppic} alt="Sign Up!" className="w-full h-full object-cover" />
          </div>
        </div>
        <p className="font-body text-brown text-sm sm:text-base md:text-xl lg:mx-10 2xl:mx-20 mb-10">
          Our membership fee is $8 for new members and $5 for returning members.
        </p>

        <a
          href="https://forms.gle/QVSvcjKLBgk3BZkC8"
          className="px-5 sm:px-10 md:px-5 lg:px-10 py-3 rounded-full font-body font-bold sm:text-xl md:text-lg lg:text-xl xl:text-2xl w-fit transition-colors duration-300 ease-in-out bg-red text-cream hover:bg-brown"
        >
          Join UADS!
        </a>
      </div>

      <StarSeparator />

      <div className="text-center mt-2 md:mt-10 mb-0 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80">
        <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-8">
          The Executive Team
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 p-0 sm:p-4 bg-cream">
          {execs
            .reverse()
            .filter((exec) => exec.name !== 'No Name')
            .map((exec, index) => (
              <div
                key={index}
                className="aspect-[4/5] overflow-hidden border-2 border-red rounded-x flex items-center justify-center"
              >
                {exec.imageSrc ? (
                  <img src={exec.imageSrc} alt={exec.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col gap-5 items-center justify-center m-4">
                    <p className="text-red text-lg xl:text-2xl font-title">{exec.team}</p>
                    <p className="text-red text-base xl:text-xl font-title">{exec.name}</p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
