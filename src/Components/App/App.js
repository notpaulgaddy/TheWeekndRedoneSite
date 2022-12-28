import './App.css';
import Home from "../Home/Home";
import Merch from "../Merch/Merch";
import Videos from "../Videos/Videos";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import ProductPage from '../ProductPage/ProductPage';
import XOFund from "../XOFund/XOFund";
import {BrowserRouter,Route,Routes,Switch} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Videos" element={<Videos/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/Signup" element={<Signup/>}/>
          <Route exact path="/Merch" element={<Merch/>}/>
          <Route exact path="/Merch/:productId" element={<ProductPage/>}/>
          <Route exact path="/XOFund" element={<XOFund/>}/>
          <Route path="*" element={<h1>Not found</h1>}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
