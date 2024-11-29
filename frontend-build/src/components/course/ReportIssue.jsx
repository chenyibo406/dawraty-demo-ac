import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import "./ReportIssue.css";

function ReportIssue({ onClose }) {
  const [reportText, setReportText] = useState("");

  const handleSubmit = () => {
    // Handle the submission logic here
    console.log(reportText);
    setReportText("");
    onClose();
  };

  return (
    <div className="report-overlay" onClick={onClose}>
      <div className="report-modal" onClick={(e) => e.stopPropagation()}>
        <div className="report-modal__header">
          <h2>Report an issue</h2>
          <span className="icon-wrapper close-icon" onClick={onClose}>
            <CloseIcon style={{ cursor: "pointer" }} />
          </span>
        </div>
        <p className="report-modal__description">
          Please describe an issue you are facing
        </p>
        <textarea
          className="report-modal__textarea"
          placeholder="Type your text here (Max 500 characters)"
          maxLength={500}
          value={reportText}
          onChange={(e) => setReportText(e.target.value)}
        />
        <button className="report-modal__submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default ReportIssue;
