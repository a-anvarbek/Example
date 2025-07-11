import { Route, Routes } from "react-router";

import ROUTES from "./routes";

// Imported pages
import Home from "../pages/home/Home";
import LifestyleHome from "../pages/conciergeLifestyle/LifestyleHome";
import HistoryHome from "../pages/imperialHistory/HistoryHome";
import Payment from "../pages/auth/Payment";
import Booking from "../pages/orders/Booking";

const MainRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.HISTORY} element={<HistoryHome />} />
      <Route path={ROUTES.LIFESTYLE} element={<LifestyleHome />} />
      <Route path={ROUTES.PAYMENT} element={<Payment />} />
      <Route path={ROUTES.BOOKING} element={<Booking />} />
    </Routes>
  );
};

export default MainRouter;
