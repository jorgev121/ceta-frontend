import { useEffect } from "react";
import LeftPageTitle from "../../components/LeftPageTitle/LeftPageTitle"
import TableCard from "../../components/TableCard/TableCard"
import Container from "reactstrap/lib/Container";



export default function PendingTxns ({ togleDisabledFilter }) {
  useEffect(() => {
    togleDisabledFilter(false);
  }, [togleDisabledFilter]);
  const columns = [
    {
      name: 'Txn Hash',
      selector: 'txnHash',
      sortable: false,
    },
    {
      name: 'Nonce',
      selector: 'nonce',
      sortable: true,
      right: true,
    },
    {
      name: 'Last Seen',
      selector: 'lastSeen',
      sortable: false,
      right: true,
    },
    {
      name: 'Gas Limit',
      selector: 'gasLimit',
      sortable: false,
      right: true,
    },
    {
      name: 'Gas Price',
      selector: 'gasPrice',
      sortable: false,
      right: true,
    },
    {
      name: 'From',
      selector: 'from',
      sortable: false,
      right: true,
    },
    {
      name: 'To',
      selector: 'to',
      sortable: false,
      right: true,
    },
    {
      name: 'Value',
      selector: 'value',
      sortable: false,
      right: true,
    },
  ];

  const data = [
    { id: 1, 
      txnHash: 'Conan the Barbarian', 
      nonce: '1982', 
      lastSeen: '1982', 
      gasLimit: '1982', 
      gasPrice: '1982', 
      from: '1982',
      to: '1982', 
      value: '0 MATIC', 
    }, 
    { id: 2, 
      txnHash: 'Conan the Barbarian', 
      nonce: '1982', 
      lastSeen: '1982', 
      gasLimit: '1982', 
      gasPrice: '1982', 
      from: '1982',
      to: '1982', 
      value: '0 MATIC', 
    }, 
    { id: 3, 
      txnHash: 'Conan the Barbarian', 
      nonce: '1982', 
      lastSeen: '1982', 
      gasLimit: '1982', 
      gasPrice: '1982', 
      from: '1982',
      to: '1982', 
      value: '0 MATIC', 
    }, 
   
  ];

  return <Container>
      <LeftPageTitle title="Pending Transactions" />
      <TableCard columns={columns} data={data}/>
  </Container>
}