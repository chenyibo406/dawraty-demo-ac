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
        }}
      />
      <button className="lock__start">
        Start now to setup the Ai Study Guide
      </button>
    </div>
  );
}

export default Lock;
