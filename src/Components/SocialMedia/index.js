import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  SocialSection,
  Social,
  SocialIcon,
  SocialDesc,
  Span,
  SpanB,
} from "./style";
const SocialMedia = () => {
  const [Socilas, SetSocials] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      SetSocials(res.data.social);
    });
  }, []);
  const SocialsData = Socilas.map((item) => {
    return (
      <Social item={item.id} key={item.id}>
        <SocialIcon className={item.icon}></SocialIcon>
        <SocialDesc>
          <Span>{item.title}</Span>
          <SpanB>{item.body}</SpanB>
        </SocialDesc>
      </Social>
    );
  });
  return <SocialSection>{SocialsData}</SocialSection>;
};

export default SocialMedia;
