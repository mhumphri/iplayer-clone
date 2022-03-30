import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import IplayerNav from "./iplayerNav";
import HeroSection from "./heroSection";
import HorizontalGallery from "./horizontalGallery";
import SearchBar from "./searchBar";
import Footer from "./footer";
import { galleryObject1, galleryObject2, galleryObject3, galleryObject4, galleryObject5 } from "../serverData/serverData";
import "../css/App.css";

function App() {
  const [screenWidth, setScreenWidth] = useState();
  const [touchScreen, setTouchScreen] = useState();

  /* listens for screen re-size and updates screen width variable */
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
      });
    };
  }, []);

  /* listens for screen orientation changes and updates screen width variable */
  useEffect(() => {
    window.addEventListener("orientationchange", () => {
      setScreenWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("orientationchange", () => {
        setScreenWidth(window.innerWidth);
      });
    };
  }, []);

  /* detects if touch screen is present on loading */
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setTouchScreen(true);
    }
    setScreenWidth(window.screen.width);
  }, []);

  return (
    <div className="App">
      <Navbar screenWidth={screenWidth} />
      <IplayerNav screenWidth={screenWidth} />

      {/*  searchbar only appears at <600px screen width */}
  <SearchBar />
      <div className="outer-centered-container">
        <div className="centered-container">
          <HeroSection />
          <HorizontalGallery
            galleryData={galleryObject1}
            screenWidth={screenWidth}
            touchScreen={touchScreen}
            top={true}
          />
          <HorizontalGallery
            galleryData={galleryObject2}
            screenWidth={screenWidth}
            touchScreen={touchScreen}
          />
          <HorizontalGallery
            galleryData={galleryObject3}
            screenWidth={screenWidth}
            touchScreen={touchScreen}
          />
          <HorizontalGallery
            galleryData={galleryObject4}
            screenWidth={screenWidth}
            touchScreen={touchScreen}
          />
          <HorizontalGallery
            galleryData={galleryObject5}
            screenWidth={screenWidth}
            touchScreen={touchScreen}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
