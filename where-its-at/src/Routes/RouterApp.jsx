import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import TicketPage from "../Pages/TicketPage";
import Layout from "../Components/UI/Layout";
import { useNavigate } from "react-router-dom";
import OrderPage from "../Pages/OrderPage";
import EventList from "../Components/Features/EventList";
import EventPage from "../Pages/EventPage";

function RouterApp() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <LandingPage /> },
        { path: "ticket/:id", element: <TicketPage /> },
        { path: "events", element: <EventList /> },
        { path: "event/:id", element: <EventPage /> },
        { path: "order", element: <OrderPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default RouterApp;
