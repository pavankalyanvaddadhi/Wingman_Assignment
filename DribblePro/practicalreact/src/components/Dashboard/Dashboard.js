import react from "react";
import { useNavigate } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigate from "../Navigate/Navigate";
import Navbar from "../Navbar/Navbar";
import Graph from "../Graph/Graph";
import SideTable from "../SideTable/SideTable";
import Table from "../Table/Table";

const Dashboard = () => {








    return (
        <>
        
            <div className="row">
                
                <div class="col-12">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <Navbar />

                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Graph />
                        </div>
                        <div className="col-6">
                            <SideTable/>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <Table/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard;


