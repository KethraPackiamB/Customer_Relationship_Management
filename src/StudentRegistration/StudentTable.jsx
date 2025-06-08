import Table from 'react-bootstrap/Table';

export const StudentTable = ({data}) => {

    return(
        <div>
            <Table>
      <thead>
        <tr>
          <th>Register Number</th>
          <th>Student EMIS</th>
          <th>Student Name</th>
          <th>Year & Section</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
        {data.map((student)=>(
        <tr key= {student.registerNumber} >
          <td>{student.registerNumber}</td>
          <td>{student.studentEmis}</td>
          <td>{student.studentName}</td>
          <td>{student.yearAndSec}</td>
            <td>{student.course}</td>
        </tr>))}
        
      </tbody>
    </Table>
        </div>
    )
}