import React, { useState, useEffect } from "react";
import { categoryOptions, channelOptions } from "../serverData/serverData";
import "../css/iplayerNav.css";

function IplayerNav(props) {
  const [subnavHeight, setSubnavHeight] = React.useState({ height: "64px" });
  const [subnavCss, setSubnavCss] = React.useState("iplayer-nav-dd-wrapper");
  const [smallSubnav, setSmallSubnav] = React.useState();
  const [largeSubnav, setLargeSubnav] = React.useState();

  /* calculates subnav height based on screen width and smallSubnav and largeSubnav variables */
  const subnavHeightCalc = () => {
    let newHeight = 64;
    if (props.screenWidth < 600) {
      if (smallSubnav) {
        newHeight = 345;
      }
    }
    if (props.screenWidth >= 600) {
      if (largeSubnav === "channels") {
        newHeight = 128;
      }
      if (largeSubnav === "categories") {
        newHeight = 342;
      }
    }
    if (props.screenWidth >= 1008) {
      if (largeSubnav === "categories") {
        newHeight = 211;
      }
    }
    return newHeight;
  };

  /* sets subnav height and css (transition styles) in response to changes in screenWidth */
  useEffect(() => {
    setSubnavCss("iplayer-nav-dd-wrapper no-transform");
    /* updates subnav height  */
    setSubnavHeight(subnavHeightCalc());
  }, [props.screenWidth]);

  /* sets subnav height and css (transition styles) in response to changes in smallSubnav and largeSubnav variables */
  useEffect(() => {
    setSubnavCss("iplayer-nav-dd-wrapper");
    /* updates subnav height  */
    setSubnavHeight(subnavHeightCalc());
  }, [smallSubnav, largeSubnav]);

  /* columns of options for the category menu */

  const categoryCol1 = ["Drama & Soaps", "Films", "Comedy", "Documentaries"];
  const categoryCol2 = ["Sport", "News", "Entertainment", "Music"];
  const categoryCol3 = ["Food", "Lifestyle", "History", "Science & Nature"];
  const categoryCol4 = ["Arts", "From the Archive", "Audio Described","Signed"];
  const categoryCol5 = ["Northern Ireland", "Scotland", "Wales"];
  const categoryCol6 = ["CBeebies", "CBBC"];

  /* renders array of category names for dropdown menu */

  const makeCategoryRender = (categoryList) => {
    const categoryRender = categoryList.map((x) => (
      <li key={x.name} className="subnav-option">{x}</li>
    ));
    return categoryRender;
  };

  /* controls what is displayed in the dropdown in response to button clicks in large subnav (above 600px screen width)*/

  const largeSubnavController = (option) => {
    if (largeSubnav === option) {
      setLargeSubnav(false);
    } else {
      setLargeSubnav(option);
    }
  };

  return (
    <>
    {/* js controls height and transform styles for menu dropdown  */}
      <nav className={subnavCss} style={{ height: subnavHeight + "px" }}>
        <div className="iplayer-nav-container">
          <div className="top-nav-wrapper">
            <div className="centered-container iplayer-nav">
              <div className="lhs-container">
                <button className="iplayer-logo">iPLAYER</button>
              </div>
              {/*  rhs menu for <600px screen width */}
              <div className="rhs-container">

                <button
                  className={
                    smallSubnav
                      ? "iplayer-menu-btn active"
                      : "iplayer-menu-btn"
                  }
                  onClick={() => setSmallSubnav(!smallSubnav)}
                >
                  Menu
                </button>
              </div>
              {/*  rhs menu for >=600px screen width */}
              <div className="rhs-container large">
                <button
                  className={
                    largeSubnav === "channels"
                      ? "tv-category-box active"
                      : "tv-category-box"
                  }
                  onClick={() => largeSubnavController("channels")}
                >
                  <div className="title-triangle-wrapper">
                    <div className="tv-category-text">Channels</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="arrow-svg"

                        viewBox="0 0 32 32"
                      >
                        <path transform="rotate(-180 16.083221435546875,15.999999046325682)" d="m0.109132,25.114051l15.974089,-18.228102l15.974089,18.228102l-31.948179,0z"></path>
                      </svg>
                    </div>
                </button>
                <button
                  className={
                    largeSubnav === "categories"
                      ? "tv-category-box active"
                      : "tv-category-box"
                  }
                  onClick={() => largeSubnavController("categories")}
                >
                  <div className="title-triangle-wrapper">
                    <div className="tv-category-text">Categories</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="arrow-svg"

                        viewBox="0 0 32 32"
                      >
                        <path transform="rotate(-180 16.083221435546875,15.999999046325682)" d="m0.109132,25.114051l15.974089,-18.228102l15.974089,18.228102l-31.948179,0z"></path>
                      </svg>
                  </div>
                </button>
                <button className="tv-category-box">
                  <div className="tv-category-text">A-Z</div>
                </button>
                <button className="tv-category-box">
                  <div className="tv-category-text">TV Guide</div>
                </button>
                <button className="tv-category-box rhs">
                  <div className="tv-category-text">My Programmes</div>
                </button>
              </div>
            </div>
          </div>
        </div>
          {/*  dropdown menu for <600px screen width */}
        <div className="iplayer-nav-dd-item-container">
          <div className="iplayer-nav-dd-item-inner">
            <div className="centered-container iplayer-subnav large">
              <ul className="scroll-nav-wrapper">
                {channelOptions.map((x) => (
                  <li key={x.name} className="scroll-nav-item">
                    <div className="channels-nav-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="channel-svg"
                        width="76"
                        height="32"
                      >
                        {x.svgPath}
                      </svg>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="centered-container iplayer-subnav">
              <ul className="scroll-nav-wrapper">
                {categoryOptions.map((x) => (
                  <li key={x.name} className="scroll-nav-item">
                    <div className="channels-nav-item">
                      <div className="subnav-option horizontal">{x}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="centered-container iplayer-subnav">
              <div className="channels-nav-item">
                <div className="subnav-option horizontal">A - Z</div>
              </div>
            </div>
            <div className="centered-container iplayer-subnav">
              <div className="channels-nav-item">
                <div className="subnav-option horizontal">TV Guide</div>
              </div>
            </div>
            <div className="centered-container iplayer-subnav">
              <div className="channels-nav-item">
                <div className="subnav-option horizontal">My Programmes</div>
              </div>
            </div>
          </div>
        </div>
      {/*  dropdown menu for >=600px screen width */}
        <ul className="iplayer-nav-dd-item-container large">
          <div className="centered-container iplayer-subnav">
            <div className="large-subnav-outer">
              <div
                className={
                  largeSubnav === "channels"
                    ? "large-subnav-inner"
                    : "large-subnav-inner invisible"
                }
              >
                <nav className="scroll-nav-wrapper">
                  {channelOptions.map((x) => (
                    <li key={x.name} className="scroll-nav-item">
                      <div className="channels-nav-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="channel-svg"
                          width="76"
                          height="32"
                        >
                          {x.svgPath}
                        </svg>
                      </div>
                    </li>
                  ))}
                </nav>
              </div>
              <div
                className={
                  largeSubnav === "categories"
                    ? "large-subnav-inner"
                    : "large-subnav-inner invisible"
                }
              >
                <div className="categories-wrapper">
                  <div className="subnav-option-column">
                    <div className="categories-mini-column">
                      {makeCategoryRender(categoryCol1)}
                    </div>
                    <div className="categories-mini-column">

                      {makeCategoryRender(categoryCol2)}
                    </div>
                  </div>
                  <div className="subnav-option-column">
                    <div className="categories-mini-column">
                      {makeCategoryRender(categoryCol3)}
                    </div>
                    <div className="categories-mini-column">
                      {makeCategoryRender(categoryCol4)}
                    </div>
                  </div>
                  <div className="subnav-option-column">
                    <div className="categories-mini-column">
                      {makeCategoryRender(categoryCol5)}
                    </div>
                    <div className="categories-mini-column">
                      {makeCategoryRender(categoryCol6)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default IplayerNav;
