import React from "react";
import "../css/galleryItem.css";

function GalleryItem(props) {
  if (props.itemData.large) {
    return (
      <li className="gallery-item">
        <div className="content-item">
          <a className="content-item-link">
            <div className="gel-layout-item">
              <div className="content-item-image-wrapper">
                <div className="content-item-image">
                  <div className="rs-image">
                    <img className="rs-image-img" src={props.itemData.image} alt=''/>
                  </div>
                </div>
              </div>
            </div>
            <div className="gel-layout-item">
              <div className="content-item-inner">
                <div className="content-item-info">
                  <div className="content-info-above-text"></div>

                  <div className="content-info-text">
                    <div className="content-item-label">
                      {props.itemData.category}
                    </div>
                    <div className="content-item-title">
                      {props.itemData.name}
                    </div>
                    <div className="content-item-info-primary">
                      {props.itemData.synopsisPartial}
                    </div>
                    <div className="content-item-info-secondary">
                      {props.itemData.synopsisFull}
                      <div className="content-item-sublabels">
                        <span className="sub-label-lhs">
                          {props.itemData.sublabelLhs}
                        </span>
                        <span className="sub-label-rhs">
                          {props.itemData.sublabelRhs}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </li>
    );
  } else if (props.itemData.short) {
    return (
      <li className="gallery-item">
        <div className="content-item">
          <a className="content-item-link">
            <div className="gel-layout-item">
              <div className="content-item-image-wrapper">
                <div className="content-item-image">
                  <div className="rs-image">
                    <img className="rs-image-img" src={props.itemData.image} alt='' />
                  </div>
                </div>
              </div>
            </div>
            <div className="gel-layout-item">
              <div className="content-item-inner">
                <div className="content-item-info">
                  <div className="content-info-above-text"></div>

                  <div className="content-info-text">
                    <div className="content-item-label">
                      {props.itemData.category}
                    </div>
                    <div className="content-item-title">
                      {props.itemData.name}
                    </div>
                    <div className="content-item-info-primary">
                      {props.itemData.synopsisPartial}
                    </div>
                    <div className="content-item-info-secondary">
                      {props.itemData.synopsisFull}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </li>
    );
  } else if (props.itemData.portrait) {
    return (
      <li className="gallery-item">
        <a className="portrait-content-item">
          <div className="portrait-content-item-image">
            <div className="rs-image portrait">
              <img className="rs-image-img" src={props.itemData.image} alt='' />
            </div>
          </div>
          <div className="portrait-content-item-title">
            {props.itemData.name}
          </div>
        </a>
      </li>
    );
  } else if (props.itemData.nextEpisode) {
    return (
      <li className="gallery-item">
        <div className="content-item">
          <a className="content-item-link">
            <div className="gel-layout-item">
              <div className="content-item-image-wrapper">
                <div className="content-item-image">
                  <div className="rs-image">
                    <img className="rs-image-img" src={props.itemData.image} alt=''/>
                  </div>
                </div>
              </div>
            </div>
            <div className="gel-layout-item">
              <div className="content-item-inner">
                <div className="content-item-info">
                  <div className="content-info-above-text"></div>

                  <div className="content-info-text">
                    <div className="content-item-label pink">
                      {props.itemData.categoryMsg}
                    </div>
                    <div className="content-item-title">
                      {props.itemData.name}
                    </div>
                    <div className="content-item-info-primary">
                      {props.itemData.synopsisPartial}
                    </div>
                    <div className="content-item-info-secondary">
                      {props.itemData.synopsisFull}
                      <div className="content-item-sublabels">
                        <span className="sub-label-lhs">
                          {props.itemData.sublabelLhs}
                        </span>
                        <span className="sub-label-rhs">
                          {props.itemData.sublabelRhs}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </li>
    );
  } else if (props.itemData.resume) {
    return (
      <li className="gallery-item">
        <div className="content-item">
          <a className="content-item-link">
            <div className="gel-layout-item">
              <div className="content-item-image-wrapper">
                <div className="content-item-image">
                  <div className="rs-image">
                    <img className="rs-image-img" src={props.itemData.image} alt='' />
                  </div>
                </div>
              </div>
            </div>
            <div className="gel-layout-item">
              <div className="content-item-inner">
                <div className="content-item-info">
                  <div className="content-info-above-text">
                    <div className="content-item-progress">
                      <div className="progress large">
                        <div
                          className="progress-position"
                          style={{ width: props.itemData.progress + "%" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="content-info-text">
                    <div className="content-item-label">
                      <span className="content-label-lhs">
                        {props.itemData.categoryMsg}
                      </span>
                      <span className="content-label-rhs">
                        {props.itemData.categoryMsgRhs}
                      </span>
                    </div>
                    <div className="content-item-title">
                      {props.itemData.name}
                    </div>
                    <div className="content-item-info-primary">
                      {props.itemData.synopsisPartial}
                    </div>
                    <div className="content-item-info-secondary">
                      {props.itemData.synopsisFull}
                      <div className="content-item-sublabels">
                        <span className="sub-label-lhs">
                          {props.itemData.sublabelLhs}
                        </span>
                        <span className="sub-label-rhs">
                          {props.itemData.sublabelRhs}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </li>
    );
  } else {
    return (
      <li className="carousel-item">
        <div className="item-content">
          <div className="item-img-wrapper">
            <img className="item-img" src={props.itemData.image} alt='' />
          </div>
          <div className="show-details-wrapper">
            <div className="category-label">{props.itemData.category}</div>
            <div className="show-name">{props.itemData.name}</div>
            <div className="show-synopsis partial">
              {props.itemData.synopsisPartial}
            </div>
            <div className="show-synopsis full">
              {props.itemData.synopsisFull}
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default GalleryItem;
