
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/info";
import signup from "./pages/signup";
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       
      <Navbar/> 
      <Hero /> 
      <Info/>
      
    </div>
  );
}

export default App;
