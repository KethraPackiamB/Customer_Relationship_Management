import { AccountSummary } from "./AccountSummary";
import {useState,useEffect} from "react";
import { TransactionList } from "./TransactionList";
import { TransactionForm } from "./TransactionForm";


export const AccountDetails = () => {
    
    const [customer, setCustomer]= useState({
        name : "BalaKrishnan",
        accountnumber : "878694906678",
        balance : 100000
    }
    );

   

    const [list,setList] =useState([]);

    const callListData = () => {
        setList([{
        date : "02-09-2022",
        description : "Slabwise NMMB charges",
        amount : 30,
        type : "debit"
    },
    {
        date : "24-09-2022",
        description : "SMS Alert Charges",
        amount : 18,
        type : "debit",
    },
    {
       date : "02-10-2022",
       description : "slabwise NMMB Charges",
       amount : 30,
       type : "debit",
     },
      {
        date : "23-05-2023",
        description : "PMJJBY renewal",
        amount : 436,
        type : "debit",
    },
     {
        date : "05-07-2023",
        description : "Debit card Annual Charges",
        amount : 113,
        type : "debit",
    },
     {
        date : "25-09-2023",
        description : "Loan Disb by savings",
        amount : 50000,
        type : "credit",
    },
     {
        date : "12-10-2023",
        description : "ATM cash RAM",
        amount : 2500,
        type : "debit",
    },
     {
        date : "13-10-2023",
        description : "Agri LN Disb by Savings",
        amount : 100000,
        type : "credit",
    },
     {
        date : "16-10-2023",
        description : "ATM Cash RAM",
        amount : 10000,
        type : "debit",
    },
     {
        date : "17-10-2023",
        description : "MILK Credit",
        amount : 9000,
        type : "credit",
    },
     {
        date : "11-11-2023",
        description : "Cash Deposit",
        amount : 60000,
        type : "credit",
    },
     {
        date : "23-11-2023",
        description : "Cash Withdrawals",
        amount : 80000,
        type : "debit",
    },
     {
        date : "02-01-2024",
        description : "FI-Tab Rupay ONUS",
        amount : 900,
        type : "debit",
    },
     {
        date : "05-01-2024",
        description : "Cash Withdrawal",
        amount : 5000,
        type : "debit",
    },
     {
        date : "03-02-2024",
        description : "Cash Deposits",
        amount : 40000,
        type : "credit",
    },
     {
        date : "23-02-2024",
        description : "ATM cash CAN",
        amount : 20000,
        type : "debit",
    },
     {
        date : "05-03-2024",
        description : "ATM cash SHA",
        amount : 10000,
        type : "debit",
    }
    ]);
    }

    useEffect(()=>{
        callListData();
    },[])

    const [updateCustomerData, setUpdateCustomerData] = useState([]);

     const handleSaveTransaction = (value) => {
    const amount = parseFloat(value.amount); // Ensure number
    let newBalance = customer.balance;

    if (value.type.toLowerCase() === "credit") {
      newBalance += amount;
    } else if (value.type.toLowerCase() === "debit") {
      newBalance -= amount;
    }

    setCustomer({ ...customer, balance: newBalance });
    setUpdateCustomerData([...updateCustomerData, value]);
  };
     
    return(
        <div>
            <AccountSummary customer={customer}/>
            {/* <TransactionList accountData = {accountData}/> */}
            <TransactionList list= {list} updateCustomerData={updateCustomerData}  />
            <TransactionForm  onSave={handleSaveTransaction}/>
        </div>
    )
}


