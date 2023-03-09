import React, { useState } from 'react';
import './Main.scss';
import Mug1 from '../images/Mug1.png';
import Mug2 from '../images/Mug2.png';
import Tshirt1 from '../images/Tshirt1.png';
import Tshirt2 from '../images/Tshirt2.png'
import Bottle1 from '../images/Bottle1.png';
import Bottle2 from '../images/Bottle2.png';
import 'animate.css';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import { pink } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Button from '@mui/material/Button';
import MainImg from '../images/MainImg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function Main() {
  // state variables for Tshirt
  const [image, setImage] = useState(Tshirt1);
  const [buttonColor, setButtonColor] = useState('pink');

  const handleButtonClick = (newImage, newButtonColor) => {
    setImage(newImage);
    setButtonColor(newButtonColor);
  };

  // state variables for Mug
  const [mugImage, setMugImage] = useState(Mug1);
  const [mugButtonColor, setMugButtonColor] = useState('pink');

  // event handler for Mug
  const handleMugButtonClick = (newImage, newButtonColor) => {
    setMugImage(newImage);
    setMugButtonColor(newButtonColor);
  };

  // state variables for Bottle
  const [bottleImage, setBottleImage] = useState(Bottle1);
  const [bottleButtonColor, setBottleButtonColor] = useState('pink');

  // event handler for Bottle
  const handleBottleButtonClick = (newImage, newButtonColor) => {
    setBottleImage(newImage);
    setBottleButtonColor(newButtonColor);
  };
  return (
// Main section of page with image
    <>
      <div className='main-image'>
        <div className='canva-image'>
          <img src={MainImg} alt='' />
        </div>
      </div>
      <div className='contact-us'>
        <Link><HorizontalRuleIcon sx={{ color: pink[500] }} />Contact us</Link>
      </div>
{/* // Small description about product collection */}
      <div className='info-text'>
        <div className='info-paragraph'> <p><CircleRoundedIcon sx={{ color: pink[500] }} />This is Workoholics, the ultimate destination for accessories that will help you stay organized and productive throughout your workday. We have just what you need.</p></div>
      </div>

{/* This is the product section including a function to change the images */}

      <section className="product-section">
        <div className="product-image-container">
          {buttonColor === 'pink' && <img src={Tshirt1} alt="" className="product-image" />}
          {buttonColor === 'black' && <img src={Tshirt2} alt="" className="product-image" />}
          </div>
        <div className="product-details-container">
          <h2 className="product-title">T-shirt</h2>
          <p className="product-description">Effortlessly stylish shirts for any mood and every occasion.</p>
          <div className="product-price-container">
            <button className="color-button black active" onClick={() => handleButtonClick(Tshirt2, 'black')}></button>
            <button className="color-button pink active" onClick={() => handleButtonClick(Tshirt1, 'pink')}></button>
            <Button sx={{ paddingTop: "10px", marginTop: "10px" }} style={{ fontSize: "20px", color: "black", FontFace: "DM sans" }} className="product-button"><FontAwesomeIcon icon={faArrowRightLong} /></Button>
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-image-container">
          {mugButtonColor === 'pink' && <img src={Mug1} alt="" className="product-image" />}
          {mugButtonColor === 'black' && <img src={Mug2} alt="" className="product-image" />}
        </div>
        <div className="product-details-container">
          <h2 className="product-title">Mug </h2>
          <p className="product-description">Enjoy your favorite hot beverages in our unique designer cups made for everyday use.</p>
          <div className="product-price-container">
            <button className="color-button black active" onClick={() => handleMugButtonClick(Mug2, 'black')}></button>
            <button className="color-button pink active" onClick={() => handleMugButtonClick(Mug1, 'pink')}></button>
            <Button sx={{ paddingTop: "10px", marginTop: "10px" }} style={{ fontSize: "20px", color: "black", FontFace: "DM sans" }} className="product-button"><FontAwesomeIcon icon={faArrowRightLong} /></Button>
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-image-container">
          {bottleButtonColor === 'pink' && <img src={Bottle1} alt="" className="product-image" />}
          {bottleButtonColor === 'black' && <img src={Bottle2} alt="" className="product-image" />}
        </div>
        <div className="product-details-container">
          <h2 className="product-title">Bottle</h2>
          <p className="product-description">Conveniently carry your drinks in style with our chic bottles. Comes in various colors.</p>
          <div className="product-price-container">
            <button className="color-button black active" onClick={() => handleBottleButtonClick(Bottle2, 'black')}></button>
            <button className="color-button pink active" onClick={() => handleBottleButtonClick(Bottle1, 'pink')}></button>
            <Button sx={{ paddingTop: "10px", marginTop: "10px" }} style={{ fontSize: "20px", color: "black", FontFace: "DM sans" }} className="product-button"><FontAwesomeIcon icon={faArrowRightLong} /></Button>
          </div>
        </div>
      </section>
    </>


  );

}

export default Main;