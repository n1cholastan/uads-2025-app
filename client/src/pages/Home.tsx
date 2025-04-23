import sal from '../assets/sal.png';
import cafehopping from '../assets/cafeHopping.jpg';
import kumi from '../assets/kumi.png';
import acai from '../assets/acai.png';
import icecream from '../assets/iceCream.png';
import cookies from '../assets/cookies.png';
import croquembouche from '../assets/croquembouche.png';
import NavButton from '../components/NavButton';
import StarSeparator from '../components/StarSeparator';
import EventCard from '../components/EventCard';
import { SiLinktree, SiInstagram, SiTiktok, SiGmail, SiDiscord, SiFacebook } from 'react-icons/si';
import { useState, useEffect } from 'react';
import { SponsorProps } from '../utils/FrontendTypes';
import { EventProps } from '../utils/FrontendTypes';

function Home() {
  const [sponsorsFirstHalf, setSponsorsFirstHalf] = useState<SponsorProps[]>([]);
  const [sponsorsSecondHalf, setSponsorsSecondHalf] = useState<SponsorProps[]>([]);
  const [events, setEvents] = useState<EventProps[]>([]);
  const upcomingEvents = events.filter((event) => new Date(event.eventStartDateTime) > new Date());
  const firstEvent = upcomingEvents[0];

  useEffect(() => {
    fetch('/api/events', { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: EventProps[]) => {
        console.log('Events loaded:', data);
        setEvents(data);
      })
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  useEffect(() => {
    fetch('/api/sponsors', { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: SponsorProps[]) => {
        console.log('Sponsors loaded:', data);
        const middleIndex = Math.floor(data.length / 2);
        const firstHalf = data.slice(0, middleIndex);
        const secondHalf = data.slice(middleIndex);

        setSponsorsFirstHalf(firstHalf);
        setSponsorsSecondHalf(secondHalf);
      })
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  return (
    <div className="bg-cream w-screen py-4 flex flex-col items-center">
      {/*Welcome Screen*/}
      <div className=" mx-5 mb-5 md:mb-20">
        <div className="mt-8 sm:mt-20 flex flex-col gap-4 items-center">
          <img src={sal} alt="Sal the Snail" className="w-1/4 m-auto animate-sway"></img>
          <p className="text-5xl font-title text-red text-center">UADS</p>
          <p className="text-2xl sm:text-3xl font-body font-semibold text-center text-brown mx-3 sm:mx-5 md:mx-10">
            UNIVERSITY OF AUCKLAND DESSERT SOCIETY{' '}
          </p>
          <p className="my-3  text-xl sm:text-2xl md:text-3xl font-body font-regular text-center text-brown mx-3 sm:mx-5 md:mx-10">
            The largest student run society for dessert lovers in Aotearoa.{' '}
          </p>
          <div className="mt-8">
            <a
              href="https://forms.gle/QVSvcjKLBgk3BZkC8"
              className="px-5 sm:px-10 md:px-5 lg:px-10 py-3 rounded-full font-body font-bold sm:text-xl md:text-lg lg:text-xl xl:text-2xl w-fit transition-colors duration-300 ease-in-out bg-red text-cream hover:bg-brown"
            >
              Join UADS
            </a>
          </div>

          <div className="mt-10 flex flex-row w-fit self-center items-center gap-3 sm:gap-6 md:gap-10">
            <a
              href="https://www.facebook.com/uoadessertsociety"
              className="bg-red rounded-full w-10 h-10 flex items-center justify-center hover:bg-brown transition-colors duration-300 ease-in-out"
            >
              <SiFacebook className="w-6 h-6  fill-cream" />
            </a>
            <a
              href="https://linktr.ee/dessertsociety"
              className="bg-red rounded-full w-10 h-10 flex items-center justify-center hover:bg-brown transition-colors duration-300 ease-in-out"
            >
              <SiLinktree className="w-6 h-6  fill-cream" />
            </a>
            <a
              href="https://www.tiktok.com/@uoadessertsociety"
              className="bg-red rounded-full w-10 h-10 flex items-center justify-center hover:bg-brown transition-colors duration-300 ease-in-out"
            >
              <SiTiktok className="w-6 h-6  fill-cream" />
            </a>
            <a
              href="https://www.instagram.com/uoadessertsociety/"
              className="bg-red rounded-full w-10 h-10 flex items-center justify-center hover:bg-brown transition-colors duration-300 ease-in-out"
            >
              <SiInstagram className="w-6 h-6  fill-cream" />
            </a>
            <a
              href="mailto:uoadessertsociety@gmail.com"
              className="bg-red rounded-full w-10 h-10 flex items-center justify-center hover:bg-brown transition-colors duration-300 ease-in-out"
            >
              <SiGmail className="w-6 h-6  fill-cream" />
            </a>
            <a
              href="https://discord.gg/zEQqXeb9QM"
              className="bg-red rounded-full w-10 h-10 flex items-center justify-center hover:bg-brown transition-colors duration-300 ease-in-out"
            >
              <SiDiscord className="w-6 h-6  fill-cream" />
            </a>
          </div>
        </div>
      </div>

      {/*Images*/}
      <div className="mx-3 md:mx-8 my-8 lg:mx-32 xl:mx-56 grid grid-cols-3 gap-2 sm:gap-4 p-4 bg-cream">
        {/* Column 1 */}
        <div className="flex flex-col gap-2 sm:gap-4">
          <div className="overflow-hidden rounded-xl md:rounded-4xl aspect-[3/4]">
            <img src={cafehopping} alt="High Tea Desserts" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-xl md:rounded-4xl aspect-[4/3]">
            <img
              src={kumi}
              alt="Brown Sugar Bingsu and Matcha Souffle"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2 sm:gap-4">
          <div className="overflow-hidden rounded-xl md:rounded-4xl aspect-[4/3]">
            <img src={acai} alt="Acai Bowls" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-xl md:rounded-4xl aspect-[3/4]">
            <img src={icecream} alt="Ice Cream" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2 sm:gap-4">
          <div className="overflow-hidden rounded-xl md:rounded-4xl aspect-[3/4]">
            <img src={cookies} alt="Decorated Cookies" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-xl md:rounded-4xl aspect-[4/3]">
            <img src={croquembouche} alt="Croquembouche" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/*About Section*/}
      <div className="text-center my-2 md:my-10 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80">
        <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-8">What is UADS?</p>
        <p className="font-body text-brown text-base md:text-xl mb-6">
          UADS is a student run club at the University of Auckland that aims to bring people
          together through our shared love of desserts. For all things dessert, look no further than
          UADS!
        </p>
        <p className="font-body text-brown text-base md:text-xl mb-10 md:mb-12">
          At UADS, we hold social events based around dessert all throughout the academic year, with
          events ranging from movie screenings, high teas and baking workshops! Along with our
          events, we also like to discover, review and recommend dessert establishments in the city.
        </p>
        <NavButton linkto="/about" buttontext="Learn more" />
      </div>
      <StarSeparator />

      {firstEvent && (
        <>
          {/* Event Section */}
          <div className="flex flex-col items-center px-4 md:px-8 lg:px-16 w-screen">
            <div className="text-center my-4 md:my-8">
              <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-6">
                Our Next Event
              </p>
            </div>

            <EventCard {...firstEvent} />

            <div className="my-8 sm:my-14 md:my-20">
              <NavButton linkto="/events" buttontext="Discover Events" />
            </div>
          </div>
          <StarSeparator />
        </>
      )}

      {/* Sponsors Section */}
      <div className="flex flex-col items-center mb-20">
        <div className="text-center my-2 md:my-10 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80">
          <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-8">2025 Sponsors</p>
        </div>
        <div className="relative overflow-hidden py-6">
          <div
            className="flex animate-scroll-x pause-on-hover"
            style={{
              '--marquee-speed': '40s',
              width: '100vw', // Ensure it doesn't overflow
            }}
          >
            {[...sponsorsFirstHalf, ...sponsorsFirstHalf]
              .filter((sponsor) => sponsor.name !== 'No Sponsor Found')
              .map((sponsor, index) =>
                sponsor.imageSrc ? (
                  <img
                    key={index}
                    src={sponsor.imageSrc}
                    alt={sponsor.name}
                    className="h-16 md:h-20 lg:h-30 w-auto mx-6 md:mx-10 shrink-0"
                  />
                ) : (
                  <div className="h-16 md:h-20 lg:h-30 relative rounded-3xl bg-cream flex items-center justify-center">
                    <p className="text-red font-bold font-body text-center mx-5">{sponsor.name}</p>
                  </div>
                )
              )}
          </div>
        </div>
        <div className="relative overflow-hidden py-6 mb-10">
          <div
            className="flex animate-scroll-x pause-on-hover"
            style={{
              '--marquee-speed': '40s',
              width: '100vw', // Same adjustment here
            }}
          >
            {[...sponsorsSecondHalf, ...sponsorsSecondHalf]
              .filter((sponsor) => sponsor.name !== 'No Sponsor Found')
              .map((sponsor, index) =>
                sponsor.imageSrc ? (
                  <img
                    key={index}
                    src={sponsor.imageSrc}
                    alt={sponsor.name}
                    className="h-16 md:h-20 lg:h-30 w-auto mx-6 md:mx-10 shrink-0"
                  />
                ) : (
                  <div className="h-16 md:h-20 lg:h-30 relative rounded-3xl bg-cream flex items-center justify-center">
                    <p className="text-red font-bold font-body text-center mx-5">{sponsor.name}</p>
                  </div>
                )
              )}
          </div>
        </div>

        <NavButton linkto="/sponsors" buttontext="Sponsorship Deals" />
      </div>
    </div>
  );
}

export default Home;
