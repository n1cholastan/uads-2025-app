import EventCard from '../components/EventCard';
import { useState, useEffect } from 'react';
import { EventProps } from '../utils/FrontendTypes';
import Loading from '../components/Loading';
function Events() {
  const [events, setEvents] = useState<EventProps[]>([]);

  const [loading, setLoading] = useState(true);

  const [visibleEvents, setVisibleEvents] = useState(5);
  const eventsPerLoad = 5;
  const loadMoreEvents = () => {
    setVisibleEvents((prev) => prev + eventsPerLoad);
  };

  const displayedEvents = events.slice(0, visibleEvents);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/events`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: EventProps[]) => {
        console.log('Events loaded:', data);
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="h-screen">
        <div className="text-center my-8 md:my-10 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80">
          <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-8"> Our Events</p>
        </div>
        <Loading />
      </div>
    );

  return (
    <div className="mb-20">
      <div className="text-center my-8 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80">
        <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-8">Our Events</p>
      </div>

      <div className="flex flex-col items-center gap-4 md:gap-8">
        {displayedEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>

      {visibleEvents < events.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={loadMoreEvents}
            className="cursor-pointer px-5 sm:px-10 md:px-5 lg:px-10 py-3 rounded-full font-body font-bold sm:text-xl md:text-lg lg:text-xl xl:text-2xl w-fit transition-colors duration-300 ease-in-out bg-red text-cream hover:bg-brown"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Events;
