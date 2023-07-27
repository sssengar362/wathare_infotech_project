import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="text-center my-3" color="pink">
      <h5>We are Located in</h5>
      <p>
        Wathare Infotech Solutions Plot No. E, 3/4, MIDC, Satara, Maharashtra
        415004
      </p>
    </div>
  );
};

export default About;
