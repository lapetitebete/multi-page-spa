// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import EventForm, {
  action as ManipulateEventAction,
} from "./components/EventForm";
import EditEventPage from "./routes/EditEvent";
import ErrorPage from "./routes/Error";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./routes/EventDetail";
import EventsPage, { loader as eventsLoader } from "./routes/Events";
import EventsLayout from "./routes/EventsLayout";
import HomePage from "./routes/Home";
import NewEventPage from "./routes/NewEvent";
import NewsletterPage, {
  action as newsletterAction,
} from "./routes/Newsletter";
import RootLayout from "./routes/RootLayout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { index: true, element: <HomePage /> },
//       { path: "/events", element: <EventsPage /> },
//       { path: "/events/new", element: <NewEventPage /> },
//       { path: "/events/:eventId", element: <EventDetailPage /> },
//       { path: "/events/:eventId/edit", element: <EditEventPage /> },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/events",
        element: <EventsLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: "/events/:eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "/events/:eventId/edit",
                element: <EditEventPage />,
                action: ManipulateEventAction,
              },
            ],
          },
          {
            path: "/events/new",
            element: <NewEventPage />,
            action: ManipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div></div>
    </RouterProvider>
  );
}

export default App;
