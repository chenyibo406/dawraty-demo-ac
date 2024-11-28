import "./Footer.css";
import appStore from "../assets/images/app-store.svg";
import googlePlay from "../assets/images/google-play.svg";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/prime_twitter.svg";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top-about">
          <h1 className="footer__top-about-title">About Us</h1>
          <p className="footer__top-about-content">
            Welcome to our platform and the Dawraty family. Dawraty Educational
            Group aims to deliver education through various courses to students
            hoping to share the vast knowledge and expertise our instructors
            provide in their respective fields. We constantly strive to update
            and create content to reach many students across the world.
          </p>
        </div>
        <div className="footer__top-apps">
          <h1 className="footer__top-apps-title">Experience our apps</h1>
          <div className="footer__top-apps-content">
            <img src={appStore} width={"60%"} alt="app store" />
            <img src={googlePlay} width={"60%"} alt="google play" />
          </div>
        </div>
        <div className="footer__top-contact">
          <h1 className="footer__top-contact-title">Contact us</h1>
          <div className="footer__top-contact-content">
            <p>
              <EmailOutlinedIcon
                className="icon-no-effect"
                style={{ fontSize: "18px" }}
              />
              info@joindawraty.com
            </p>
            <p>
              <HeadphonesIcon
                className="icon-no-effect"
                style={{ fontSize: "18px" }}
              />
              +965 6901 0025
            </p>
            <p>
              <HeadphonesIcon
                className="icon-no-effect"
                style={{ fontSize: "18px" }}
              />
              +973 3376 9925
            </p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-right">
          <p>2024 Dawraty. All Rights Reserved</p>
        </div>
        <div className="footer__bottom-regulation">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>FAQ</p>
        </div>
        <div className="footer__bottom-socialMedia">
          {/* <img src={instagram} alt="ins" /> */}
          {/* <img src={twitter} alt="twitter" /> */}
          <InstagramIcon style={{ fontSize: "24px" }} />
          <XIcon style={{ fontSize: "20px" }} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
