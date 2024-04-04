import "./App.css";
import NavigationBar from "./components/Dashbord/NavigationBar";
import Footer from "./components/Dashbord/Footer";
import { MainRoutes } from "./Routes/MainRoutes";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
