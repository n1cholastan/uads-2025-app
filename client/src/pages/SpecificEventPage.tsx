import { useParams } from "react-router";
import { mockEvents } from "../mockEvents";
import NavButton from "../components/NavButton";

function hasPassed(eventDateTime: string): boolean {
    return new Date(eventDateTime) < new Date();
  }

function SpecificEventPage() {
  const { eventId } = useParams();
  const event = mockEvents.find((e) => e.id === eventId);

  if (!event) return <p className="text-center p-4">Event not found.</p>;

  const isPast = hasPassed(event.eventStartDateTime);

  const start = new Date(event.eventStartDateTime);
    const end = new Date(event.eventEndDateTime);
  
    const datePart = start.toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });
  
    const startTime = start.toLocaleTimeString(undefined, { timeStyle: 'short' });
    const endTime = end.toLocaleTimeString(undefined, { timeStyle: 'short' });
  
    const formattedDateTime = `${datePart} · ${startTime} - ${endTime}`;

  

    

  return (
    <div className="flex flex-col justify-center">
        <div className="text-center my-8 md:my-10 mx-8 sm:mx-16 md:mx-20 lg:mx-32 xl:mx-80"> 
                <p className="font-title text-red text-4xl md:text-5xl lg:text-6xl mb-8">Events</p>
                <NavButton
          linkto="/events"
          buttontext="Go Back"
        />
            </div>
        <div className={`:mx-8 mb-8 p-6 md:p-8 xl:p-10 rounded-4xl w-11/12 md:9/12 lg:w-3/4 flex flex-col self-center font-body ${
            isPast ? "bg-cream border-4 border-red text-brown" : "border-4 border-red bg-red text-cream"
        }`}>
        <p className="text-base md:text-lg mb-2">{formattedDateTime}</p>
        <h1 className="text-xl md:text-3xl font-bold mb-2">{event.title}</h1>
        <p className="text-sm md:text-base mb-4">{event.location}</p>
        <p className="text-sm md:text-base text-left leading-relaxed">{event.description}</p>
            {event.form && !isPast && (
                <div className="mt-8 flex justify-center">
                    <iframe
                    src={event.form}
                    width="100%"
                    height="800"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="w-full md:w-3/4 rounded-2xl"
                    >
                    Loading…
                    </iframe>
                </div>
            )}
        </div>
        <div className="relative w-1/3 self-center overflow-hidden p-2 border-4 border-red rounded-3xl mb-10">
          <div className="w-full h-0 pb-[125%] relative rounded-3xl">
            <img
              src={event.imageSrc}
              alt={event.title}
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
            />
          </div>
          
        </div>
      </div>
  );
}

export default SpecificEventPage;
