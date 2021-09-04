import React from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";

const TourList = ({ tourData }) => {
  return (
    <section className="tourlist">
      {tourData.map((tour, i) => {
        return (
          <Tour
            key={tour.id}
            id={tourData[i].id}
            name={tourData[i].name}
            city={tourData[i].city}
            img={tourData[i].img}
            info={tourData[i].info}
          />
        );
      })}
    </section>
  );
};

export default TourList;
