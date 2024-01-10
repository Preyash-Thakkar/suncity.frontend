import React, { useEffect } from "react";
import { Col } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
// import { listCompanynDetails } from "../../functions/SuperAdmin/CompanyDetails";
import suncity_image4 from "../assets/images/suncity_image.jpg";

// Import Images
// import logoLight from "../../assets/images/logo-light.png";

const AuthSlider = () => {
  //   const image = "uploads/companydetails/Marwiz_logo.jpeg";

  //   const [logo, setLogo] = React.useState(image);

  //fetch logo from company details

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       listCompanynDetails()
  //         .then((res) => {
  //           console.log("initial image", logo);
  //           console.log("Logo Response", res[0].Logo);
  //           setLogo(res[0].Logo);
  //         })
  //         .catch((err) => console.error(err));
  //     }, 5000);

  //     return () => clearTimeout(timer);
  //   }, []);
  // React.useEffect(() => {
  //   listCompanynDetails().then((res) => {
  //     console.log("Logo Response", res[0].Logo);
  //     setLogo(res[0].Logo);
  //   });
  // });

  const imageStyle = {
    width: '100%',       // The image will occupy the full width of its parent
    height: '100%',      // The image will occupy the full height available
    objectFit: 'cover'
    // padding: '20px'       // Adds padding inside the container div to not touch the edges
    
  };

  return (
    <React.Fragment>
      <div className="auth-slider" style={{ height: '100%', width: '100%' }}>
        <img src={suncity_image4} alt="Suncity Image"  style={imageStyle} />
      </div>
    </React.Fragment>
  );
};

export default AuthSlider;
