import { Route, Routes } from "react-router-dom";
import Header from "../components/Dashbord/Header";
import CardContainer from "../components/carCards/CardContainer";
import DashboardCardContainer from "../components/carCards/DashboardCardContainer";
import MergeComponent from "../components/Dashbord/MergeComponent";


export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MergeComponent/>} />
        <Route path="/cars" element={<CardContainer />} />
        {/* <Route path="#services" element={<DashboardCardContainer/>} /> */}
      </Routes>
    </>
  );
};
