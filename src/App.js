import "./App.css";
import CardContainer from "./components/carCards/CardContainer";
import Cards from "./components/carCards/CardData";
import Experiance from "./components/Dashbord/Experiance";
import DashImg from "./components/Dashbord/Header";
import NavigationBar from "./components/Dashbord/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <DashImg />
      <CardContainer />
      <Experiance/>
    </div>
  );
}

export default App;
