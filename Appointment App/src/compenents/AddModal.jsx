import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AppointmentList from "./AppoinmentList";
import { useState } from "react";

const AddModal = ({ show, dName, handleClose }) => {

  const [patientInf, setPatientInf] = useState({
    patientName: "",
    dataTime: ""
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(patientInf)
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
                placeholder="Enter Your Name" />

            </div>
            <div className="mb-3">
              <label htmlFor="dataTime" className="form-label fw-bold">Day&Time</label>
              <input type="datetime-local" className="form-control" id="dataTime" name="dataTime" />
            </div>
            <div>
              <button type="submit" onClick={handleClose}>gonder</button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
              <Button type="submit" variant="primary" onClick={handleClose}>
                Submit
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
      </Modal>
      {/* AppointmentList called */}
      <AppointmentList />
    </>
  )
}

export default AddModal