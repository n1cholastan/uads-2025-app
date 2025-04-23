import { useState, useEffect } from 'react';
import SponsorCard from '../components/SponsorCard';
import { SponsorProps } from '../utils/FrontendTypes';
import Loading from '../components/Loading';

function Sponsors() {
  const [sponsors, setSponsors] = useState<SponsorProps[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/sponsors', { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: SponsorProps[]) => {
        console.log('Sponsors loaded:', data);
        setSponsors(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, []);

  const filteredSponsors = sponsors.filter(
    (sponsor) => sponsor.isDeal && sponsor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading)
    return (
      <div className="h-screen">
        <div className="text-center my-8 md:my-10 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80">
          <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-8"> Our Sponsors</p>
        </div>
        <Loading />
      </div>
    );

  return (
    <div>
      <div className="mb-20">
        <div className="text-center my-8 md:my-10 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80">
          <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-8">Our Sponsors</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center mx-10 sm:mx-5 lg:my-10 xl:my-20">
          {sponsors
            .filter((sponsor) => sponsor.name !== 'No Sponsor Found')
            .map((sponsor) =>
              sponsor.imageSrc ? (
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
              ) : (
                <div className="w-full h-full relative rounded-3xl bg-cream flex items-center justify-center">
                  <p className="text-red font-bold font-body text-center mx-5">{sponsor.name}</p>
                </div>
              )
            )}
        </div>

        <div className="text-center my-8 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80">
          <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-12 ">
            Sponsor Deals
          </p>
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
          {filteredSponsors
            .filter((sponsor) => sponsor.name !== 'No Sponsor Found')
            .map((sponsor) => (
              <SponsorCard key={sponsor.id} {...sponsor} />
            ))}
          {filteredSponsors.length === 0 && (
            <p className="text-red text-center col-span-full font-body">No sponsors found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default Sponsors;
