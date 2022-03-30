import "../css/footer.css";

function Footer(props) {
  const links = [
    "Home",
    "News",
    "Sport",
    "Weather",
    "iPlayer",
    "Sounds",
    "CBBC",
    "CBeebies",
    "Food",
    "Bitesize",
    "Arts",
    "Taster",
    "Local",
    "Three",
  ];

  const bottomLinks = [
    "Terms of Use",
    "About the BBC",
    "Privacy Policy",
    "Cookies",
    "Accesibility Help",
    "Parental Guidance",
    "Contact the BBC",
    "Get Personalised Newsletters",
  ];

  return (
    <footer className="footer-wrapper">
      <div className="centered-container">
        <div className="footer-links-wrapper">
          <div className="footer-links-wrapper-inner">
            {links.map((x) => (
              <li key={x} className="footer-link-ind">
                <div className="footer-link-inner">{x}</div>
              </li>
            ))}
          </div>
        </div>
      </div>

      <div className="centered-container bottom-info">
        <ul className="bottom-info-link-row">
          {bottomLinks.map((x) => (
            <li key={x} className="bottom-info-link">
              <span className="bottom-info-inner">{x}</span>
            </li>
          ))}
        </ul>
        <div className="bottom-line">
          Copyright © 2022 BBC{" "}
          <span className="bottom-line-text-reg">
            The BBC is not responsible for the content of external sites.{" "}
          </span>
          Read about our approach to external linking.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
