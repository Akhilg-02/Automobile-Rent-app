import './App.css';
import Cards from './components/Dashbord/Cards';
import DashImg from './components/Dashbord/DashImg';
import NavigationBar from './components/Dashbord/NavigationBar';


function App() {
  return (
    <div className="App">
       <NavigationBar/>
       <DashImg/>
       <Cards/>

    </div>
  );
}

export default App;
