import { Route, Routes } from "react-router-dom";
import Header from "../components/Dashbord/Header";
import CardContainer from "../components/carCards/CardContainer";
import DashboardCardContainer from "../components/carCards/DashboardCardContainer";


export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/cars" element={<CardContainer />} />
        <Route path="#services" element={<DashboardCardContainer/>} />
        {/* <Route path="/store/:id" element={<SingleData />} />
        <Route path="/store/:id/cart" element={<Cart />} /> */}
      </Routes>
    </>
  );
};
