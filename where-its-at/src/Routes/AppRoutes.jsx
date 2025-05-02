import { createBrowserRouter } from "react-router-dom";
import TicketPage from "./Pages/TicketPage";

const router = createBrowserRouter([
  { path: "/ticket/:id", element: <TicketPage /> },
]);

export default router;
