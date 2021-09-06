import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  PortfolioSection,
  PortSpan,
  PortTitle,
  PortUlList,
  PortItem,
  BoxDiv,
  BoxDivImg,
  BoxImgOverlay,
  OverlaySpan,
} from "./style.js";

const Portfolio = (props) => {
  const [images, SetImages] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      SetImages(res.data.portfolio);
    });
  }, []);
  const portfolioImages = images.map((ImageItem, index) => {
    return (
      <BoxDiv key={ImageItem.id} data-show={ImageItem.type}>
        <BoxDivImg src={ImageItem.image} alt={"num" + index} />
        <BoxImgOverlay>
          <OverlaySpan>Show Image</OverlaySpan>
        </BoxImgOverlay>
      </BoxDiv>
    );
  });
  return (
    <PortfolioSection>
      <PortTitle>
        <PortSpan>My</PortSpan> Portfolio
      </PortTitle>
      <PortUlList onClick={props.funTest}>
        <PortItem className="active" data-type={"all"}>
          All
        </PortItem>
        <PortItem data-type={"html"}>HTML</PortItem>
        <PortItem data-type={"photoshop"}>Photoshop</PortItem>
        <PortItem data-type={"wordpress"}>Wordpress</PortItem>
        <PortItem data-type={"mobile"}>Mobile</PortItem>
      </PortUlList>

      <div>{portfolioImages}</div>
    </PortfolioSection>
  );
};

export default Portfolio;
