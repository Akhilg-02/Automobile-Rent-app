import "./App.css";
import DashboardCardContainer from "./components/carCards/DashboardCardContainer";
import MiddleCard from "./components/Dashbord/MiddleCard";
import Header from "./components/Dashbord/Header";
import NavigationBar from "./components/Dashbord/NavigationBar";
import Footer from "./components/Dashbord/Footer";
import PickupTab from "./components/Dashbord/PickupTab";
import { MainRoutes } from "./Routes/MainRoutes";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <MainRoutes/>
      <Footer/>
      {/* <Header/> 
      <PickupTab/>
       <DashboardCardContainer />
      <MiddleCard/>
      <Footer/>*/}
    </div>
  );
}

export default App;
