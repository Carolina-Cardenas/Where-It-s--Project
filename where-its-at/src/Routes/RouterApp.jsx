import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import TicketPage from "../Pages/TicketPage";
import Layout from "../Components/UI/Layout";
import EventsPage from "../Pages/EventsPage";
import OrderPage from "../Pages/OrderPage";

function RouterApp() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <LandingPage /> },
        { path: "ticket/:id", element: <TicketPage /> },
        { path: "events", element: <EventsPage /> },
        { path: "order", element: <OrderPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default RouterApp;
