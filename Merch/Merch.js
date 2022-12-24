import React from "react";
import "./Merch.css";
import MerchComp from "../MerchComp/MerchComp";
import NavbarLink from "../NavbarLink/NavbarLink";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
class Merch extends React.Component{
    render(){
        return(
            <>
            <NavbarLink/>
            {/* <DropdownButton id="dropdown-basic-button" title="Sort By:" >
                <Dropdown.Item href="#/action-1">Price: Lowest - Highest</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Price: Highest - Lowest</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Sold Out</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Available</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Limited Edition</Dropdown.Item>
            </DropdownButton> */}
                
                <MerchComp/>
            </>
        )
    }
}

export default Merch;