import EventCard from "../components/EventCard";
import { mockEvents } from "../mockEvents";
import { useState } from "react";
function Events() {
    const [visibleEvents, setVisibleEvents] = useState(5);
    const eventsPerLoad = 5;

    const loadMoreEvents = () => {
        setVisibleEvents((prev) => prev + eventsPerLoad);
    };

    const displayedEvents = mockEvents.slice(0, visibleEvents);

    return (
        <div className="mb-10">
            <div className="text-center my-8 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80">
                <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-8">Our Events</p>
            </div>

            <div className="flex flex-col items-center gap-4 md:gap-8">
                {displayedEvents.map((event) => (
                    <EventCard key={event.id} {...event} />
                ))}
            </div>

            {visibleEvents < mockEvents.length && (
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