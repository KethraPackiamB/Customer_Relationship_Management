export const AccountSummary = (props) =>{

return(
        <div className="container m-4">
            <div className="m-4">
            <h1>Bank Account DashBoard</h1>
            </div>
            <div className="mx-5">
                <p>Account Holder's Name : {props.customer.name}</p>
                <p>Account Number : {props.customer.accountnumber} </p>
                <p>Current Balance : {props.customer.balance} </p>
                
            </div>
            </div>

      
    )
}