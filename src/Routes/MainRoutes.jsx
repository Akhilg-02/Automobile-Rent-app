import { Route, Routes } from "react-router-dom";
import CardContainer from "../components/carCards/CardContainer";
import MergeComponent from "../components/Dashbord/MergeComponent";
import CardDetails from "../components/carCards/CardDetails";


export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MergeComponent/>} />
        <Route path="/cars" element={<CardContainer />} />
        <Route path="/detail/:index" element={<CardDetails/>} />
      </Routes>
    </>
  );
};
