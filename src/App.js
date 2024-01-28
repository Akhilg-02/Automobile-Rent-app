import "./App.css";
import CardContainer from "./components/carCards/CardContainer";
import MiddleCard from "./components/Dashbord/MiddleCard";
import Header from "./components/Dashbord/Header";
import NavigationBar from "./components/Dashbord/NavigationBar";
import Footer from "./components/Dashbord/Footer";
import PickupTab from "./components/Dashbord/PickupTab";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <PickupTab/>
      <CardContainer />
      <MiddleCard/>
      <Footer/>
    </div>
  );
}

export default App;
