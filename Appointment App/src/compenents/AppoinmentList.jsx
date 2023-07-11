import React, { useState } from "react";
const AppointmentList = ({ item, dname }) => {
  const [isConsulted, setisConsulted] = useState(false);
  const handleCroos = (e) => {
    e.target.offsetParent.remove()
  }

  return (

    <div className="opp-card d-flex justify-content-between border border-success rounded-3 mt-3 p-3"
      onDoubleClick={() => setisConsulted(!isConsulted)} >
      <div>
        <h4>{item.patientName}</h4>
        <h5>{dname}</h5>
      </div>
      <div>
        <h5>Time</h5>
        <h6>{item.dataTime}</h6>
      </div>
      <div>
        <button type="button" className="btn-close danger" onClick={handleCroos} aria-label="Close" />
      </div>
      {isConsulted ? (
        <div className=" bg-danger consulted-div">consulted</div>
      ) : null}
    </div>

  );
};
export default AppointmentList;