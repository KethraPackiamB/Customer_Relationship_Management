import { Button,Modal,Form } from "react-bootstrap";
import { useState } from "react";

export const AddCustomer = ({onHide,onSave}) => {

  const [customerData, setCustomerData] = useState({
    customerId:"",
    customerName : "",
    customerEmail : "",
    customerPhone : "",
    customerCity : ""
  });

  const updateCustomerData = (key,value) => {
    setCustomerData({
      ...customerData,
      [key]: value});
  };

  const handleClose =()=>{
    onHide()
  }

  const handleSave = ()=> {
    onSave(customerData);
    handleClose();
  }
  
    return(
        
      <div className='container'>
      <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}>
      <Modal show={true} size="md" backdrop="true">
        <Modal.Header>
          <Modal.Title>Add Customers</Modal.Title>
        </Modal.Header>

        <Modal.Body>
           <Form action="/action-page.php" class="was-validated">
            <div className="d-flex gap-3">
        <Form.Group className="mb-3 w-25">
        <Form.Label>Customer ID</Form.Label>
        <Form.Control type="text" onChange={(e) => updateCustomerData("customerId", e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 w-75">
        <Form.Label>Customer Name</Form.Label>
        <Form.Control type="text" onChange={(e) => updateCustomerData("customerName", e.target.value)}/>
      </Form.Group>
      </div>
      <Form.Group className="mb-3">
        <Form.Label>Customer Email</Form.Label>
        <Form.Control type="email" onChange={(e) => updateCustomerData("customerEmail", e.target.value)}/>
      </Form.Group>
      <div className="d-flex gap-3">
      <Form.Group className="mb-3 w-100">
        <Form.Label>Customer Phone</Form.Label>
        <Form.Control type="number" onChange={(e) => updateCustomerData("customerPhone", e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3 w-100">
        <Form.Label>Customer City</Form.Label>
        <Form.Control type="text" onChange={(e) => updateCustomerData("customerCity", e.target.value)}/>
      </Form.Group>
      </div>
    </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleSave}>Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
        </div>
     
    )
}