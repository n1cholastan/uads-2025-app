import sal from "../assets/sal.png";
import temp from "../assets/20250404_123226.jpg";
import temp2 from "../assets/E87D9FD3-B91A-4840-BB77-420D22C14FB2.png";
import temp3 from "../assets/IMG_3987.png";
import temp4 from "../assets/IMG_4160.png";
import temp5 from "../assets/IMG_4010.png";
import temp6 from "../assets/IMG_3932.png";
import NavButton from "../components/NavButton";
import StarSeparator from "../components/StarSeparator";
import post from "../assets/dessert crawl post.png";
import EventCard from "../components/EventCard";
import { SiLinktree, SiInstagram, SiTiktok, SiGmail, SiDiscord, SiFacebook } from "react-icons/si";

import lanoissette from "../assets/sponsor images/lanoissette.png";
import tsujiri from "../assets/sponsor images/tsujiri.png";
import yoguyogu from "../assets/sponsor images/yoguyogu.png";
import gongcha from "../assets/sponsor images/gong cha.png";
import giapo from "../assets/sponsor images/giapo.png";
import lapetit from "../assets/sponsor images/lapetitfourchette.png";
import kompass from "../assets/sponsor images/kompass.png";
import thatsandoguy from "../assets/sponsor images/thatsandoguy.png";
import theshelf from "../assets/sponsor images/the shelf.png";
import teadee from "../assets/sponsor images/LOGO - (Black and Yellow Text) Transparent Background.png";
import copain from "../assets/sponsor images/copain.png";
import fugitoto from "../assets/sponsor images/fugitoto.png";
import uncletetsus from "../assets/sponsor images/uncle_tetsus.png";

function Home() {
    return (
        <div className="bg-cream w-screen text-black py-4 flex flex-col items-center">
          <StartingSection />
          <ImageSection />
          <AboutSection />
          <StarSeparator />
          <NextEventsSection />
          <StarSeparator />
          <SponsorSection />

        </div>
    )

}


function StartingSection() {
    return (
        <div className=" mx-5 mb-10">
            <div className="mt-20 flex flex-col gap-4 items-center">
                <img src={sal} className="w-1/4 m-auto animate-sway"></img>
                <p className="text-5xl font-title text-red text-center">UADS</p>
                <p className="text-3xl font-body font-semibold text-center text-brown">UNIVERSITY OF AUCKLAND DESSERT SOCIETY </p>
                <p className="my-3  text-xl sm:text-2xl md:text-3xl font-body font-regular text-center text-brown">The largest student run society for dessert lovers in Aotearoa. </p>
                <div className="mt-8">
                  <a
                    href="https://forms.gle/QVSvcjKLBgk3BZkC8"
                    className= "px-5 sm:px-10 md:px-5 lg:px-10 py-3 rounded-full font-body font-bold sm:text-xl md:text-lg lg:text-xl xl:text-2xl w-fit transition-colors duration-300 ease-in-out bg-red text-cream hover:bg-brown"
                    >
                    Join UADS
                  </a>
                    
                    </div>

                    <div className="mt-10 flex flex-row w-fit self-center items-center gap-3 sm:gap-6 md:gap-10">
                        <a href="https://www.facebook.com/uoadessertsociety" className="bg-red rounded-full w-10 h-10 flex items-center justify-center hover:bg-brown transition-colors duration-300 ease-in-out">
                        <SiFacebook className="w-6 h-6  fill-cream" />
                        </a>
                        <a href="https://linktr.ee/dessertsociety" className="bg-red rounded-full w-10 h-10 flex items-center justify-center hover:bg-brown transition-colors duration-300 ease-in-out">
                        <SiLinktree className="w-6 h-6  fill-cream" />
                        </a>
                        <a href="https://www.tiktok.com/@uoadessertsociety" className="bg-red rounded-full w-10 h-10 flex items-center justify-center hover:bg-brown transition-colors duration-300 ease-in-out">
                        <SiTiktok className="w-6 h-6  fill-cream" />
                        </a>
                        <a href="https://www.instagram.com/uoadessertsociety/" className="bg-red rounded-full w-10 h-10 flex items-center justify-center hover:bg-brown transition-colors duration-300 ease-in-out">
                        <SiInstagram className="w-6 h-6  fill-cream" />
                        </a>
                        <a href="mailto:uoadessertsociety@gmail.com" className="bg-red rounded-full w-10 h-10 flex items-center justify-center hover:bg-brown transition-colors duration-300 ease-in-out">
                        <SiGmail className="w-6 h-6  fill-cream" />
                        </a>
                        <a href="https://discord.gg/zEQqXeb9QM" className="bg-red rounded-full w-10 h-10 flex items-center justify-center hover:bg-brown transition-colors duration-300 ease-in-out">
                        <SiDiscord className="w-6 h-6  fill-cream" />
                        </a>

                    </div>
            </div>
            
        </div>
    )
    
}

