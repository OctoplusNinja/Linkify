import React from "react";
import icon from "../../assets/icon.png";
import phn from "../../assets/phn.png";
import "./featuresec.css";
import { Link } from "react-router-dom";
import { LinkifyContext } from "../../../context";

const Home = () => {
  const { theme } = React.useContext(LinkifyContext);
  return (
    <div>
      <section>
        <div className="section-header">
          <h2 className={theme === "light-theme" ? "lightfont" : "darkfont"}>
            Features
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
            quisquam!
          </p>
        </div>
        <div className="container">
          {/* container left */}
          <div className="red">
            <div className="green">
              <div className="blue">
                <div className="red">
                  <h3
                    id="l"
                    className={
                      theme === "light-theme" ? "lightfont" : "darkfont"
                    }
                  >
                    {" "}
                    Feature 1{" "}
                  </h3>
                  <p id="lp">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, voluptatum?Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Earum, obcaecati.
                  </p>
                </div>
                <span className="dot-l" id="ld">
                  <div className="green">
                    <img src={icon} alt="" id="ldot" />
                  </div>
                </span>
              </div>
            </div>

            <div className="green">
              <div className="blue">
                <div className="red">
                  <h3
                    id="l"
                    className={
                      theme === "light-theme" ? "lightfont" : "darkfont"
                    }
                  >
                    {" "}
                    Feature 2
                  </h3>
                  <p id="lp">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, nihil.Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Earum, obcaecati.
                  </p>
                </div>
                <span className="dot-l" id="ld">
                  <div className="green">
                    <img src={icon} alt="" id="ldot" />
                  </div>
                </span>
              </div>
            </div>
          </div>

          {/* container middle */}
          <div className="green">
            <img src={phn} alt="" id="ip" />
          </div>

          {/* container right */}
          <div className="red">
            <div className="green">
              <div className="blue">
                <span className="dot-r" id="rd">
                  <div className="green">
                    <img src={icon} alt="" id="rdot" />
                  </div>{" "}
                </span>
                <div className="red">
                  <h3
                    id="r"
                    className={
                      theme === "light-theme" ? "lightfont" : "darkfont"
                    }
                  >
                    Feature 3
                  </h3>
                  <p id="rp">
                    Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit. Earum,
                    obcaecati.
                  </p>
                </div>
              </div>
            </div>
            <div className="green">
              <div className="blue">
                <span className="dot-r" id="rd">
                  <div className="green">
                    <img src={icon} alt="" id="rdot" />
                  </div>{" "}
                </span>
                <div className="red">
                  <h3
                    id="r"
                    className={
                      theme === "light-theme" ? "lightfont" : "darkfont"
                    }
                  >
                    {" "}
                    Feature 4
                  </h3>
                  <p id="rp">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ad, doloremque!Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Earum, obcaecati.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
