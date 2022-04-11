

import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      {/* sayfanın tamamı */}
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer <span>Ercan Tekeli </span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Ercan</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, SQL, Python, Linux, HTML and CSS.
        </h4>
        <h2>
          <a href="mailto:ercantekeli@outlook.com">Send email</a> :
          ercantekeli@outlook.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
