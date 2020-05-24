import React from "react";
import "./Works.css";
import WorkCard from "../../components/workCard/WorkCard";
import { worksSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Works() {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="works">
        <div className="works-main-div">
          <div className="works-header">
            <h1 className="heading works-heading">{worksSection.title}</h1>
            <p className="subTitle works-subtitle">{worksSection.subtitle}</p>
          </div>
          <div className="works-cards-div">
            {worksSection.workCards.map((card) => {
              return (
                <WorkCard
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    year: card.year,
                    image: card.image,
                    footer: card.footerLink,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
