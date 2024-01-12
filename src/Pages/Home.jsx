import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import MapmImg from "./../assets/img/suncity layout full 21-12_page-0001.jpg";
import "./../css/home.css";
import Popup from "./Popup";
import { useState } from "react";
import styled from "styled-components";

const Home = () => {
  const PlotLink = styled.a`
    color: ${({ status }) => {
      switch (status) {
        case 'sold':
          return 'red';
        case 'available':
          return 'green';
        case 'on hold':
          return 'orange';
        default:
          return 'green'; // Set a default color if status doesn't match any case
      }
    }};
  `;
  
  // Usage example
  const MyComponent = ({ status }) => {
    return (
      <PlotLink status={status}>
        Click me
      </PlotLink>
    );
  };

  const [showPopup, setShowPopup] = useState(false);
  const [plotNumber, setPlotNumber] = useState("");

  const handlePlotClick = (plotNumber) => {
    setPlotNumber(plotNumber);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <React.Fragment>
      <div
        style={{ position: "relative", padding: "20px" }}
        className="map-container"
      >
        <img src={MapmImg} style={{ width: "100%" }} alt="img" />
        <div className="plots-container">
          {/* // plot 1 ========> */}
          <div className="plotOne">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(1)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 2 ========> */}
          <div className="plotTwo">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(2)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 3 ========> */}
          <div className="plotThree">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(3)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 4 ========> */}
          <div className="plotFour">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(4)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 5 ========> */}
          <div className="plotFive">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(5)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 6 ========> */}
          <div className="plotSix">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(6)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 7 ========> */}
          <div className="plotSeven">
            <PlotLink className="plotLink" href="#"  onClick={() => handlePlotClick(7)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 8 ========> */}
          <div className="plotEight">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(8)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 9 ========> */}
          <div className="plotNine">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(9)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 10 ========> */}
          <div className="plotTen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(10)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 11 ========> */}
          <div className="plotEleven">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(11)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 12 ========> */}
          <div className="plotTwelve">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(12)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 13 ========> */}
          <div className="plotThirteen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(13)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 14 ========> */}
          <div className="plotFourteen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(14)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 15 ========> */}
          <div className="plotFifteen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(15)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 16 ========> */}
          <div className="plotSixteen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(16)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 17 ========> */}
          <div className="plotSeventeen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(17)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 18 ========> */}
          <div className="plotEighteen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(18)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 19 ========> */}
          <div className="plotNineteen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(19)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 20 ========> */}
          <div className="plotTwenty">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(20)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 21 ========> */}
          <div className="plotTwentyOne">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(21)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 22 ========> */}
          <div className="plotTwentyTwo">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(22)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 23 ========> */}
          <div className="plotTwentyThree">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(23)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 24 ========> */}
          <div className="plotTwentyFour">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(24)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 25 ========> */}
          <div className="plotTwentyFive">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(25)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 26 ========> */}
          <div className="plotTwentySix">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(26)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 27 ========> */}
          <div className="plotTwentySeven">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(27)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 28 ========> */}
          <div className="plotTwentyEight">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(28)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 29 ========> */}
          <div className="plotTwentyNine">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(29)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 30 ========> */}
          <div className="plotThirty">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(30)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 31 ========> */}
          <div className="plotThirtyOne">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(31)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 32 A ========> */}
          <div className="plotThirtyTwoA">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('32/A')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 32 B ========> */}
          <div className="plotThirtyTwoB">
            <PlotLink className="plotLink" href="#"  onClick={() => handlePlotClick('32/B')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 33 A ========> */}
          <div className="plotThirtyThreeA">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('33/A')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 33 B ========> */}
          <div className="plotThirtyThreeB">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('33/B')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 34  ========> */}
          <div className="plotThirtyFoure">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(34)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 35  ========> */}
          <div className="plotThirtyFive">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(35)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 36  ========> */}
          <div className="plotThirtySix">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(36)}>
              <FaLocationDot />
            </PlotLink>
          </div>{" "}
          {/* // plot 37  ========> */}
          <div className="plotThirtySeven">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(37)}>
              <FaLocationDot />
            </PlotLink>
          </div>{" "}
          {/* // plot 38  ========> */}
          <div className="plotThirtyEight">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(38)}>
              <FaLocationDot />
            </PlotLink>
          </div>{" "}
          {/* // plot 39  ========> */}
          <div className="plotThirtyNine">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(39)}>
              <FaLocationDot />
            </PlotLink>
          </div>{" "}
          {/* // plot 40  ========> */}
          <div className="plotFourty">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(40)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 41  ========> */}
          <div className="plotFourtyOne">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(41)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 42  ========> */}
          <div className="plotFourtyTwo">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(42)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 43  ========> */}
          <div className="plotFourtyThree">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(43)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 44  ========> */}
          <div className="plotFourtyFoure">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(44)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 45  ========> */}
          <div className="plotFourtyFive">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(45)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 46  ========> */}
          <div className="plotFourtySix">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(46)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 47  ========> */}
          <div className="plotFourtySeven">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(47)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 48  ========> */}
          <div className="plotFourtyEight">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(48)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 49 A  ========> */}
          <div className="plotFourtyNineA">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('49/A')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 49 B  ========> */}
          <div className="plotFourtyNineB">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('49/B')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 50  ========> */}
          <div className="plotFiftey">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(50)}>
              <FaLocationDot />
            </PlotLink>
          </div>{" "}
          {/* // plot 51  ========> */}
          <div className="plotFifteyOne">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(51)}>
              <FaLocationDot />
            </PlotLink>
          </div>{" "}
          {/* // plot 52  ========> */}
          <div className="plotFifteyTwo">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(52)}>
              <FaLocationDot />
            </PlotLink>
          </div>{" "}
          {/* // plot 53  ========> */}
          <div className="plotFifteyThree">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(53)}>
              <FaLocationDot />
            </PlotLink>
          </div>{" "}
          {/* // plot 54  ========> */}
          <div className="plotFifteyFoure">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(54)}>
              <FaLocationDot />
            </PlotLink>
          </div>{" "}
          {/* // plot 55  ========> */}
          <div className="plotFifteyFife">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(55)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 56  ========> */}
          <div className="plotFifteySix">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(56)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 57 a  ========> */}
          <div className="plotFifteySevenA">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('57/A')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 57 B  ========> */}
          <div className="plotFifteySevenB">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('57/B')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 58  ========> */}
          <div className="plotFifteyEight">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(58)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 59 A  ========> */}
          <div className="plotFifteyNineA">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('59/A')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 59 B  ========> */}
          <div className="plotFifteyNineB">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('59/B')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 60  ========> */}
          <div className="plotSixty">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(60)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 61   ========> */}
          <div className="plotSixtyOne">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(61)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 62  ========> */}
          <div className="plotSixtyTwo">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(62)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 63  ========> */}
          <div className="plotSixtyThree">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(63)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 64  ========> */}
          <div className="plotSixtyFour">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(64)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 65  ========> */}
          <div className="plotSixtyFive">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(65)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 66  ========> */}
          <div className="plotSixtySix">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(66)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 67  ========> */}
          <div className="plotSixtySeven">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(67)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 68  ========> */}
          <div className="plotSixtyEight">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(68)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 69  ========> */}
          <div className="plotSixtyNine">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(69)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 70  ========> */}
          <div className="plotSeventy">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(70)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 71  ========> */}
          <div className="plotSeventyOne">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(71)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 72  ========> */}
          <div className="plotSeventyTwo">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(72)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 73  ========> */}
          <div className="plotSeventyThree">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(73)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 74  ========> */}
          <div className="plotSeventyFour">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(74)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 75  ========> */}
          <div className="plotSeventyFive">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(75)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 76  ========> */}
          <div className="plotSeventySix">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(76)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 77  ========> */}
          <div className="plotSeventySeven">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(77)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 78  ========> */}
          <div className="plotSeventyEight">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(78)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 79 A  ========> */}
          <div className="plotSeventyNineA">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('79/A')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 79 B  ========> */}
          <div className="plotSeventyNineB">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('79/B')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 79 C  ========> */}
          <div className="plotSeventyNineC">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('79/C')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 79 D  ========> */}
          <div className="plotSeventyNineD">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('79/D')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 80   ========> */}
          <div className="plotEighty">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(80)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 81   ========> */}
          <div className="plotEightyOne">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(81)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 82   ========> */}
          <div className="plotEightyTwo">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(82)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 83   ========> */}
          <div className="plotEightyThree">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(83)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 84   ========> */}
          <div className="plotEightyFour">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(84)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 85 A   ========> */}
          <div className="plotEightyFiveA">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('85/A')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 85 B   ========> */}
          <div className="plotEightyFiveB">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('85/B')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 85 C   ========> */}
          <div className="plotEightyFiveC">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('85/C')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 85 D   ========> */}
          <div className="plotEightyFiveD">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('85/D')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 85 E   ========> */}
          <div className="plotEightyFiveE">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('85/E')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 85 F   ========> */}
          <div className="plotEightyFiveF">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('85/F')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 86    ========> */}
          <div className="plotEightySix">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(86)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 87   ========> */}
          <div className="plotEightySeven">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(87)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 88   ========> */}
          <div className="plotEightyEight">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(88)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 89   ========> */}
          <div className="plotEightyNine">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(89)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 90   ========> */}
          <div className="plotNinety">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(90)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 91  ========> */}
          <div className="plotNinetyOne">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(91)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 92   ========> */}
          <div className="plotNinetyTwo">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(92)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 93 A   ========> */}
          <div className="plotNinetyThreeA">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('93/A')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 93 B   ========> */}
          <div className="plotNinetyThreeB">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('93/B')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 93 C   ========> */}
          <div className="plotNinetyThreeC">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('93/C')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 94   ========> */}
          <div className="plotNinetyFour">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(94)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 95   ========> */}
          <div className="plotNinetyFive">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(95)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 96   ========> */}
          <div className="plotNinetySix">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(96)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 97   ========> */}
          <div className="plotNinetySeven">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(97)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 98   ========> */}
          <div className="plotNinetyEight">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(98)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 99   ========> */}
          <div className="plotNinetyNine">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(99)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 100   ========> */}
          <div className="plotOneHundred">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(100)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 101   ========> */}
          <div className="plotOneHundredOne">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(101)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 102   ========> */}
          <div className="plotOneHundredTwo">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(102)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 103    ========> */}
          <div className="plotOneHundredThree">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(103)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 104   ========> */}
          <div className="plotOneHundredFour">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(104)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 105   ========> */}
          <div className="plotOneHundredFive">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(105)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 106 A   ========> */}
          <div className="plotOneHundredSixA">
            <PlotLink className="plotLink" href="#"  onClick={() => handlePlotClick('106/A')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 106 B   ========> */}
          <div className="plotOneHundredSixB">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('106/B')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 107 A   ========> */}
          <div className="plotOneHundredSevenA">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('107/A')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 107 B   ========> */}
          <div className="plotOneHundredSevenB">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('107/B')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 108    ========> */}
          <div className="plotOneHundredEight">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(108)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 109   ========> */}
          <div className="plotOneHundredNine">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(109)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 110   ========> */}
          <div className="plotOneHundredTen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(110)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 111   ========> */}
          <div className="plotOneHundredEleven">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(111)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 112   ========> */}
          <div className="plotOneHundredTwelve">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(112)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 113   ========> */}
          {/* <div className="plotOneHundredThirteen">
            <PlotLink className="plotLink" href="#">
              <FaLocationDot /> 
            </PlotLink>
          </div> */}
          {/* // plot 114   ========> */}
          <div className="plotOneHundredFourteen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(114)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 115   ========> */}
          <div className="plotOneHundredFiveTeen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(115)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 116   ========> */}
          <div className="plotOneHundredSixteen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(116)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/1   ========> */}
          <div className="plotOneHundredSevenTeenOne">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/1')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/2   ========> */}
          <div className="plotOneHundredSevenTeenTwo">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/2')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/3   ========> */}
          <div className="plotOneHundredSevenTeenThree">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/3')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/4   ========> */}
          <div className="plotOneHundredSevenTeenFour">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/4')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/5   ========> */}
          <div className="plotOneHundredSevenTeenFive">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/5')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/6   ========> */}
          <div className="plotOneHundredSevenTeenSix">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/6')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/7   ========> */}
          <div className="plotOneHundredSevenTeenSeven">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/7')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/8   ========> */}
          <div className="plotOneHundredSevenTeenEight">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/8')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/9   ========> */}
          <div className="plotOneHundredSevenTeenNine">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/9')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/10   ========> */}
          <div className="plotOneHundredSevenTeenTen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/10')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/11   ========> */}
          <div className="plotOneHundredSevenTeenEleven">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/11')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/12   ========> */}
          <div className="plotOneHundredSevenTeenTwelve">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/12')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/13   ========> */}
          <div className="plotOneHundredSevenTeenTharteen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/13')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/14   ========> */}
          <div className="plotOneHundredSevenTeenFourteen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/14')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/15   ========> */}
          <div className="plotOneHundredSevenTeenFiveteen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/15')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/16   ========> */}
          <div className="plotOneHundredSevenTeenSixteen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/16')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/17   ========> */}
          <div className="plotOneHundredSevenTeenSeventeen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/17')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/18   ========> */}
          <div className="plotOneHundredSevenTeenEightteen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/18')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/19   ========> */}
          <div className="plotOneHundredSevenTeenNineteen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/19')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/20   ========> */}
          <div className="plotOneHundredSevenTeenTwenty">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/20')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/21   ========> */}
          <div className="plotOneHundredSevenTeenTwentyOne">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/21')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/22   ========> */}
          <div className="plotOneHundredSevenTeenTwentyTwo">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/22')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/23   ========> */}
          <div className="plotOneHundredSevenTeenTwentyThree">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/23')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/24   ========> */}
          <div className="plotOneHundredSevenTeenTwentyFour">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/24')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 117/25   ========> */}
          <div className="plotOneHundredSevenTeenTwentyFive">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick('117/25')}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 118   ========> */}
          <div className="plotOneHundredEightteen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(118)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 119   ========> */}
          <div className="plotOneHundredNineteen">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(119)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 120   ========> */}
          <div className="plotOneHundredTwenty">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(120)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 121   ========> */}
          <div className="plotOneHundredTwentyOne">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(121)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 122   ========> */}
          <div className="plotOneHundredTwentyTwo">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(122)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 123   ========> */}
          <div className="plotOneHundredTwentyThree">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(123)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 124   ========> */}
          <div className="plotOneHundredTwentyFour">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(124)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 125   ========> */}
          <div className="plotOneHundredTwentyFive">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(125)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 126   ========> */}
          <div className="plotOneHundredTwentySix">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(126)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 127   ========> */}
          <div className="plotOneHundredTwentySeven">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(127)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 128   ========> */}
          <div className="plotOneHundredTwentyEight">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(128)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 129   ========> */}
          <div className="plotOneHundredTwentyNine">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(129)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 130   ========> */}
          <div className="plotOneHundredThirty">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(130)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 131   ========> */}
          <div className="plotOneHundredThirtyOne">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(131)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 132   ========> */}
          <div className="plotOneHundredThirtyTwo">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(132)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 133   ========> */}
          <div className="plotOneHundredThirtyThree">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(133)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 134   ========> */}
          <div className="plotOneHundredThirtyFour">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(134)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 135   ========> */}
          <div className="plotOneHundredThirtyFive">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(135)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 136   ========> */}
          <div className="plotOneHundredThirtySix">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(136)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 137   ========> */}
          <div className="plotOneHundredThirtySeven">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(137)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 138   ========> */}
          <div className="plotOneHundredThirtyEight">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(138)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 139   ========> */}
          <div className="plotOneHundredThirtyNine">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(139)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 140   ========> */}
          <div className="plotOneHundredForty">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(140)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 141   ========> */}
          <div className="plotOneHundredFortyOne">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(141)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 142   ========> */}
          <div className="plotOneHundredFortyTwo">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(142)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 143   ========> */}
          <div className="plotOneHundredFortyThree">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(143)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 144   ========> */}
          <div className="plotOneHundredFortyFour">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(144)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 145   ========> */}
          <div className="plotOneHundredFortyFive">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(145)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 146   ========> */}
          <div className="plotOneHundredFortySix">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(146)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 147   ========> */}
          <div className="plotOneHundredFortySeven">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(147)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 148   ========> */}
          <div className="plotOneHundredFortyEight">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(148)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 149   ========> */}
          <div className="plotOneHundredFortyNine">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(149)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 150   ========> */}
          <div className="plotOneHundredFifty">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(150)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 151   ========> */}
          <div className="plotOneHundredFiftyOne">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(151)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 152   ========> */}
          <div className="plotOneHundredFiftyTwo">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(152)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 153   ========> */}
          <div className="plotOneHundredFiftyThree">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(153)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 154   ========> */}
          <div className="plotOneHundredFiftyFour">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(154)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 155   ========> */}
          <div className="plotOneHundredFiftyFive">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(155)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 156   ========> */}
          <div className="plotOneHundredFiftySix">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(156)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 157   ========> */}
          <div className="plotOneHundredFiftySeven">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(157)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 158   ========> */}
          <div className="plotOneHundredFiftyEight">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(158)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 159   ========> */}
          <div className="plotOneHundredFiftyNine">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(159)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 160   ========> */}
          <div className="plotOneHundredSixty">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(160)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 161   ========> */}
          <div className="plotOneHundredSixtyOne">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(161)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 162   ========> */}
          <div className="plotOneHundredSixtyTwo">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(162)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* // plot 163   ========> */}
          <div className="plotOneHundredSixtyThree">
            <PlotLink className="plotLink" href="#" onClick={() => handlePlotClick(163)}>
              <FaLocationDot />
            </PlotLink>
          </div>
          {/* Add similar divs for other plots */}
        </div>
      </div>
      <Popup
        visible={showPopup}
        closePopup={closePopup}
        plotNumber={plotNumber}
      />
    </React.Fragment>
  );
};

export default Home;
