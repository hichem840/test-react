import Navbar from "./Navbar";
import Home from "./Home"
function App() {
  const title ="hi mes fréres"
  const likes =50
  const link="https://fr.reactjs.org/docs/create-a-new-react-app.html";
  return (
    <div className="App">
  
   <Navbar /> 
    <Home />
    </div>
    
  );
}

export default App;
