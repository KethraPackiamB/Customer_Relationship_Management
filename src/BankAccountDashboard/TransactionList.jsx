import {Table} from "react-bootstrap";

export const TransactionList = ({list, updateCustomerData}) => {

    return(
        <div>
          <hr />
            <div className="container">
              
                <h3>Transaction Details</h3>
            <Table striped>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        
          {list?.map((data) => 
         <tr key={data.date}>
           <td>{data.date}</td>
          <td>{data.description}</td>
         <td>{data.amount}</td>
          <td>{data.type}</td>
          {/* <td>{data.country}</td> */}
        
        </tr>
      )}

          {updateCustomerData?.map((details) => 
         <tr key={details.date}>
           <td>{details.date}</td>
          <td>{details.description}</td>
         <td>{details.amount}</td>
          <td>{details.type}</td>
        
        
        </tr>
      )}
        
        
      </tbody>
    </Table>
        </div>
        </div>
    )
}