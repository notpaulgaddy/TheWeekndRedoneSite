import "./ProductPage.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarList from "../NavbarLink/NavbarLink";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import {useParams} from "react-router-dom";
import {BookmarkHeartFill} from 'react-bootstrap-icons';
import clothingData from"../clothingData.js";

// function ProductPage() {
//     const {productId} = useParams()
//     const thisProduct = clothingData.find(prod => prod.id === productId)
    
//     return (
//         <div>
//             <h1>{thisProduct.title}</h1>
//             <p>Price: ${thisProduct.text}</p>
//         </div>
//     )
// }

// export default ProductPage;
function ProductPage(){
        let [count, setCount] = useState(0);
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const {productId} = useParams()
        const thisProduct = clothingData.find(prod => prod.id === productId)
        function incrementCount() {
          count = count + 1;
          setCount(count);
        }
        function decrementCount() {
          count = count - 1;
          if(count<0){
            count=0
          }
          setCount(count);
        }
        return(
            <div>
                <NavbarList/>
                <div>
                    <div class="row">
                        <div class="col">
                            <div class="vstack gap-5" className="productPics" style={{width:"50px",marginTop:"50px"}}>
                                <div class="bg-light border"><img style={{width:"50px",height:"50px"}} src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/058/764/760/original/804917_01.jpg.jpeg?width=950"/></div>
                                <div class="bg-light border"><img style={{width:"50px",height:"50px"}} src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/058/764/760/original/804917_01.jpg.jpeg?width=950"/></div>
                                <div class="bg-light border"><img style={{width:"50px",height:"50px"}} src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/058/764/760/original/804917_01.jpg.jpeg?width=950"/></div>
                            </div> 
                        </div>
                        <div class="col">
                            <div style={{width:"200px",height:"200px",marginLeft:"-90%"}}>
                                <img style={{width:"400px",height:"250px"}} src={thisProduct.image}/>
                            </div>
                        </div>
                        <div class="col">
                            <div class="vstack gap" style={{maxWidth:"150%",marginTop:"15px",marginLeft:"-100%"}}>
                                <h4 style={{fontSize:"10px"}}>Product Code: <strong>{thisProduct.id}</strong></h4>
                                <h4 style={{marginTop:"10px",fontWeight: "bold"}}>{thisProduct.title}</h4>
                                <div class="row">
                                    <h4 style={{fontSize:"10px",marginTop:"10px"}}>Availability: <strong>{thisProduct.status}</strong></h4>
                                    <h4 style={{fontSize:"10px",marginTop:"10px"}}>Price</h4>
                                    <h4 style={{fontSize:"20px",marginTop:"5px"}}>{thisProduct.text} <s style={{color:"#909090"}}>$55.00</s></h4>
                                </div>
                                <hr/>
                                <div class="row">{/* <div class="btn-group" role="group" width="100px">
                                        <Button style={{width:"40px",height:"40px",textAlign:"center"}} onClick={incrementCount}>+</Button>
                                        <h1>{count}</h1>
                                        <Button style={{width:"40px",height:"40px",textAlign:"center"}} onClick={decrementCount}>-</Button>
                                    </div> */}
                                    <div class="col">
                                        <h4 style={{fontSize:"15px",marginTop:"0px",color:"#909090"}}>* Quantity</h4>
                                        <div class="btn-group" role="group" style={{marginTop:"10px"}}>
                                            <button type="button" class="btn btn-secondary" style={{maxWidth:"40px"}} onClick={incrementCount}>+</button>
                                            <button class="btn btn-secondary" style={{maxWidth:"40px"}}>{count}</button>
                                            <button type="button" class="btn btn-secondary" style={{maxWidth:"40px"}} onClick={decrementCount}>-</button>
                                        </div>
                                    </div>
                                    <div class="col" style={{marginRight:"20%"}}>
                                        <h4 style={{fontSize:"15px",marginTop:"0px",color:"#909090"}}>* Size</h4>
                                        <div class="btn-group" role="group" style={{marginTop:"10px"}}>
                                            <Button type="button" class="btn btn-secondary" style={{maxWidth:"40px"}}>XS</Button>
                                            <Button type="button" class="btn btn-secondary" style={{maxWidth:"40px"}}>S</Button>
                                            <Button type="button" class="btn btn-secondary" style={{maxWidth:"40px"}}>M</Button>
                                            <Button type="button" class="btn btn-secondary" style={{maxWidth:"40px"}}>L</Button>
                                        </div>
                                    </div>
                                    
                                    <div class="col" style={{marginLeft:"-20%",marginTop:"",width:"300px"}}>
                                        <h4 style={{fontSize:"15px",marginTop:"0px",color:"#909090"}} onClick={handleShow}>View Size Guide</h4>
                                        <Modal show={show} onHide={handleClose} style={{width:"60vh"}}>
                                            <Modal.Header closeButton>
                                            <Modal.Title>Size Guide</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Size Chart 
                                                <Button style={{marginLeft:"57%"}}>IN</Button>
                                                <Button style={{marginLeft:"20px"}}>CM</Button>
                                            </Modal.Body>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                    <th>Size</th>
                                                    <th>XS</th>
                                                    <th>S</th>
                                                    <th>M</th>
                                                    <th>L</th>
                                                    <th>XL</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <td>Neck</td>
                                                    <td>13 - 13 ½</td>
                                                    <td>14 - 14 ½</td>
                                                    <td>15 - 15 ½</td>
                                                    <td>16 - 16 ½</td>
                                                    <td>17 - 17 ½</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Arm Length</td>
                                                    <td>31 ½ - 32</td>
                                                    <td>32 ½ - 33</td>
                                                    <td>33 ½ - 34</td>
                                                    <td>34 ½ - 35</td>
                                                    <td>35 ½ - 36</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Chest</td>
                                                    <td>36 - 37</td>
                                                    <td>38 - 39</td>
                                                    <td>40 - 42</td>
                                                    <td>44 - 46</td>
                                                    <td>48 - 50</td>
                                                    </tr>
                                                </tbody>
                                                </Table>
                                            <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                </div>
                                <hr/>
                                <div class="row">
                                    <Button style={{width:"30%",marginLeft:"2%"}} variant="success" onClick={handleClose}>
                                        ADD TO CART
                                    </Button>
                                    <Button style={{width:"40px",marginLeft:"3.8%"}}>
                                        <BookmarkHeartFill></BookmarkHeartFill>
                                    </Button>
                                </div>
                            </div> 
                        </div>
                    </div>
                    </div>
            </div>
        )
}
export default ProductPage;