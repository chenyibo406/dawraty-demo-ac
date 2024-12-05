import "./Home.css";
import Hero from "../assets/images/Hero-Image.png";
import Sponsor from "../assets/images/sponsor-logo.png";
import Aldanah from "../assets/images/about-us/Aldanah-Dougherty.png";
import Janine from "../assets/images/about-us/Janine-Dougherty.png";
import Khalid from "../assets/images/about-us/Khalid-Al-Rajhi.png";
import Salman from "../assets/images/about-us/Salman-Al-Otaibi.png";
import Yousef from "../assets/images/about-us/Yousef-Al-Rumaih.png";
import YousefAlsalem from "../assets/images/about-us/Yousef-Alsalem.png";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
// import quote from "../assets/icons/icons";
// import quote from "../assets/icons/icons";
// import FormatQuoteTwoToneIcon from "@mui/icons-material/FormatQuoteTwoTone";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Home() {
  return (
    <div className="home">
      <div className="home__category">
        <h1 className="home__category-item">Pathology</h1>
        <h1 className="home__category-item">Bio Chemistry</h1>
        <h1 className="home__category-item">Allied Health</h1>
        <h1 className="home__category-item">Medicine</h1>
        <h1 className="home__category-item">Mathematics</h1>
        {/* <h1 className="home__banner-item">Dentistry</h1> */}
      </div>
      <div className="home__hero">
        <div className="home__hero-left">
          <h1 className="home__hero-left-title">
            You’re serious about your medicine study. We are too.
          </h1>
          <p className="home__hero-left-intro">
            We’ve spent the last three years helping over <br />
            80,000 medicine students just like you <br />
            to achieve a successful academic <br />
            grade online.
          </p>
          <button className="home__hero-left-button">Start free courses</button>
        </div>
        <div className="home__hero-right">
          <img src={Hero} alt="" className="home__hero-right-img" />
        </div>
      </div>
      <div className="home__sponsors">
        <div className="home__sponsors-item">
          <img src={Sponsor} alt="" />
        </div>
        <div className="home__sponsors-item">
          <img src={Sponsor} alt="" />
        </div>
        <div className="home__sponsors-item">
          <img src={Sponsor} alt="" />
        </div>
        <div className="home__sponsors-item">
          <img src={Sponsor} alt="" />
        </div>
        <div className="home__sponsors-item">
          <img src={Sponsor} alt="" />
        </div>
      </div>
      <div className="home__inquiry">
        <h1 className="home__inquiry-title">Meet Dawraty Family</h1>
        <div className="home__inquiry-profile">
          <div className="home__inquiry-profile-card">
            <img
              src={Salman}
              alt=""
              className="home__inquiry-profile-card-img"
            />
            <h1 className="home__inquiry-profile-card-title">
              Dr. Salman Al-Otaibi
            </h1>
            <p className="home__inquiry-profile-card-intro">
              Hello! It's Dr.Salman Alotaibi! <br /> A person who is passionate
              about <br /> teaching and helping...
            </p>
            <button className="home__inquiry-profile-card-button">
              Ask me question
            </button>
          </div>
          <div className="home__inquiry-profile-card">
            <img
              src={Yousef}
              alt=""
              className="home__inquiry-profile-card-img"
            />
            <h1 className="home__inquiry-profile-card-title">
              Dr. Yousef Al-Rumaih
            </h1>
            <p className="home__inquiry-profile-card-intro">
              Interested in teaching, and <br /> passionate about helping <br />
              students
            </p>
            <button className="home__inquiry-profile-card-button">
              Ask me question
            </button>
          </div>
          <div className="home__inquiry-profile-card">
            <img
              src={Janine}
              alt=""
              className="home__inquiry-profile-card-img"
            />
            <h1 className="home__inquiry-profile-card-title">
              Dr. Janine Dougherty
            </h1>
            <p className="home__inquiry-profile-card-intro">
              My mission is to undo whatever <br />
              confusion and uncertainty <br />
              medical school ...
            </p>
            <button className="home__inquiry-profile-card-button">
              Ask me question
            </button>
          </div>
          <div className="home__inquiry-profile-card">
            <img
              src={Khalid}
              alt=""
              className="home__inquiry-profile-card-img"
            />
            <h1 className="home__inquiry-profile-card-title">
              Dr. Khaled Al-Rajhi
            </h1>
            <p className="home__inquiry-profile-card-intro">
              Hello, this is Dr. Khaled Al-Rajhi, <br />
              an ambitious individual who is <br />
              interested in medical education!...
            </p>
            <button className="home__inquiry-profile-card-button">
              Ask me question
            </button>
          </div>
          <div className="home__inquiry-profile-card">
            <img
              src={YousefAlsalem}
              alt=""
              className="home__inquiry-profile-card-img"
            />
            <h1 className="home__inquiry-profile-card-title">
              Yousef Al-Salem
            </h1>
            <p className="home__inquiry-profile-card-intro">
              Interested in teaching, and <br />
              passionate about helping <br />
              students...
            </p>
            <button className="home__inquiry-profile-card-button">
              Ask me question
            </button>
          </div>
          <div className="home__inquiry-profile-card">
            <img
              src={Aldanah}
              alt=""
              className="home__inquiry-profile-card-img"
            />
            <h1 className="home__inquiry-profile-card-title">
              Aldanah Dougherty
            </h1>
            <p className="home__inquiry-profile-card-intro">
              I am a firm believer that medicine <br /> can be enjoyable once
              you <br /> understand its concepts...
            </p>
            <button className="home__inquiry-profile-card-button">
              Ask me question
            </button>
          </div>
        </div>
      </div>
      <div className="home__inspiration">
        <div className="home__inspiration-section">
          <div className="home__inspiration-section-card">
            {/* <img src={quote} alt="" /> */}
            <FormatQuoteIcon
              style={{ fontSize: "32px", transform: "rotate(180deg)" }}
            />
            <p className="home__inspiration-section-card-intro">
              I’m thrilled that I took Dawraty’s courses a few months ago. They
              played a key role in my academic success, and I’m proud to say I’m
              now a certified dentist! The content perfectly aligned with the
              medical curriculum.
            </p>
            <div className="home__inspiration-section-card-profile">
              {/* <img src="" alt="" /> */}
              <AccountCircleIcon
                style={{ fontSize: "40px", color: "#0B4374" }}
              />
              <h1>Austin</h1>
            </div>

            <hr />
            <div className="home__inspiration-section-card-title">
              <PlayCircleIcon style={{ fontSize: "40px", color: "#0B4374" }} />
              <h1>
                [NEW] Ultimate Dentistry Certified <br /> Practitioner - 2022
              </h1>
            </div>
          </div>
          <div className="home__inspiration-section-card">
            {/* <img src={quote} alt="" /> */}
            <FormatQuoteIcon
              style={{ fontSize: "32px", transform: "rotate(180deg)" }}
            />
            <p className="home__inspiration-section-card-intro">
              I’m thrilled that I took Dawraty’s courses a few months ago. They
              played a key role in my academic success, and I’m proud to say I’m
              now a certified dentist! The content perfectly aligned with the
              medical curriculum.
            </p>
            <div className="home__inspiration-section-card-profile">
              {/* <img src="" alt="" /> */}
              <AccountCircleIcon
                style={{ fontSize: "40px", color: "#0B4374" }}
              />
              <h1>Austin</h1>
            </div>

            <hr />
            <div className="home__inspiration-section-card-title">
              <PlayCircleIcon style={{ fontSize: "40px", color: "#0B4374" }} />
              <h1>
                [NEW] Ultimate Dentistry Certified <br /> Practitioner - 2022
              </h1>
            </div>
          </div>
          <div className="home__inspiration-section-card">
            {/* <img src={quote} alt="" /> */}
            <FormatQuoteIcon
              style={{ fontSize: "32px", transform: "rotate(180deg)" }}
            />
            <p className="home__inspiration-section-card-intro">
              I’m thrilled that I took Dawraty’s courses a few months ago. They
              played a key role in my academic success, and I’m proud to say I’m
              now a certified dentist! The content perfectly aligned with the
              medical curriculum.
            </p>
            <div className="home__inspiration-section-card-profile">
              {/* <img src="" alt="" /> */}
              <AccountCircleIcon
                style={{ fontSize: "40px", color: "#0B4374" }}
              />
              {/* <div className="profile"></div> */}
              <h1>Austin</h1>
            </div>

            <hr />
            <div className="home__inspiration-section-card-title">
              <PlayCircleIcon style={{ fontSize: "40px", color: "#0B4374" }} />
              <h1>
                [NEW] Ultimate Dentistry Certified <br /> Practitioner - 2022
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="home__trending">
        <h1 className="home__trending-title">Trending courses by category</h1>
        <div className="home__trending-category">
          <h1 className="home__trending-category-title"></h1>
          <div className="home__trending-category-item">
            <a href=""></a>
            <p className="home__trending-category-item-numbers"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
