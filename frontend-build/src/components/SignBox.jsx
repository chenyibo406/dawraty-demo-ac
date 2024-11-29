import React, { useState } from "react";
import "./SignBox.css";
import CloseIcon from "@mui/icons-material/Close";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function SignBox({ type, onClose, onTypeChange }) {
  const [isRememberMe, setIsRememberMe] = useState(false);

  const getTitle = () => {
    switch (type) {
      case "login":
        return "Login";
      case "signup":
        return "Sign Up";
      case "instructor":
        return "Become an Instructor";
      default:
        return "";
    }
  };

  const getInfo = () => {
    switch (type) {
      case "login":
        return (
          <p className="signbox__message">
            Don't have an account yet?
            <span
              className="signbox__message-link"
              onClick={() => onTypeChange("signup")}
            >
              Sign up
            </span>
          </p>
        );
      case "signup":
        return (
          <p className="signbox__message">
            Already have an account?
            <span
              className="signbox__message-link"
              onClick={() => onTypeChange("login")}
            >
              Login
            </span>
          </p>
        );
      case "instructor":
      default:
        return null;
    }
  };

  return (
    <>
      <div className="signbox-overlay" onClick={onClose} />
      <div className="signbox">
        <div className="signbox__header">
          <h2>{getTitle()}</h2>
          <div className="icon-wrapper signbox__close" onClick={onClose}>
            <CloseIcon />
          </div>

          <div className="signbox__info">{getInfo()}</div>
        </div>

        <div className="signbox__content">
          {type === "login" && (
            <form className="signbox__form signbox__login">
              <div className="signbox__form-email">
                <p>email</p>
                <input type="email" placeholder="Email" />
              </div>
              <div className="signbox__form-password">
                <p>password</p>
                <input type="password" placeholder="Password" />
                <div className="signbox__form-reset">
                  <div
                    className="signbox__form-reset-left"
                    onClick={() => setIsRememberMe(!isRememberMe)}
                  >
                    {isRememberMe ? (
                      <CheckBoxIcon style={{ color: "#4CAF50" }} />
                    ) : (
                      <CheckBoxOutlineBlankIcon />
                    )}
                    <p>remember me</p>
                  </div>
                  <div className="signbox__form-reset-right">
                    <p>forget password</p>
                  </div>
                </div>
              </div>

              <button type="submit" className="primary-button-fill">
                Login
              </button>
            </form>
          )}
          {type === "signup" && (
            <form className="signbox__form signbox__signup">
              <div className="signbox__form-main">
                <div className="signbox__form-main-left">
                  <div className="signbox__form-name">
                    <p>name</p>
                    <input type="text" placeholder="Full Name" />
                  </div>

                  <div className="signbox__form-email">
                    <p>email</p>
                    <input type="email" placeholder="Email" />
                  </div>

                  <div className="signbox__form-name">
                    <p>password</p>
                    <input type="password" placeholder="Password" />
                  </div>
                </div>
                <div className="signbox__form-main-right">
                  <div className="signbox__form-country">
                    <p>country</p>
                    <input type="text" placeholder="Kuwait" />
                  </div>

                  <div className="signbox__form-year">
                    <p>year</p>
                    <input type="text" placeholder="Year" />
                  </div>

                  <div className="signbox__form-name">
                    <p>Specialist</p>
                    <input type="text" placeholder="Specialist" />
                  </div>
                </div>
              </div>

              <div className="signbox__form-main-bottom">
                <p>
                  By signing up, you agree to our
                  <span className="term-privacy text-link-green">
                    Terms of Use and Privacys
                  </span>
                  Policy.
                </p>
                <button type="submit" className="primary-button-fill">
                  Sign Up
                </button>
              </div>
            </form>
          )}
          {type === "instructor" && (
            <form className="signbox__form signbox__instructor">
              <div className="signbox__form-main">
                <div className="signbox__form-main-left">
                  <div className="signbox__form-name">
                    <p>name</p>
                    <input type="text" placeholder="Full Name" />
                  </div>

                  <div className="signbox__form-email">
                    <p>email</p>
                    <input type="text" placeholder="Email" />
                  </div>

                  <div className="signbox__form-password">
                    <p>password</p>
                    <input type="text" placeholder="Password" />
                  </div>

                  <div className="signbox__form-institution">
                    <p>Institution</p>
                    <input type="text" placeholder="Institution Name" />
                  </div>
                </div>

                <div className="signbox__form-main-right">
                  <div className="signbox__form-country">
                    <p>Country</p>
                    <input type="text" placeholder="Kuwait" />
                  </div>

                  <div className="signbox__form-phone">
                    <p>Phone</p>
                    <input type="text" placeholder="09" />
                  </div>

                  <div className="signbox__form-subject">
                    <p>Teaching Subject</p>
                    <input type="text" placeholder="Dentistry" />
                  </div>

                  <div className="signbox__form-title">
                    <p>Title</p>
                    <input type="text" placeholder="Doctor" />
                  </div>
                </div>
              </div>

              <div className="signbox__form-main-bottom">
                <button
                  type="submit"
                  className="upload-cv-btn light-blue-button-fill"
                >
                  upload CV
                </button>

                <div className="signbox__form-main-bottom-apply">
                  <p>
                    By registering, you agree to our
                    <span className="term-privacy text-link-green">
                      Terms of Use and Privacy Policy.
                    </span>
                  </p>
                  <button type="submit" className="primary-button-fill">
                    Apply Now
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default SignBox;
