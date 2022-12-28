import React,{useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./XOFund.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavbarLink from "../NavbarLink/NavbarLink";
import xoFund from "./xoHF.png";
import unfwp from "./unWFP.png";
import cn from "./cn.png";

class XOFund extends React.Component {
    render() {
        return(
            <div>
                <NavbarLink/>
            <Row className="topDiv" style={{backgroundImage:`url("https://secure.wfpusa.org/files/wfpusa/TheWeeknd_Blue.jpeg")`,height:"95vh",backgroundRepeat:"no-repeat",width:"100%"}}>

                   
                    
                   
                    <div className="rightSide">
                        <img src={xoFund} style={{width:"20%"}}/>
                        <img src={unfwp} classBame="unfwp"/>
                        <img src={cn} className="cn"/>
                    </div>
            </Row>
            </div>
        )
    }
}
export default XOFund;