import { EventCardProps } from "../utils/FrontendTypes";
import { NavLink } from "react-router";
function hasPassed(eventDateTime: string): boolean {
    return new Date(eventDateTime) < new Date();
  }

  function EventCard(props: EventCardProps) {
    const { eventStartDateTime, eventEndDateTime, title, location, description, imageSrc } = props;
  
    const isPast = hasPassed(eventStartDateTime);
  
    const start = new Date(eventStartDateTime);
    const end = new Date(eventEndDateTime);
  
    const datePart = start.toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });
  
    const startTime = start.toLocaleTimeString(undefined, { timeStyle: 'short' });
    const endTime = end.toLocaleTimeString(undefined, { timeStyle: 'short' });
  
    const formattedDateTime = `${datePart} · ${startTime} - ${endTime}`;
  
    return (
      <div
        className={`aspect-[20/9] h-1/2 rounded-4xl p-2 flex gap-4 overflow-hidden font-body relative ${
          isPast ? "bg-cream border-4 border-red text-brown" : "border-4 border-red bg-red text-cream"
        }`}
      >
        {/* Left side image container */}
        <div className="relative w-1/3 overflow-hidden p-2">
          <div className="w-full h-0 pb-[125%] relative rounded-3xl">
            <img
              src={imageSrc}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
            />
          </div>
          {isPast && (
            <div className="absolute inset-0 flex items-center justify-center bg-cream opacity-80"></div>
          )}
        </div>
  
        {/* Right side content */}
        <div className="w-2/3 flex flex-col items-start justify-between py-2 pr-2 relative">
          <div>
            <p className="text-sm font-medium opacity-90">{formattedDateTime}</p>
            <h2 className="text-xl font-bold leading-tight">{title}</h2>
            <p className="text-md font-semibold opacity-90">{location}</p>
            <p className="text-sm opacity-90 line-clamp-3">
                {isPast && (
                    <span className="font-semibold text-red block">
                    Event Passed
                    </span>
                )}
                {description}
                </p>
          </div>
  
          {/* Read More Button */}
          <NavLink
            to={`/events/${props.id}`}
            className="absolute bottom-2 right-2 text-sm px-3 py-1 rounded-full font-bold bg-cream text-red hover:opacity-90  transition-all duration-200"
            >
            Read More
            </NavLink>
        </div>
      </div>
    );
  }
  
 export default EventCard;  