import './App.css';
import Home from "../Home/Home";
import Merch from "../Merch/Merch";
import Videos from "../Videos/Videos";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import ProductPage from '../ProductPage/ProductPage';
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Merch" element={<Merch/>}/>
          <Route path="/Videos" element={<Videos/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/ProductPage" element={<ProductPage/>}/>
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
