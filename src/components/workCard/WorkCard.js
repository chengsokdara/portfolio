import React from "react";

export default function WorkCard({ cardInfo }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="work-card">
      <div className="work-image-div">
        <img src={cardInfo.image} alt="PWA" className="card-image"></img>
      </div>
      <div className="work-detail-div">
        <h5 className="card-title">{cardInfo.title}</h5>
        <p className="card-subtitle">{cardInfo.description}</p>
        <p className="card-subtitle">{cardInfo.year}</p>
      </div>
      <div className="work-contribution-div">
        <span className="card-contribution">My Contributions</span>
      </div>
      <div className="work-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <p onClick={() => v.url && openUrlInNewTab(v.url)}>{v.name}</p>
          );
        })}
      </div>
    </div>
  );
}
