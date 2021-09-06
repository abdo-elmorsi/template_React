import axios from "axios";
import React, { Component } from "react";
import {
  WorkSection,
  WorkTitle,
  Span,
  WorkPart,
  PartIcon,
  PartTitle,
  PartLine,
  PartDesc,
} from "./style.js";

class Work extends Component {
  state = {
    works: [],
  };
  componentDidMount() {
    axios
      .get("js/data.json")
      .then((res) => this.setState({ works: res.data.works }));
  }
  render() {
    const { works } = this.state;

    const workList = works.map((work) => {
      return (
        <WorkPart first={work.id} key={work.id}>
          <PartIcon className={work.icon_name}></PartIcon>
          <PartTitle>{work.title}</PartTitle>
          <PartLine />
          <PartDesc>{work.body}</PartDesc>
        </WorkPart>
      );
    });
    return (
      <WorkSection>
        <div className="container">
          <WorkTitle>
            <Span>My</Span> Work
          </WorkTitle>
          {workList}
        </div>
      </WorkSection>
    );
  }
}

export default Work;
