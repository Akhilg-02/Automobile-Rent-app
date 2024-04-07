import "./App.css";
import Footer from "./components/Dashbord/Footer";
import { MainRoutes } from "./Routes/MainRoutes";
import NavigationBar from "./components/Dashbord/NavigationBar";

function App() {
  return (
    <div className="App">
      {/* <NavigationBar /> */}
      <NavigationBar/>
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
