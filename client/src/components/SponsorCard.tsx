import { SponsorProps } from '../utils/FrontendTypes';

function SponsorCard(props: SponsorProps) {
  const { name, location, deal, link, imageSrc } = props;

  return (
    <div className="w-11/12 sm:w-9/12 md:w-7/12 lg:w-10/12 xl:w-10/12 2xl:w-11/12 max-w-4xl aspect-[18/10] md:aspect-[18/9] rounded-3xl p-1 sm:p-2 flex gap-2 sm:gap-4 overflow-hidden font-body relative border-4 border-red bg-red text-cream">
      {/* Left side */}
      <div className="relative w-5/12 md:w-1/3 aspect-square overflow-hidden p-2">
        {imageSrc ? (
          <div className="w-full h-full relative rounded-3xl bg-cream">
            <img
              src={imageSrc}
              alt={name}
              className="absolute inset-0 w-full h-full object-contain rounded-3xl px-2"
            />
          </div>
        ) : (
          <div className="w-full h-full relative rounded-3xl bg-cream flex items-center justify-center">
            <p className="text-red font-bold text-center mx-5">{name}</p>
          </div>
        )}
      </div>

      {/* Right side content */}
      <div className="w-2/3 flex flex-col items-start justify-between py-2 pr-2 relative text-cream">
        <div>
          <h2 className="text-lg sm:text-2xl md:text-xl xl:text-xl font-bold leading-tight">
            {name}
          </h2>
          <p className="text-sm sm:text-base md:text-lg 2xl:text-base font-semibold opacity-90 mb-2">
            {location}
          </p>
          <p className="text-sm sm:text-base opacity-90 line-clamp-2 sm:line-clamp-3">{deal}</p>
        </div>

        {link && (
          <a
            href={link}
            className="absolute bottom-2 right-2 px-4 py-1 md:px-3 md:py-1 lg:px-5 text-base md:text-lg rounded-full font-bold transition-all hover:opacity-90 duration-300 bg-cream text-red"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        )}
      </div>
    </div>
  );
}

export default SponsorCard;
