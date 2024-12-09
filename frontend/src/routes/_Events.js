import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "e1", title: "first event" },
  { id: "e2", title: "second event" },
  { id: "e3", title: "third event" },
];

function EventsPage() {
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Events Page</h1>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
