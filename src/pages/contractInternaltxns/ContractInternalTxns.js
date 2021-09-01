import { useEffect } from "react";
import LeftPageTitle from "../../components/LeftPageTitle/LeftPageTitle";
import TableCard from "../../components/TableCard/TableCard";
import Container from "reactstrap/lib/Container";

export default function ContractInternalTxns({ togleDisabledFilter }) {
  useEffect(() => {
    togleDisabledFilter(false);
  }, [togleDisabledFilter]);
  const columns = [
    {
      name: "Block",
      selector: "block",
      sortable: false,
    },
    {
      name: "Age",
      selector: "age",
      sortable: false,
      right: true,
    },
    {
      name: "Parent Txn Hash",
      selector: "parentTxnHash",
      sortable: false,
      right: true,
    },
    {
      name: "Type",
      selector: "type",
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
      name: "",
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
      name: "Value",
      selector: "value",
      sortable: false,
      right: true,
    },
  ];

  const data = [
    {
      id: 1,
      block: 18091144,
      age: "25 secs ago",
      parentTxnHash: "Conan the Barbarian",
      type: "1982",
      from: "1982",
      arrow: "->",
      to: "1982",
      value: "1982",
    },
    {
      id: 2,
      block: 18091144,
      age: "25 secs ago",
      parentTxnHash: "Conan the Barbarian",
      type: "1982",
      from: "1982",
      arrow: "->",
      to: "1982",
      value: "1982",
    },
    {
      id: 3,
      block: 18091144,
      age: "25 secs ago",
      parentTxnHash: "Conan the Barbarian",
      type: "1982",
      from: "1982",
      arrow: "->",
      to: "1982",
      value: "1982",
    },
  ];

  return (
    <Container>
      <LeftPageTitle title="Contract Internal Transactions" />
      <TableCard columns={columns} data={data} />
    </Container>
  );
}
