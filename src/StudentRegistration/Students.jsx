import Button from 'react-bootstrap/Button';
import {AddStudent} from './AddStudent';
import { StudentTable } from './StudentTable';
import {useState} from 'react';

export const Students = () => {

const [showModal, setShowModal] = useState(false);

const updateShowModal = () => {
    setShowModal(true);
}

const [studentData, setStudentData] = useState([]);



    return(
        <div className='container my-4'>
            <h2>Student Registration</h2>
            <hr />
            <div className='d-flex justify-content-end my-4'>
             <Button variant="primary" onClick={updateShowModal}>Add Student</Button>
             </div>

            {showModal && <AddStudent onHide = {()=> setShowModal(false)} onSave= {(value)=>setStudentData(value)}/>}
             
             <StudentTable data = {studentData}/>
        </div>
    )
}