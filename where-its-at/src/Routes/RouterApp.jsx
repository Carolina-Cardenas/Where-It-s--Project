import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import TicketPage from "../Pages/TicketPage";
import Layout from "../Components/UI/Layout";
import OrderPage from "../Pages/OrderPage";
import EventList from "../Components/Features/EventList";
import EventPage from "../Pages/EventPage";
import EventListPage from "../Pages/EventListPage";
import SearchResults from "../components/UI/SearchResult";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "events", element: <EventListPage /> },
      { path: "event/:id", element: <EventPage /> },
      { path: "ticket", element: <TicketPage /> },
      { path: "order", element: <OrderPage /> },
      { path: "/search/:query", element: <SearchResults /> },
    ],
  },
]);

function RouterApp() {
  return <RouterProvider router={router} />;
}

export default RouterApp;
