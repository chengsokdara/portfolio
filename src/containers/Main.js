import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import Projects from "./projects/Projects";
import PersonalProjects from "./personalProjects/personalProject";
import StartupProject from "./StartupProjects/StartupProject";
// import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
// import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
// import Talks from "./talks/Talks";
// import Podcast from "./podcast/Podcast";
import Top from "./topbutton/Top";
// import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import Works from "./works/Works";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <StartupProject />
        <Works />
        <PersonalProjects />
        <Projects />
        <Blogs />
        <Skills />
        <StackProgress />
        {/* <Talks /> */}
        {/* <Twitter /> */}
        {/* <Podcast /> */}
        <Profile />
        <Footer />
        <Top />
      </div>
    );
  }
}
