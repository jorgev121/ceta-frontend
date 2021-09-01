import { useEffect } from "react";
import LeftPageTitle from "../../components/LeftPageTitle/LeftPageTitle";
import TableCard from "../../components/TableCard/TableCard";
import Container from "reactstrap/lib/Container";

export default function PlasmaDepositTransactions({ togleDisabledFilter }) {
  useEffect(() => {
    togleDisabledFilter(false);
  }, [togleDisabledFilter]);
  const columns = [
    {
      name: "Txn Hash",
      selector: "txnHash",
      sortable: false,
    },
    {
      name: "Age",
      selector: "age",
      sortable: false,
      right: true,
    },
    {
      name: "From",
      selector: "from",
      sortable: false,
      right: true,
    },
    {
      name: "->",
      selector: "arrow",
      sortable: false,
      right: true,
    },
    {
      name: "To",
      selector: "to",
      sortable: false,
      right: true,
    },
    {
      name: "Amount",
      selector: "amount",
      sortable: false,
      right: true,
    },
    {
      name: "Token",
      selector: "token",
      sortable: false,
      right: true,
    },
  ];

  const data = [
    {
      id: 1,
      txnHash: "Conan the Barbarian",
      age: "5 mins ago",
      from: "1982",
      arrow: "->",
      to: "1982",
      amount: "1982",
      token: "1982",
    },
    {
      id: 2,
      txnHash: "Conan the Barbarian",
      age: "5 mins ago",
      from: "1982",
      arrow: "->",
      to: "1982",
      amount: "1982",
      token: "1982",
    },
    {
      id: 3,
      txnHash: "Conan the Barbarian",
      age: "5 mins ago",
      from: "1982",
      arrow: "->",
      to: "1982",
      amount: "1982",
      token: "1982",
    },
  ];

  return (
    <Container>
      <LeftPageTitle title="Transactions" />
      <TableCard columns={columns} data={data} />
    </Container>
  );
}
