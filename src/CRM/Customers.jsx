import { AddCustomer } from './AddCustomer';
import { CustomerTable } from './CustomerTable';
import { Button } from "react-bootstrap";
import { useState } from "react";

export const Customers = () => {

    const [addCustomer,setAddCustomer] = useState(false);

    const [list, setList] = useState([]);

  const showModal = () => {
        setAddCustomer(true);
    }
  

    return(
        <div className='container'>
            
     
         <div className='d-flex justify-content-end my-4'>
        
           <Button variant="primary" onClick={showModal}>Add Customer</Button>
        </div>
       
            {addCustomer && (<AddCustomer onHide={() => setAddCustomer(false)} onSave={(value) => setList([...list,value])}/>)}
            
            <CustomerTable data={list}/>
        </div>
    )
}