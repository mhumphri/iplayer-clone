import "../css/heroSection.css";
import heroImg1 from "../images/hero1.jpg";


function HeroSection() {
  return (
    <div className="hero-section-wrapper">
      <div className="hero-section-inner">
        <div className="hero-section-header">
          <h2 className="hero-title">Chloe</h2>
          <div className="hero-play-section">
            <a className="play-section-inner">
              <div className="play-text-wrapper">
                <span className="play-label-primary">Start Watching</span>
                <div className="play-episodes-wrapper">
                  <span className="play-episodes-text">
                    All episodes available now
                  </span>
                  <div className="play-divider" />
                </div>
              </div>
              <div className="hero-play-icon">
                <svg className="play-svg" viewBox="0 0 32 32">
                  <path d="M4 0v32l25-16z"></path>
                </svg>
              </div>
            </a>
          </div>
          <p className="hero-section-synopsis">
            Live the lie to find the truth. Becky idolises influencer Chloe –
            before tragedy strikes
          </p>
        </div>
        <div className="hero-section-background">
          <div className="hero-image-background">
            <img className="hero-img" src={heroImg1} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
