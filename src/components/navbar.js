import React, { useRef } from "react";
import "../css/navbar.css";
import "../css/navOptions.css";
import { navOptions } from "../serverData/serverData";
import searchnavGlass from "../svgs/searchnavGlass.svg";
import searchnavCross from "../svgs/searchnavCross.svg";

function Navbar(props) {
  const [subnav, setSubnav] = React.useState();
  const [searchnav, setSearchnav] = React.useState();
  const searchInput = useRef(null);

  /* toggles state variable controlling subnav visibility */
  const toggleSubnav = () => {
    if (subnav) {
      setSubnav(false);
    } else {
      setSubnav(true);
      if (searchnav) {
        setSearchnav(false);
      }
    }
  };

  /* toggles state variable controlling subnav visibility */
  const toggleSearchnav = () => {
    if (searchnav) {
      setSearchnav(false);
      searchInput.current.focus();
    } else {
      setSearchnav(true);
      searchInput.current.focus();
      if (subnav) {
        setSubnav(false);
      }
    }
  };

  return (
    <>
      <div
        className={subnav ? "outer-nav main-nav inverse" : "outer-nav main-nav"}
      >
        <div className="centered-container navbar">
          <button
            className={
              subnav ? "logo-wrapper small" : "logo-wrapper small inverse"
            }
          >
            {/* want to move to svgs folder but can't figure out how to control fill through the img tag */}
            <svg width="73" height="21" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M73 0v21H52V0h21ZM47 0v21H26V0h21ZM21 0v21H0V0h21Zm42.53 4.468c-.94 0-1.787.14-2.543.42a5.465 5.465 0 0 0-1.946 1.215A5.312 5.312 0 0 0 57.8 8.006c-.287.74-.43 1.568-.43 2.486 0 .94.138 1.784.414 2.534.276.75.673 1.385 1.192 1.903a5.17 5.17 0 0 0 1.905 1.19c.75.275 1.595.413 2.533.413a8.49 8.49 0 0 0 2.02-.235 6.778 6.778 0 0 0 1.69-.64v-2.25a6.254 6.254 0 0 1-3.362.955c-.795 0-1.471-.151-2.029-.453a3.009 3.009 0 0 1-1.275-1.32c-.292-.577-.439-1.277-.439-2.097 0-.82.152-1.517.456-2.09.303-.571.74-1.008 1.308-1.31.568-.303 1.256-.454 2.062-.454.585 0 1.142.078 1.672.235.53.156 1.021.386 1.474.688v-2.3a6.828 6.828 0 0 0-1.614-.59 8.131 8.131 0 0 0-1.847-.203Zm-27.19.126h-4.402v11.812h4.674c.925 0 1.717-.137 2.377-.413.659-.275 1.167-.666 1.523-1.173.356-.506.535-1.112.535-1.817 0-.716-.184-1.324-.55-1.826-.368-.5-.897-.867-1.588-1.098.5-.242.877-.57 1.133-.983.255-.413.382-.9.382-1.462 0-.98-.356-1.732-1.068-2.256-.713-.522-1.718-.784-3.016-.784Zm-26.071 0H5.866v11.812h4.674c.925 0 1.718-.137 2.377-.413.66-.275 1.167-.666 1.524-1.173.356-.506.534-1.112.534-1.817 0-.716-.183-1.324-.55-1.826-.367-.5-.896-.867-1.588-1.098.5-.242.878-.57 1.133-.983.255-.413.383-.9.383-1.462 0-.98-.356-1.732-1.069-2.256-.712-.522-1.718-.784-3.015-.784ZM36.42 11.3c1.457 0 2.186.54 2.186 1.62 0 .506-.192.894-.574 1.164-.383.27-.931.405-1.644.405h-2.073V11.3h2.105Zm-26.071 0c1.457 0 2.185.54 2.185 1.62 0 .506-.191.894-.574 1.164-.383.27-.93.405-1.643.405H8.243V11.3h2.106Zm25.768-4.79c1.266 0 1.899.467 1.899 1.403 0 .485-.163.862-.487 1.132-.325.27-.795.405-1.412.405h-1.802V6.51h1.802Zm-26.071 0c1.265 0 1.898.467 1.898 1.403 0 .485-.162.862-.486 1.132-.325.27-.796.405-1.412.405H8.243V6.51h1.803Z"
                fill={subnav ? "#000" : "#FFF"}
              />
            </svg>
          </button>
          <button
            className={
              subnav ? "logo-wrapper large" : "logo-wrapper large inverse"
            }
          >
            <svg width="84" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M84 0v24H60V0h24ZM54 0v24H30V0h24ZM24 0v24H0V0h24Zm49.102 5.106c-1.08 0-2.055.16-2.925.481a6.294 6.294 0 0 0-2.239 1.388 6.067 6.067 0 0 0-1.43 2.175c-.33.845-.495 1.792-.495 2.84 0 1.074.16 2.04.477 2.897.317.858.775 1.582 1.372 2.175.597.592 1.327 1.045 2.191 1.36.864.314 1.836.472 2.916.472.812 0 1.588-.09 2.324-.269a7.832 7.832 0 0 0 1.944-.73v-2.573a7.234 7.234 0 0 1-3.868 1.092c-.915 0-1.693-.173-2.334-.518a3.45 3.45 0 0 1-1.468-1.509c-.336-.66-.505-1.458-.505-2.396s.175-1.734.524-2.388a3.55 3.55 0 0 1 1.506-1.499c.654-.345 1.445-.518 2.372-.518.673 0 1.315.09 1.925.268.61.18 1.175.442 1.696.787V6.013a7.892 7.892 0 0 0-1.858-.675 9.418 9.418 0 0 0-2.125-.232Zm-31.286.144H36.75v13.5h5.379c1.064 0 1.976-.157 2.735-.472.758-.315 1.343-.762 1.753-1.34.41-.58.615-1.272.615-2.078 0-.818-.211-1.513-.634-2.086-.422-.573-1.03-.991-1.826-1.256.575-.276 1.01-.65 1.303-1.123.294-.472.44-1.029.44-1.67 0-1.121-.41-1.98-1.23-2.578-.82-.598-1.976-.897-3.469-.897Zm-30 0H6.75v13.5h5.379c1.064 0 1.976-.157 2.735-.472.758-.315 1.343-.762 1.753-1.34.41-.58.615-1.272.615-2.078 0-.818-.211-1.513-.634-2.086-.422-.573-1.03-.991-1.826-1.256.575-.276 1.01-.65 1.303-1.123.294-.472.44-1.029.44-1.67 0-1.121-.41-1.98-1.23-2.578-.82-.598-1.976-.897-3.469-.897Zm30.092 7.666c1.677 0 2.515.617 2.515 1.85 0 .58-.22 1.023-.66 1.331-.441.309-1.072.463-1.891.463h-2.387v-3.644h2.423Zm-30 0c1.677 0 2.515.617 2.515 1.85 0 .58-.22 1.023-.66 1.331-.441.309-1.072.463-1.891.463H9.485v-3.644h2.423ZM41.56 7.44c1.457 0 2.185.535 2.185 1.605 0 .554-.187.985-.56 1.293-.373.309-.915.463-1.625.463h-2.074v-3.36h2.074Zm-30 0c1.457 0 2.185.535 2.185 1.605 0 .554-.187.985-.56 1.293-.373.309-.915.463-1.625.463H9.485v-3.36h2.074Z"
                fill={subnav ? "#000" : "#FFF"}
              />
            </svg>
          </button>

          <div className="nav-section">
            <div
              className={
                subnav
                  ? "inner-nav-section inverse login"
                  : "inner-nav-section login"
              }
            >
              <div className="login-circle">L</div>
              <div className="username">living room</div>
            </div>
            <button className="nav-section bell">
              <div
                className={
                  subnav
                    ? "inner-nav-section inverse bell"
                    : "inner-nav-section bell"
                }
              >
                <div
                  className={
                    subnav ? "link-triangle-1 inverse" : "link-triangle-1"
                  }
                />
                <div
                  className={
                    subnav ? "link-triangle-2 inverse" : "link-triangle-2"
                  }
                />
                <svg
                  className="bell-img"
                  version="1.0"
                  width="18"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill={subnav ? "#000" : "#FFF"}>
                    <path d="M6.9 15.2h4.2V18H6.9zM18 13.8l-4.2-5.2V6.2c0-2.4-1.8-4.4-4.2-4.8V0H8.3v1.5C6 1.8 4.2 3.8 4.2 6.2v2.4L0 13.8h18z" />
                  </g>
                </svg>
              </div>
            </button>
          </div>

          <div
            className={
              subnav ? "topic-row-wrapper inverse" : "topic-row-wrapper"
            }
          >
            <ul className="topics-wrapper">
              {/* .map renders array of buttons for navbar */}
              {navOptions.map((x) => (
                <li key={x.name} className={"nav-section option " + x.name}>
                  <div
                    className={
                      subnav
                        ? "inner-nav-section inverse " + x.name
                        : "inner-nav-section " + x.name
                    }
                  >
                    <div className="nav-section-content">{x.name}</div>
                  </div>
                </li>
              ))}
            </ul>
            <button className="nav-section more" onClick={toggleSubnav}>
              <div
                className={
                  subnav
                    ? "inner-nav-section more open"
                    : "inner-nav-section more"
                }
              >
                <div className="more-triangle-wrapper">
                  More
                  <div
                    className={
                      subnav
                        ? "down-triangle navbar inverse"
                        : "down-triangle navbar"
                    }
                  />
                </div>
              </div>
            </button>
          </div>
          <button className="nav-section search" onClick={toggleSearchnav}>
            <div
              className={
                subnav
                  ? "inner-nav-section search open"
                  : "inner-nav-section search"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="search-svg"
                viewBox="0 0 32 32"
              >
                <path
                  d="M32 28.5l-8.2-8.2c3.4-5.1 2.9-12-1.6-16.4C19.7 1.3 16.3 0 13 0 9.7 0 6.3 1.3 3.8 3.8c-5.1 5.1-5.1 13.3 0 18.4C6.3 24.7 9.7 26 13 26c2.5 0 5.1-.7 7.3-2.2l8.2 8.2 3.5-3.5zM6.6 19.4C4.9 17.7 4 15.4 4 13s.9-4.7 2.6-6.4C8.3 4.9 10.6 4 13 4c2.4 0 4.7.9 6.4 2.6 3.5 3.5 3.5 9.2 0 12.7-1.7 1.7-4 2.6-6.4 2.6s-4.7-.8-6.4-2.5z"
                  fill={subnav ? "black" : "white"}
                />
              </svg>
              <div className="nav-search-text-wrapper">
                <div className="nav-search-text">Search BBC iPlayer</div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className={subnav ? "outer-nav sub-nav open" : "outer-nav sub-nav"}>
        <div className="centered-container sub-nav">
          <div className="more-title">MORE</div>
          <div className="subnav-options">
            {/* .map renders array of buttons for dropdown menu */}
            {navOptions.map((x) => (
              <li key={x.name} className={"subnav-option-ind " + x.name}>
                <div className="subnav-option-inner">{x.name}</div>
              </li>
            ))}
          </div>
        </div>
      </div>

      <div
        className={
          searchnav ? "outer-nav search-nav open" : "outer-nav search-nav"
        }
      >
        <div className="centered-container search-nav">
          <div className="search-nav-wrapper">
            <div>
              <div className="search-nav-title">SEARCH</div>
            </div>
            <div className="searchnav-input-wrapper">
              <input
                className="search-bar-input"
                type="text"
                ref={searchInput}
              />
              <button className="searchnav-icon">
                <img
                  src={searchnavGlass}
                  className="searchnav-glass"
                  alt="magnifying glass"
                />
              </button>
            </div>
            <button className="searchnav-cross" onClick={toggleSearchnav}>
              <img src={searchnavCross} alt="cross" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
