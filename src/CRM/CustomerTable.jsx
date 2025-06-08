import { Table } from 'react-bootstrap';
export const CustomerTable = ({data}) => {
    return(
        <div className="container">
        <Table>
        <thead>
        <tr>
          <th>Customer ID</th>
          <th>Customer Name</th>
          <th>Customer Email</th>
          <th>Customer Phone</th>
          <th>Customer City</th>
        </tr>
      </thead>
      <tbody>
        {data.map((customer) => (
          <tr key={customer.customerId}>
          <td>{customer.customerId}</td>
          <td>{customer.customerName}</td>
          <td>{customer.customerEmail}</td>
          <td>{customer.customerPhone}</td>
          <td>{customer.customerCity}</td>
        </tr>
      ))}
        
       
        
      </tbody>
    </Table>
        </div>
    )
}