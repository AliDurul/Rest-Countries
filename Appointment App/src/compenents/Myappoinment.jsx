import { useState } from "react";

const Myappoinment = ({ item }) => {

  const [isConsulted, setisConsulted] = useState(item.consulted);
  const handleCroos = (e) => {
    e.target.offsetParent.remove()
  }

  let objectDate = new Date();
  let day = objectDate.getDay()
  let month = objectDate.getMonth();
  let year = objectDate.getFullYear();
  let h5Date = `${month}/${day}/${year}`;

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime.toLocaleUpperCase();
  }
  return (
    <div className="opp-card d-flex justify-content-between border border-success rounded-3 mt-3 p-3"
      onDoubleClick={() => setisConsulted(!isConsulted)} >
      <div>
        <h4>{item.patient}</h4>
        <h5>{item.doctor}</h5>
      </div>
      <div>
        <h5>DateTime: {h5Date}</h5>
        <h5>Time: {formatAMPM(new Date())}</h5>
      </div>
      <div>
        <button type="button" className="btn-close danger" onClick={handleCroos} aria-label="Close" />
      </div>
      {isConsulted ? (
        <div className=" bg-danger consulted-div">consulted</div>
      ) : null}
    </div>
  )
}

export default Myappoinment