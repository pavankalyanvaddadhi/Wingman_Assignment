import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home"
import Customer from "./Customer/Customer"
import Products from "./Products/Products"
import Sales from "./Sales/Sales"
import Reports from "./Reports/Reports"
import Navbar from "./Navbar/Navbar";
import Navigate from "./Navigate/Navigate";



const App = () => {


  return (
    <>

      {

        <BrowserRouter>
          <div className="row">
            <div className="col-2">
              <Navigate />
            </div>
            <div className="col-10">
              <Routes>

                <Route path="/Home" element={<Home />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/Customer" element={<Customer />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Sales" element={<Sales />} />
                <Route path="/Reports" element={<Reports />} />



              </Routes>

            </div>
          </div>


        </BrowserRouter>











      }
    </>



  )
}
export default App;
{/* <Dashboard/> */ }