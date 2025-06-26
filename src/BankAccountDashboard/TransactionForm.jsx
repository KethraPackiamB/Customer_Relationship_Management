import {Form, Button} from 'react-bootstrap';
import { useState } from 'react';

export const TransactionForm = ({onSave}) => {

const [customerTransactionData, setCustomerTransactionData] = useState({
  date : "",
  description : "",
  amount : "",
  type : ""
});

const updateCustomerTransactionData = (key,value) => {
  setCustomerTransactionData({
    ...customerTransactionData, [key]: value
  })
}

const handleSave = ()=> {
    onSave(customerTransactionData);

    }

   
    return(
        <div className='my-5'>
          <hr />
            <div className='container'>
              
                <h3>Add Transactions</h3>
        <Form className='my-4'>
           
        <div className='w-100 d-flex gap-3'>
          <Form.Group className="mb-3 w-25" controlId="formGroupEmail">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" onChange={(e)=>updateCustomerTransactionData("date", e.target.value)} />
      </Form.Group>
          <div className='w-25'> 
    <Form.Label>Select Person</Form.Label>
    <Form.Select aria-label="Default select example">
        <option>Select the Person</option>
      <option>Raja Murugan</option>
      <option>Bala Murugan</option>
      <option>Alagesan</option>
      <option>Selva Raj</option>
      <option>Revathi</option>
      <option>Rohini</option>
      <option>Swathi</option>
      <option>Deepika</option>
    </Form.Select>
      </div>
    <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={(e)=>updateCustomerTransactionData("description", e.target.value) }/>
      </Form.Group>
      </div>

        <div className='d-flex w-100 gap-3'>
      <Form.Group className="mb-3 w-100" controlId="formGroupEmail">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="number" onChange={(e)=>updateCustomerTransactionData("amount", e.target.value)} />
      </Form.Group>
     
     <div className='w-100'>
      <Form.Label>Type</Form.Label>
     <Form.Select aria-label="Default select example" onChange= {(e)=>updateCustomerTransactionData("type", e.target.value)} >
      <option>Select the Type</option>
      <option>Credit</option>
      <option>Debit</option>
  
    </Form.Select>
       </div>
       </div>
    </Form>
    <div className='d-flex my-4 gap-3 justify-content-end'>

     <Button variant="primary" onClick={handleSave}>Submit</Button>
     </div>
        </div>
        </div>
    )
}