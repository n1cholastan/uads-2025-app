import leftimg from "../assets/croffle.jpeg";
import rightimg from "../assets/sal cookie.jpeg";
import signuppic from "../assets/signuppic.jpg";
import StarSeparator from "../components/StarSeparator";
import {mockExecs} from"../mockExecs";

function AboutUs() {
    return (
        <div className="mb-10">
        <div className="text-center my-8 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80"> 
                <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-8">About Us</p>
            </div>
        <div className="mx-3 md:mx-8 mt-2 mb-8 sm:mb-12 md:mb-16 lg:mx-24 xl:mx-48 2xl:mx-80 grid grid-cols-1 sm:grid-cols-2 gap-6  sm:gap-8 lg:gap-20 p-4 bg-cream">
                <div className="self-center">
                <p className="font-title text-red text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-4 md:mb-8 text-center sm:text-left">Who are we?</p>
                <p className="font-body text-brown text-sm sm:text-base md:text-xl mb-6 text-center sm:text-left">
                The UoA Dessert Society is a student society based at the University of Auckland.<br></br>
                Founded in 2021, UADS aimed to create a social club based around the celebration and enjoyment of dessert, and now several years later, we are continuing the club's original mission. 
                </p>
                </div>
                <div className="self-center mx-18 sm:mx-0">
                    <div className="overflow-hidden rounded-xl md:rounded-4xl aspect-[3/4]">
                        <img src={rightimg} alt="Dessert" className="w-full h-full object-cover" />
                    </div>
                </div>
                
                </div>

        <div className="mx-3 md:mx-8 mt-2 mb-8 sm:mb-12 md:mb-18 lg:mx-24 xl:mx-48 2xl:mx-80 grid grid-cols-1 sm:grid-cols-2 gap-6  sm:gap-8 lg:gap-20 p-4 bg-cream">

            <div className="hidden sm:block overflow-hidden rounded-xl md:rounded-4xl aspect-[3/4] self-center">
                <img src={leftimg} alt="Dessert" className="w-full h-full object-cover" />
            </div>

            <div className="self-center">
                <p className="font-title text-red text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-4 md:mb-8 text-center sm:text-left">What do we do?</p>
                <p className="font-body text-brown text-sm sm:text-base md:text-xl mb-6 text-center sm:text-left">
                Here at UADS, we try to be the place for all things dessert. 
                We showcase and review new dessert spots on our socials, 
                we work with local businesses to get our members deals at our sponsors, 
                and we organize many events centred around desserts!
                </p>
                <p className="font-body text-brown text-sm sm:text-base md:text-xl mb-6 text-center sm:text-left">
                We like to have a range of different events focused on different activites, with an event at least every two weeks. 
                Our events can be anything from a baking workshop, a bake sale, cookie decorating, study sessions, film screenings, and much more.
                Check out the events page to see what events we've done in the past and what we have planned.
                </p>
            </div>
                
        </div>

        <div className="text-center mt-2 md:mt-10 mb-0 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80"> 
        <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-8">Become A Member Today!</p>
            <p className="font-body text-brown text-sm sm:text-base md:text-xl lg:mx-10 2xl:mx-20">
            Memberships are open to anyone and everyone, meaning you do not have to be a student at UoA to join! 
            A UADS membership grants you free access to most of our events,  allows you to redeem our sponsorship deals, and puts you on our mailing list for our newsletter!
            </p>
            <div className="mx-24 sm:mx-36 md:mx-44 lg:mx-64 xl:mx-40 2xl:mx-64 my-10" >
                <div className="overflow-hidden rounded-xl md:rounded-4xl aspect-[3/4]">
                        <img src={signuppic} alt="Dessert" className="w-full h-full object-cover" />
                    </div>
                </div>
            <p className="font-body text-brown text-sm sm:text-base md:text-xl lg:mx-10 2xl:mx-20 mb-10">
            Our membership fee is $8 for new members and $5 for returning members.
            </p>
                
            <a
              href="https://forms.gle/QVSvcjKLBgk3BZkC8"
              className= "px-5 sm:px-10 md:px-5 lg:px-10 py-3 rounded-full font-body font-bold sm:text-xl md:text-lg lg:text-xl xl:text-2xl w-fit transition-colors duration-300 ease-in-out bg-red text-cream hover:bg-brown"
            >
            Join UADS!
            </a>
        </div>

        <StarSeparator />

        <div className="text-center mt-2 md:mt-10 mb-0 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80"> 
        <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-8">The Executive Team</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 p-4 bg-cream">
      {mockExecs.map((src, index) => (
        <div
          key={index}
          className="aspect-[4/5] overflow-hidden border-2 border-red rounded-xl"
        >
          <img
            src={src}
            alt={`Sponsor ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
        </div>
    </div>
    )
}
export default AboutUs;