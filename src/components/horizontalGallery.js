import React, { useEffect, useRef } from "react";
import GalleryItem from "./galleryItem";
import "../css/horizontalGallery.css";

function HorizontalGallery(props) {
  const [horizontalPos, setHorizontalPos] = React.useState(0);
  const [maxHorizontalPos, setMaxHorizontalPos] = React.useState(0);
  const [itemsPerScreen, setItemsPerScreen] = React.useState(0);
  const [numberItems, setNumberItems] = React.useState(0);

  const [carrouselStyle, setCarrouselStyle] = React.useState({
    transform: "translate3d(0%, 0px, 0px)",
  });
  const [upArrowStyle, setUpArrowStyle] = React.useState(
    "chevron-arrow active"
  );
  const [downArrowStyle, setDownArrowStyle] = React.useState(
    "chevron-arrow off"
  );
  const [touchStart, setTouchStart] = React.useState();
  const [touchEnd, setTouchEnd] = React.useState();
  const [arrowsOn, setArrowsOn] = React.useState();
  const carrouselTrack = useRef(null);

  useEffect(() => {
    /* sets number of items displayed in one frame of carrousel - response to screen width */
    let newItemsPerScreen = 4;
    if (props.screenWidth < 1000) {
      newItemsPerScreen = 3;
    }
    if (props.screenWidth < 600) {
      newItemsPerScreen = 2;
    }

    /* calculates the number of carrousel frames for a given input array length and screen width */
    const newNumberItems = props.galleryData.items.length;

    /* calculates the maximum tx (leftwards movement) value permitted for the carrousel */
    const newMaxHorizontalPos =
      (Math.ceil(props.galleryData.items.length / newItemsPerScreen) - 1) * 100;

    setItemsPerScreen(newItemsPerScreen);
    setNumberItems(newNumberItems);

    setMaxHorizontalPos(newMaxHorizontalPos);

    /* if current carrousel position exceeds the new maximum, current carrousel position is set in line with new maximum */
    if (newMaxHorizontalPos < horizontalPos) {
      setHorizontalPos(newMaxHorizontalPos);
    }
  }, [props.screenWidth, props.galleryData.items, horizontalPos]);

  /* updates styling in response to new screen width or carrousel parameters */
  useEffect(() => {
    /* updates carrousel position when horizontalPos variable changes */
    const newPos = "translate3d(-" + horizontalPos + "%, 0px, 0px)";
    setCarrouselStyle({
      transform: newPos,
    });
  /* controls the state of the up/down arrows in response to the carrousel position (e.g if final frame then the up arrow will be inactive)  */
    setUpArrowStyle("chevron-arrow active");
    setDownArrowStyle("chevron-arrow active");
    if (horizontalPos === maxHorizontalPos) {
      setUpArrowStyle("chevron-arrow off");
    }
    if (horizontalPos === 0) {
      setDownArrowStyle("chevron-arrow off");
    }
  }, [horizontalPos, maxHorizontalPos, props.screenWidth]);

/* disables arrows if the number of items does not exceed max items per screen and enables arrows if screen is not touch screen or touch screen with width >= 900px  */

  useEffect(() => {
    if ((props.screenWidth >= 900 && props.touchScreen) || !props.touchScreen) {
      if (numberItems > itemsPerScreen) {
        setArrowsOn(true);
      } else {
        setArrowsOn(false);
      }
    } else {
      setArrowsOn(false);
    }
  }, [props.screenWidth, props.touchScreen, itemsPerScreen, numberItems]);

/* moves carrousel forward by one frame */

  const moveForward = () => {
    if (horizontalPos < maxHorizontalPos) {
      const newHorzontalPos = horizontalPos + 100;
      console.log("newHorzontalPos: " + newHorzontalPos);
      setHorizontalPos(newHorzontalPos);
    }
  };

/* moves carrousel back by one frame */

  const moveBackward = () => {
    console.log("moveBackward");
    if (horizontalPos > 99) {
      const newHorzontalPos = horizontalPos - 100;
      setHorizontalPos(newHorzontalPos);
    }
  };

  /* registers start of swipe and saves start position in state */

  const onTouchStart = (e) => {
    console.log("onTouchStart");
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  /* registers swipe movement and saves end position in state */

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

/* calculates horizontal length of swipe and - if greater than 50px - calls moveForward / moveBackward function */

  const onTouchEnd = () => {
    const minSwipeDistance = 50;
    console.log("onTouchEnd");
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      console.log("swipe", isLeftSwipe ? "left" : "right");

    if (isLeftSwipe) {
      moveForward();
    } else if (isRightSwipe) {
      moveBackward();
    }
  };

  return (
    <div className={props.top ? "gallery-content top" : "gallery-content"}>
      <div className="gallery-header">
        <h2 className="section-header">{props.galleryData.title}</h2>
        <button className="header-rhs">{props.galleryData.rhsMsg}</button>
      </div>
      <div className="carousel-outer">
        <div
          className="carousel-inner"
          ref={carrouselTrack}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="carousel-track" style={carrouselStyle}>
            {props.galleryData.items.map((x) => (
              <GalleryItem itemData={x} touchScreen={props.touchScreen} />
            ))}
          </div>
          {arrowsOn ? (
            <div className={"carrousel-arrows " + props.galleryData.view}>
              <button className={downArrowStyle} onClick={moveBackward}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 16l26 16v-7.2L14.4 16 29 7.2V0L3 16z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button className={upArrowStyle} onClick={moveForward}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29 16L3 0v7.2L17.6 16 3 24.8V32l26-16z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default HorizontalGallery;
