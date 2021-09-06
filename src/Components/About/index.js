import React from "react";
import {
  CreativeSection,
  CreativeInfo,
  Title,
  TitleSpan,
  InfoDir,
  InfoDesc,
  InfoDescA,
} from "./style";

const About = () => {
  return (
    <CreativeSection>
      <div className="container">
        <CreativeInfo>
          <Title>
            <TitleSpan>This is</TitleSpan> Me
          </Title>
          <InfoDir>Creative Director</InfoDir>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est{" "}
            <InfoDescA>explicabo</InfoDescA> maxime quibusdam quaerat nihil
            aliquid aperiam deleniti, repellendus dolorum. Possimus nisi
            cupiditate ad veritatis?
          </InfoDesc>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </InfoDesc>
        </CreativeInfo>
      </div>
    </CreativeSection>
  );
};

export default About;
