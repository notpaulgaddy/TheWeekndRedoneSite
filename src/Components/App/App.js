import './App.css';
import Home from "../Home/Home";
import Merch from "../Merch/Merch";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Merch" element={<Merch/>}/>
        </Routes>
      </BrowserRouter>
    
  //   <>
  //   <Routes>
  //     
  //   </Routes>
  //   </>
  );
}

export default App;
