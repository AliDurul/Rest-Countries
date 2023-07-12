import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AppointmentList from "./AppoinmentList";
import { appointmentData } from "../helpers/data"
import { useState } from "react";
import Myappoinment from "./Myappoinment";

const AddModal = ({ show, dName, handleClose }) => {

  const [patientInf, setPatientInf] = useState({
    patientName: "",
    dataTime: ""
  })
  const [valuesArr, setValuesArr] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault()
    setValuesArr([...valuesArr, patientInf])
    handleClose();

  }

  const handleValues = (e) => {
    setPatientInf({ ...patientInf, [e.target.name]: e.target.value })
  }
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Appointment for {dName} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="patientName" className="form-label fw-bold ">Patient Name</label>
              <input type="text" className="form-control" id="patientName" name="patientName" aria-describedby="emailHelp"
                placeholder="Enter Your Name" onChange={handleValues} required />

            </div>
            <div className="mb-3">
              <label htmlFor="dataTime" className="form-label fw-bold">Day&Time</label>
              <input type="datetime-local" className="form-control" id="dataTime" name="dataTime" onChange={handleValues} required />
            </div>
            <Modal.Footer className="justify-content-center">
              <Button type="submit" variant="primary" >
                Submit
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>

      </Modal>
      {/* AppointmentList called */}
      <div className="container mt-5 ">
        {
          appointmentData.map((item)=> <Myappoinment item={item}/>)
        }
        {
          valuesArr.map((item, i) => <AppointmentList key={i} item={item} dname={dName} />)
        }
      </div>

    </>
  )
}

export default AddModal