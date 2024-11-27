import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import lockStyles from "./Lock.css";
// import lockStyles from "./LockStyles.css";
import "./Lock.css";

function Lock() {
  return (
    <div className="lock">
      <LockOutlinedIcon
        style={{
          fontSize: "32px",
          color: "#ffffff",
          margin: "12px",
          width: "56px",
          height: "56px",
          padding: "12px",
          borderRadius: "40px",
          border: "1px solid white",
        }}
      />
      <div className="lock__start-content">
        <p> setup the Ai Study Guide</p>
        <button className="lock__start-content-button">Start now</button>
      </div>
    </div>
  );
}

export default Lock;
