import React from "react";
import "./../CSS/home.css";
// import vector from "./vector.svg";
import vector from "./../assets/img.png";

export default function Frame() {
  return (
    <div className="frame">
      <div className="div">
        <div className="movie-name">Movie Name</div>

        <div className="div-wrapper">
          <div className="text-wrapper">Newly Added</div>
        </div>

        <p className="p">Action, Drama • 2018 • 2h 35m</p>

        <p className="the-trailer-of">
          The trailer of &#34;Panther&#34; a Bangla movie starring Jeet and
          Shraddha Das in the lead role. The movie is directed by Anshuman
          Pratyush.
        </p>

        <div className="div-2">
          <button className="button">
            <img className="vector" alt="Vector" src={vector} />

            <div className="text-wrapper-2">Watch Now</div>
          </button>

          <button className="button-2">
            <div className="group-wrapper">
              <div className="group">
                <div className="overlap-wrapper">
                  <div className="overlap">
                    <div className="group-2">
                      <div className="rectangle" />

                      <div className="rectangle-2" />

                      <div className="rectangle-3" />
                    </div>

                    <div className="group-3">
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group">
                          <div className="rectangle-4" />

                          <div className="rectangle-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-wrapper-3">Watchlist</div>
          </button>
        </div>
      </div>
    </div>
  );
};
