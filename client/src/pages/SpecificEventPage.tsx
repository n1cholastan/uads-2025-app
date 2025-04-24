import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { EventProps } from '../utils/FrontendTypes';
import NavButton from '../components/NavButton';
import Loading from '../components/Loading';
import Events from '../pages/Events';

function hasPassed(eventDateTime: string): boolean {
  return new Date(eventDateTime) < new Date();
}

function SpecificEventPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState<EventProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!eventId) return;

    fetch(`/api/events/${eventId}`)
      .then((res) => {
        console.log('eventId', eventId);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: EventProps) => {
        setEvent(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, [eventId]);

  if (loading)
    return (
      <div className="h-screen">
        <div className="text-center my-8 md:my-10 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80">
          <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-8">Events</p>
        </div>
        <Loading />
      </div>
    );
  if (!event)
    return (
      <div className="flex flex-col justify-center mt-6">
        <div className="mx-8 mb-8 p-6 xl:p-10 rounded-3xl w-11/12 md:w-9/12 lg:w-3/4 flex flex-col self-center font-body text-red bg-cream border-red border-2 md:border-4">
          <h1 className="text-xl md:text-3xl font-bold text-center">Sorry, Event Not Found</h1>
        </div>

        <Events />
      </div>
    );

  const isPast = hasPassed(event.eventStartDateTime);

  const start = new Date(event.eventStartDateTime);
  const end = new Date(event.eventEndDateTime);

  const datePart = start.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });

  const startTime = start.toLocaleTimeString(undefined, { timeStyle: 'short' });
  const endTime = end.toLocaleTimeString(undefined, { timeStyle: 'short' });

  const formattedDateTime =
    event.eventEndDateTime === ''
      ? `${event.week} · Date TBD`
      : `${datePart} · ${startTime} - ${endTime}`;

  return (
    <div className="flex flex-col justify-center mb-20">
      <div className="text-center my-8 md:my-10 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80">
        <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-8">Events</p>
        <NavButton linkto="/events" buttontext="Go Back" />
      </div>
      <div
        className={`:mx-8 mb-8 p-6 md:p-8 xl:p-10 rounded-3xl w-11/12 lg:w-3/4 xl:w-1/2 flex flex-col self-center font-body ${
          isPast
            ? 'bg-cream border-4 border-red text-brown'
            : 'border-4 border-red bg-red text-cream'
        }`}
      >
        <p className="text-base md:text-lg mb-2">
          {isPast && <span className="font-semibold text-red block">Event Passed</span>}
          {formattedDateTime}
        </p>
        <h1 className="text-xl md:text-3xl font-bold mb-2">{event.title}</h1>
        <p className="text-sm md:text-base mb-4">{event.location}</p>
        <p className="text-sm md:text-base text-left leading-relaxed mb-4 whitespace-pre-line ">{event.description}</p>
        {event.instagram && (
          <a 
            href={event.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base text-left leading-relaxed underline hover:text-red visited:text-red transition-all duration-100"
          >
            Link to instagram post
          </a>
        )}
        {event.form && !isPast && (
          <div className="my-8 flex flex-col justify-center items-center">
            <a
              href={event.form}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 mb-4 md:px-5 md:py-2 md:text-base xl:text-lg rounded-full font-bold  transition-all duration-300 border-1 bg-cream opacity-100 text-red hover:opacity-90"
            >
              Go To Form
            </a>
            <iframe
              src={event.form}
              width="100%"
              height="800"
              className="w-full md:w-3/4 rounded-2xl"
            >
              Loading…
            </iframe>
          </div>
        )}
      </div>
      {event.imageSrc && (
        <div className="relative w-11/12 md:w-1/2 self-center overflow-hidden p-2 border-4 border-red rounded-3xl">
          <div className="w-full h-0 pb-[125%] relative rounded-3xl">
            <img
              src={event.imageSrc}
              alt={event.title}
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SpecificEventPage;
