import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ProfileSection,
  Profile,
  ProfileUlList,
  ProfileUlLi,
  ProfileSpan,
  Skills,
  SkillsDesc,
  SkillsBar,
  BarTitle,
  BarPerc,
  BarParent,
  BarParentSpan,
  Title,
  TitleSpan,
} from "./style.js";

const Profilee = () => {
  const [skills, SetSkills] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      SetSkills(res.data.brogress);
    });
  }, []);

  const brogress = skills.map((brog) => {
    return (
      <SkillsBar key={brog.id}>
        <BarTitle>{brog.title}</BarTitle>
        <BarPerc>{brog.perc}</BarPerc>
        <BarParent>
          <BarParentSpan Perc={brog.perc}></BarParentSpan>
        </BarParent>
      </SkillsBar>
    );
  });
  return (
    <ProfileSection>
      <div className="container">
        <Profile>
          <Title>
            <TitleSpan>My </TitleSpan>Profile
          </Title>
          <ProfileUlList>
            <ProfileUlLi>
              <ProfileSpan>Name</ProfileSpan>
              Abdo Ahmed
            </ProfileUlLi>
            <ProfileUlLi>
              <ProfileSpan>Birthday</ProfileSpan>
              17/3/2001
            </ProfileUlLi>
            <ProfileUlLi>
              <ProfileSpan>Address</ProfileSpan>
              Haram Street
            </ProfileUlLi>
            <ProfileUlLi>
              <ProfileSpan>Phone</ProfileSpan>
              201019084872
            </ProfileUlLi>
            <ProfileUlLi>
              <ProfileSpan>Email</ProfileSpan>
              a60960764@gmail.com
            </ProfileUlLi>
            <ProfileUlLi>
              <ProfileSpan>Website</ProfileSpan>
              <ProfileSpan red>abdo2711.ml</ProfileSpan>
            </ProfileUlLi>
          </ProfileUlList>
        </Profile>

        <Skills>
          <Title>
            Some <TitleSpan>skills</TitleSpan>
          </Title>
          <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDesc>
          {brogress}
        </Skills>
      </div>
    </ProfileSection>
  );
};

export default Profilee;
