import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import tourPic from "./weeknd-header-v2.jpeg";
import NavbarLink from "../NavbarLink/NavbarLink";
import { Gallery } from "react-grid-gallery";
import picOne from "./pic1.jpg";
import picTwo from "./pic2.jpeg";
const images = [
    {
       src: picOne,
       id:1
    },{
       src: picTwo,
       id:2
    },{
       src: "https://www.theweeknd.com/files/2017/08/photo_201708_16_29.jpg",
       id:3
    },{
      src: "https://www.theweeknd.com/files/2017/06/photo_201706_23_Untitled-25.jpg",
      id:4
   },{
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_XO-5442.JPG",
    id:5
  },{
    src: "https://www.theweeknd.com/files/2018/01/photo_201801_29_web1.jpg",
    id:6
  },{
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_523541-R1-06-31_.jpg",
    id:7
  },{
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_523874-R1-03-34.jpg",
    id:8
  },{
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_523874-R1-00-37.jpg",
    id:9
  },{
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_18720011.jpg",
    id:10
  },{
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_18710016.jpg",
    id:11
  },{
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_STARBOY-2017-02.jpg",
    id:12
  },{
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_19_xo-2.JPG",
    id:13
  },{
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_523874-R1-03-34.jpg",
    id:14
  },{
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_523874-R1-00-37.jpg",
    id:15
  },{
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_18720011.jpg",
    id:16
  },{
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_18710016.jpg",
    id:17
  },{
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_STARBOY-2017-02.jpg",
    id:18
  },{
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_19_xo-2.JPG",
    id:19
  }
  ];

class Home extends React.Component{
    // function galleryTimer(){
    //     for (const [key, value] of Object.entries(images)) {
    //       console.log(key, value);
    //     }
    //   }
    render(){
        return(
        
            <div>
        <NavbarLink/>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <img src={"https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png"} alt="Spotify" height="148" width="148"/>
            </div>
            <div class="col-sm">
            <div class="col text-warning"><h1>54,398,701</h1></div>
              <div class="col"><h3>Followers</h3></div>
            </div>
            <div class="col-sm">
            <div class="col text-warning"><h1>85,512,263</h1></div>
              <div class="col"><h3>Monthly Listeners</h3></div>
            </div>
            <div class="col-sm">
            <div><img src={"https://guestoria.com/wp-content/uploads/2018/06/instagram-logo-png-transparent-background-1024x1024.png"}alt="Instagram" height="55.91"/></div>
              <div><img src={"https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png"} alt="Twitter" height="55.91"/></div>
            </div>
          </div>

          <div>
            <img src={tourPic} alt="Tour" width="90%"/>
            <h1 className="tourText">AFTER HOURS TIL DAWN TOUR</h1>
          </div>
          <section class="featured-shop">
      <div class="shop-mb"> 
        <div class="view-header">
          <a href="https://shop.theweeknd.com/?utm_campaign=products&amp;utm_medium=referral&amp;utm_source=theweeknd.com" target="_blank">
            <h2>Visit the official<br/>online shop</h2>
          </a>
        </div>
        <Gallery images={images} />
      </div>
    </section>
      </div>
      </div>
        );
    }
}

export default Home;