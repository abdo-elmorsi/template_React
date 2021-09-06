import React, { Component } from "react";
import Home from "../Home/index";
import About from "../About/index";
import Portfolio from "../Portfolio/index";
import Profile from "../Profile/index";
import SocialMedia from "../SocialMedia/index";
import Work from "../Work/index";
import Footer from "../Footer/index";

class index extends Component {
  funTest = (e) => {
    const elee = e.target.parentElement.nextElementSibling.children;
    if (e.target.tagName === "LI") {
      e.target.parentElement.querySelector("li.active").classList.remove("active");
      e.target.classList.add("active");

      const type = e.target.getAttribute("data-type");
      for (let i = 0; i < elee.length; i++) {
        if (e.target.getAttribute("data-type") === "all") {
          elee[i].classList.remove("hiddien");
        } else {
          elee[i].classList.add("hiddien");
          if (elee[i].getAttribute("data-show") === type) {
            elee[i].classList.remove("hiddien");
          }
        }
      }
    }
  };
  render() {
    return (
      <div>
        <Home />
        <Work />
        <Portfolio funTest={this.funTest} />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
      </div>
    );
  }
}

export default index;
