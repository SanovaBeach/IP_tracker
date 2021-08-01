import React from "react";
import "./info.scss";

const Info = () => {
  return (
    <>
      <div className="Info">
        <div className="Info_container">
          <div className="Info_column">
            <p className="Info_desc">IP Address</p>
            <p className="Info_ip">IP Address goes here</p>
          </div>
          <div className="Info_column">
            <p className="Info_desc">Location</p>
            <p className="Info_ip">Location here</p>
          </div>
          <div className="Info_column">
            <p className="Info_desc">Time Zone</p>
            <p className="Info_ip">Time Zone here</p>
          </div>
          <div className="Info_column">
            <p className="Info_desc">ISP</p>
            <p className="Info_ip">spaceX</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
