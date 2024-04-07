import "./App.css";
import NavigationBar from "./components/Dashbord/NavigationBar";
import Footer from "./components/Dashbord/Footer";
import { MainRoutes } from "./Routes/MainRoutes";
import SampleNav from "./components/Dashbord/sampleNav";

function App() {
  return (
    <div className="App">
      {/* <NavigationBar /> */}
      <SampleNav/>
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
