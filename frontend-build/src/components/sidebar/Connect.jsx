import "./Connect.css";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Connect() {
  return (
    <div className="connect">
      <div className="connect__user">
        <div className="connect__user-info">
          <div className="connect__user-info-image">
            {/* <img src="../../assets/images/user-male.jpg" alt="user" /> */}
            <AccountCircleOutlinedIcon
              style={{
                fontSize: "40px",
                color: "#138ab4",
              }}
            />
          </div>
          <div className="connect__user-info-content">
            <h1 className="connect__user-info-content-title">Austin</h1>
            <p className="connect__user-info-content-date">
              <span>post an Q&A</span>
              <span className="dot">•</span>
              post two year ago
            </p>
          </div>
        </div>
        <div className="connect__user-request">
          <h1 className="connect__user-request-topic">
            How do I get refund from this courses?
          </h1>
          <p className="connect__user-request-content">
            Hey there! I hope you’re having a great week <br />I just wonder how
            could I get refund from this course?
          </p>
        </div>
      </div>

      <div className="connect__QA">
        <div className="connect__QA-tutor">
          <ArrowBackIosOutlinedIcon
            style={{
              color: "#138ab4",
              fontSize: "16px", // Set the desired size
              transform: "rotate(-90deg)", // Rotate the icon by 90 degrees
            }}
          />
          <div className="connect__QA-tutor-profile">
            {/* <img src="../../assets/images/user-female.jpg" alt="user" /> */}
            <AccountCircleOutlinedIcon
              style={{
                fontSize: "32px",
                color: "#138ab4",
              }}
            />
            <span className="dot">•</span>
            <p>1 reply</p>
          </div>
        </div>
        <div className="connect__QA-reply">
          Hi, Jane. You definitely can get the refund...
        </div>
        <div className="connect__QA-ask">Okay, but</div>
        <div className="connect__QA-reply">
          Hi, Jane. You definitely can get the refund...
        </div>
      </div>
    </div>
  );
}

export default Connect;
