import React from "react";
import "../styles/container.css";
import Navbar from "../components/navbar";

import Header from "../components/header";
import Models from "../components/models";
import Footer from "../components/footer";
import Footer2 from "../components/footer2";
import Button from "react-bootstrap/Button";
import Footerlinks from "../components/footerlinks";

const Container = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Header title={"MODELS"} />
      </div>
      <div>
        <Models />
      </div>
      <div>
        <Header title={"NEWS"} />
      </div>
      <div style={{ marginTop: "50px" }}>
        <Footer2
          date={"July 20, 2022"}
          article={"Suzuki Unveils the All-New SUV Grand Vitara in India"}
        />
        <Footer
          date={"June 30, 2022"}
          article={"Suzuki Unveils the All-New Brezza compact SUV in India"}
        />
        <Footer2
          date={"February 24, 2022"}
          article={"Suzuki Unveils the New Age Baleno in India"}
        />
        <Footer
          date={"November 25, 2021"}
          article={
            "Suzuki Announces World Premiere of an SUV, the All-new S-CROSS"
          }
        />
        <Footer2
          date={"November 22, 2021"}
          article={"Suzuki to Announce an All-new S-CROSS"}
        />
      </div>
      <div className="more-margin">
        <Button variant="link" className="More">
          MORE
        </Button>
      </div>
      <div>
        <Footerlinks />
      </div>
    </div>
  );
};
export default Container;
