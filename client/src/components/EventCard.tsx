import { EventProps } from '../utils/FrontendTypes';
import { NavLink } from 'react-router';
function hasPassed(eventDateTime: string): boolean {
  return new Date(eventDateTime) < new Date();
}

function EventCard(props: EventProps) {
  const { eventStartDateTime, eventEndDateTime, title, location, description, imageSrc, week } =
    props;

  const isPast = hasPassed(eventStartDateTime);

  const start = new Date(eventStartDateTime);
  const end = new Date(eventEndDateTime);

  const datePart = start.toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  const startTime = start.toLocaleTimeString(undefined, { timeStyle: 'short' });
  const endTime = end.toLocaleTimeString(undefined, { timeStyle: 'short' });

  const formattedDateTime =
    eventEndDateTime === '' ? week : `${datePart} · ${startTime} - ${endTime}`;

  return (
    <div
      className={`w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 max-w-4xl aspect-[20/13] sm:aspect-[20/9] rounded-3xl p-1 sm:p-2 flex gap-2 sm:gap-4 overflow-hidden font-body relative ${
        isPast
          ? 'bg-cream border-2 md:border-4 border-red text-brown'
          : 'border-2 md:border-4 border-red bg-red text-cream'
      }`}
    >
      {/* Left side */}
      <div className="relative w-1/3 overflow-hidden p-2">
        {imageSrc ? (
          <div className="w-full h-0 pb-[125%] relative rounded-2xl sm:rounded-3xl">
            <img
              src={imageSrc}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
            />
          </div>
        ) : (
          <div className="w-full h-0 pb-[125%] relative bg-cream rounded-3xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-red text-xs sm:text-base text-center mx-5">Poster Coming Soon</p>
            </div>
          </div>
        )}
        {isPast && (
          <div className="absolute inset-0 flex items-center justify-center bg-cream opacity-50"></div>
        )}
      </div>

      {/* Right side content */}
      <div className="w-2/3 flex flex-col items-start justify-between py-2 pr-4 md:pr-2 relative">
        <div>
          <p className="text-xs sm:text-sm md:text-base 2xl:text-lg font-medium opacity-90">
            {formattedDateTime}
          </p>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-md md:-text-lg 2xl:text-xl font-semibold opacity-90 mb-2">
            {location}
          </p>
          <p className="text-xs sm:text-base md:text-lg opacity-90 line-clamp-2 lg:line-clamp-3 whitespace-pre-line">
            {isPast && <span className="font-semibold text-red block">Event Passed</span>}
            {description}
          </p>
        </div>

        <NavLink
          to={`/events/${props.id}`}
          className={`absolute bottom-2 right-2 text-sm px-3 py-1 md:px-5 md:py-2 lg:px-10 md:text-base xl:text-lg rounded-full font-bold  transition-all duration-300 ${
            isPast ? 'bg-red text-cream hover:bg-brown ' : 'bg-cream text-red hover:opacity-90'
          }`}
        >
          Read More
        </NavLink>
      </div>
    </div>
  );
}

export default EventCard;