function ImageSection() {
    return (
        <div className="mx-3 md:mx-8 my-8 lg:mx-32 xl:mx-56 grid grid-cols-3 gap-2 sm:gap-4 p-4 bg-cream">
        {/* Column 1 */}
        <div className="flex flex-col gap-2 sm:gap-4">
          <div className="overflow-hidden rounded-xl md:rounded-4xl aspect-[3/4]">
            <img src={temp} alt="Dessert" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-xl md:rounded-4xl aspect-[4/3]">
            <img src={temp6} alt="Dessert Flatlay" className="w-full h-full object-cover" />
          </div>
        </div>
      
        {/* Column 2 */}
        <div className="flex flex-col gap-2 sm:gap-4">
          <div className="overflow-hidden rounded-xl md:rounded-4xl aspect-[4/3]">
            <img src={temp2} alt="Bubble Tea" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-xl md:rounded-4xl aspect-[3/4]">
            <img src={temp4} alt="Ice Cream" className="w-full h-full object-cover" />
          </div>
        </div>
      
        {/* Column 3 */}
        <div className="flex flex-col gap-2 sm:gap-4">
          <div className="overflow-hidden rounded-xl md:rounded-4xl aspect-[3/4]">
            <img src={temp5} alt="Dessert" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-xl md:rounded-4xl aspect-[4/3]">
            <img src={temp3} alt="Dessert Flatlay" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      
    )
}

function AboutSection() {
    return (
        <div className="text-center my-2 md:my-10 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80"> 
            <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-8">What is UADS?</p>
            <p className="font-body text-brown text-base md:text-xl mb-6">
                UADS is a student run club at the University of Auckland that aims to bring people together through our shared love of desserts. 
                For all things dessert, look no further than UADS!
                </p>
                <p className="font-body text-brown text-base md:text-xl mb-10 md:mb-12">
                    At UADS, we hold social events based around dessert all throughout the academic year, with events ranging from movie screenings, high teas and baking workshops! 
                    Along with our events, we also like to discover, review and recommend dessert establishments in the city.
                    </p>
            <NavButton linkto="/about" buttontext="Learn more" />
        </div>

    )
}

function NextEventsSection() {
    return (
        <div className="text-center my-2 md:my-10 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80"> 
            <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-8">Our Next Event</p>
            <div className="mb-10">
            <EventCard
                id="1"
                eventStartDateTime="2025-04-25T18:00:00"
                eventEndDateTime="2025-04-25T20:00:00"
                title="Dessert Festival 2025"
                location="University of Auckland Quad"
                description="Join us for a sweet evening of desserts, games, and music! Free samples from local dessert vendors."
                imageSrc={post}
                />
                </div>
            
            <NavButton linkto="/events" buttontext="Discover Events" />
            </div>

    )
}

function SponsorSection() {
    const sponsors1 = [theshelf, lanoissette, kompass, lapetit, thatsandoguy, tsujiri]
    const sponsors2 = [yoguyogu, gongcha, giapo, teadee, copain, uncletetsus, fugitoto ]
    return (
        <div className="flex flex-col items-center mb-10">
        <div className="text-center my-2 md:my-10 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80"> 
            <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-8">2025 Sponsors</p>
            
            
        </div>
        <div className="relative overflow-hidden py-6">
      <div
        className="flex w-[200%] animate-scroll-x pause-on-hover"
        style={{ '--marquee-speed': '40s' }}
      >
        {[...sponsors1, ...sponsors1].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Sponsor ${index + 1}`}
            className="h-20 w-auto mx-6 shrink-0"
          />
        ))}
      </div>
    </div>
    <div className="relative overflow-hidden py-6 mb-10">
      <div
        className="flex w-[200%] animate-scroll-x pause-on-hover"
        style={{ '--marquee-speed': '40s' }}
      >
        {[...sponsors2, ...sponsors2].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Sponsor ${index + 1}`}
            className="h-20 w-auto mx-6 shrink-0"
          />
        ))}
      </div>
    </div>

        
        <NavButton linkto="/sponsors" buttontext="Sponsorship Deals" />
        </div>

    )
}


export default Home;