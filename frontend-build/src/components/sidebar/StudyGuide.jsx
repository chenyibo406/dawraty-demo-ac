import "./StudyGuide.css";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

function StudyGuide() {
  return (
    <div className="studyGuide">
      <div className="studyGuide__about">
        <h1 className="studyGuide__about--title">Course Title</h1>
        <p className="studyGuide__about--content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="studyGuide__object">
        <h1 className="studyGuide__object--title">Course learning objects</h1>
        <ul className="studyGuide__object--list">
          <li className="studyGuide__object--item">
            {/* <CheckOutlinedIcon /> */}
            {/* <DoneAllIcon /> */}
            <AssignmentTurnedInIcon
              style={{
                fontSize: "20px",
                color: "green",
              }}
            />
            <p>Learning Object 1</p>
          </li>
          <li className="studyGuide__object--item">
            {/* <CheckOutlinedIcon /> */}
            {/* <DoneAllIcon /> */}
            <AssignmentTurnedInIcon
              style={{
                fontSize: "20px",
                color: "green",
              }}
            />
            <p>Learning Object 2</p>
          </li>
          <li className="studyGuide__object--item">
            {/* <CheckOutlinedIcon /> */}
            {/* <DoneAllIcon /> */}
            <AssignmentTurnedInIcon
              style={{
                fontSize: "20px",
                color: "green",
              }}
            />
            <p>Learning Object 3</p>
          </li>
          {/* Add more learning objects as needed */}
        </ul>
      </div>
    </div>
  );
}

export default StudyGuide;
