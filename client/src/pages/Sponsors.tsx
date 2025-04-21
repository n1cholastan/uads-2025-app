import { mockSponsors } from "../mockSponsors";
import { SponsorCardProps } from "../utils/FrontendTypes";
import SponsorCard from "../components/SponsorCard";
import { useState } from "react";

function Sponsors() {
    const [searchTerm, setSearchTerm] = useState("");

  const filteredSponsors = mockSponsors.filter(
    (sponsor) =>
      sponsor.isDeal &&
      sponsor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
        <div className="mb-20">
        <div className="text-center my-8 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80"> 
                <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-8">Our Sponsors</p>
            </div>
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-8 place-items-center mx-10 sm:mx-5 lg:my-10 xl:my-20">
        {mockSponsors.map((sponsor) => (
          <a
            key={sponsor.id}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center"
          >
            <img
              src={sponsor.imageSrc}
              alt={sponsor.name}
              className="w-full max-w-[200px] object-contain"
            />
          </a>
        ))}
      </div>

      <div className="text-center my-8 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80"> 
                <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-12">Sponsor Deals</p>
            </div>

      <div className="mb-12 flex justify-center mx-6">
        <input
          type="text"
          placeholder="Search sponsors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border-2 border-red rounded-full focus:outline-none focus:ring-2 focus:ring-red text-red placeholder-red font-body"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-y-6 place-items-center mx-1 md:mx-4">
        {filteredSponsors.map((sponsor) => (
          <SponsorCard key={sponsor.id} {...sponsor} />
        ))}
        {filteredSponsors.length === 0 && (
          <p className="text-red text-center col-span-full font-body">No sponsors found.</p>
        )}
      </div>
    </div>


        
    )
}
export default Sponsors;