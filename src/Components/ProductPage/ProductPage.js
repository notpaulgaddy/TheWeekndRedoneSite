import React from "react";
import "./ProductPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarList from "../NavbarLink/NavbarLink";
class ProductPage extends React.Component{
    render(){
        return(
            <div>
                <NavbarList/>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="vstack gap-5" style={{width:"50px",marginTop:"50px"}}>
                                <div class="bg-light border"><img style={{width:"50px",height:"50px"}} src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/058/764/760/original/804917_01.jpg.jpeg?width=950"/></div>
                                <div class="bg-light border"><img style={{width:"50px",height:"50px"}} src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/058/764/760/original/804917_01.jpg.jpeg?width=950"/></div>
                                <div class="bg-light border"><img style={{width:"50px",height:"50px"}} src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/058/764/760/original/804917_01.jpg.jpeg?width=950"/></div>
                            </div> 
                        </div>
                        <div class="col">
                            <div class="bg-light border" style={{width:"200px",height:"200px",marginLeft:"-90%"}}>
                                <img style={{width:"300px",height:"300px"}} src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/058/764/760/original/804917_01.jpg.jpeg?width=950"/>
                            </div>
                        </div>
                        <div class="col">
                            <div class="vstack gap-1" style={{width:"100%",marginTop:"15px",marginLeft:"-100%"}}>
                                <h4>Product Code: JBFDS51</h4>
                                <h4>Travis Scott x Fragment Short-Sleeve</h4>
                                <div class="row">
                                    <h4>Availability: In Stock</h4>
                                    <h4>Price $40.00 <s>$50.00</s></h4>
                                </div>
                                <hr/>
                            </div> 
                            
                        </div>
                    </div>
                    </div>
                {/* <div className="mainDiv">
                    <div class="vstack gap-5" style={{width:"50px",marginTop:"50px"}}>
                        <div class="bg-light border"><img style={{width:"50px",height:"50px"}} src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/058/764/760/original/804917_01.jpg.jpeg?width=950"/></div>
                        <div class="bg-light border"><img style={{width:"50px",height:"50px"}} src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/058/764/760/original/804917_01.jpg.jpeg?width=950"/></div>
                        <div class="bg-light border"><img style={{width:"50px",height:"50px"}} src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/058/764/760/original/804917_01.jpg.jpeg?width=950"/></div>
                    </div>
                    <div class="bg-light border"><img style={{width:"200px",height:"200px"}} src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/058/764/760/original/804917_01.jpg.jpeg?width=950"/></div>
                </div> */}
            </div>
        )
    }
}

export default ProductPage;