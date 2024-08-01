import { useState, useEffect } from 'react';
import '../styles/SliderZone.css';
import slider1 from '../img/slider1.jpg';
import slider2 from '../img/slider2.jpg';
import slider3 from '../img/slider3.jpg';
import left_btn from '../img/left_btn.png';
import right_btn from '../img/right_btn.png';


export function SliderZone() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const sliders = [slider1, slider2, slider3];
  const handleArrowClick = (direction) => {
    let _index = currentIndex + direction;
    if(_index < 0) {
      _index = 0;
    } else if(_index > sliders.length-1) {
      _index = sliders.length-1;
    }
    setCurrentIndex(_index);
  }

  useEffect(
    () => {
      const interval = setInterval(() => {
        setCurrentIndex((idx) => (idx+1) % sliders.length)
      }, 3000)
        
      return () => clearInterval(interval);
  }, [sliders.length])


  return (
    <>
      <div id="sliderZone">
        <div id="sub_photo_bg">
            <ul 
              className="slider_panel"
              style={{left:`-${currentIndex * 100}%`}}
            >
              {
                sliders.map((slider, index) => (
                  <li key={index} className="slider_image"><img src={ slider} alt="" /></li>
                ))
              }
                {/* <li className="slider_image"><img src={ slider1 } alt="" /></li>
                <li className="slider_image"><img src={ slider2 } alt="" /></li>
                <li className="slider_image"><img src={ slider3 } alt="" /></li> */}
            </ul>
            <div className="control_panel">
              {
                sliders.map((slider, index) => {
                  return (
                    <div 
                      className={`control_btn ${currentIndex === index ? 'active' : ''}`}  
                      onClick={() => {setCurrentIndex(index)}}
                  ></div>
                  );
                })
              }
                {/* <div 
                  className={`control_btn ${currentIndex === 0 ? 'active' : ''}`}  
                  onClick={() => {setCurrentIndex(0)}}
                ></div>
                <div 
                  className={`control_btn ${currentIndex === 1 ? 'active' : ''}`} 
                  onClick={() => {setCurrentIndex(1)}}
                ></div>
                <div 
                  className={`control_btn ${currentIndex === 2 ? 'active' : ''}`} 
                  onClick={() => {setCurrentIndex(2)}}
                ></div> */}
            </div>
            <div className="direct_btn">
                <div 
                  className="left_btn"
                  onClick={() => handleArrowClick(-1)}
                >
                  <img src={ left_btn } alt="" /></div>
                <div 
                  className="right_btn"
                  onClick={() => handleArrowClick(1)}
                >
                  <img src={ right_btn } alt="" /></div>
            </div>
        </div>
    </div>
    </>
  );
}
