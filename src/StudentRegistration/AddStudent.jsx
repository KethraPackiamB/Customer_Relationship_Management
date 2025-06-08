import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';

export const AddStudent = ({onHide,onSave}) => {

  const hidingModal = () => {
    onHide();
  }

  const saveModalContent = () => {
    onSave(registerNumber,studentEmis,studentName,yearAndSec,course);
    hidingModal();
  }

  const [registerNumber, setRegisterNumber] = useState({registerNumber : ""});
  const [studentEmis, setStudentEmis] = useState({studentEmis: ""});
  const [studentName, setStudentName] = useState({studentName:""});
  const [yearAndSec, setYearAndSec] = useState({yearAndSec : ""});
  const [course, setCourse] = useState({course : ""});

  const updateRegisterNumber = (value) =>{
    setRegisterNumber(registerNumber, value);
  }

  const updateStudentEmis = (value) =>{
    setStudentEmis(studentEmis,value);
  }

  const updateStudentName = (value) => {
    setStudentName(studentName,value);
  }

  const updateYearAndSec = (value) => {
    setYearAndSec(yearAndSec,value);
  }

  const updateCourse = (value) => {
    setCourse(course,value);
  }

    return(
        <div>
             <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={true} backdrop="false">
        <Modal.Header>
          <Modal.Title>Student Registration</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
              <div className='d-flex gap-3'>
      <Form.Group className="mb-3 w-50" >
        <Form.Label>Register Number</Form.Label>
        <Form.Control type="number" onChange = {(e) => updateRegisterNumber("registerNumber",e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3 w-100" >
        <Form.Label>Student EMIS</Form.Label>
        <Form.Control type="number" onChange = {(e) => updateStudentEmis("studentEmis",e.target.value)}/>
      </Form.Group>
      </div>
       <Form.Group className="mb-3" >
        <Form.Label>Student Name</Form.Label>
        <Form.Control type="text" onChange = {(e) => updateStudentName("studentName",e.target.value)}/>
      </Form.Group>
      <div className='d-flex gap-3'>
       <Form.Group className="mb-3 w-25" >
        <Form.Label>Year & Sec</Form.Label>
        <Form.Control type="text" onChange = {(e) => updateYearAndSec("yearAndSec",e.target.value)}/>
      </Form.Group>
       <Form.Group className="mb-3 w-75" >
        <Form.Label>Course</Form.Label>
        <Form.Control type="text" onChange = {(e) => updateCourse("course",e.target.value)}/>
      </Form.Group>
      </div>
    </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={hidingModal}>Close</Button>
          <Button variant="primary" onClick={saveModalContent}>Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  

        </div>
    )
}