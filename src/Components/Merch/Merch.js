import React from "react";
import MerchComp from "../MerchComp/MerchComp";
import NavbarLink from "../NavbarLink/NavbarLink";

class Merch extends React.Component{
    render(){
        return(
            <>
                <NavbarLink/>
                <MerchComp/>
            </>
        )
    }
}

export default Merch;