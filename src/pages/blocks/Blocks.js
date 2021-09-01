import { useEffect } from "react";
import LeftPageTitle from "../../components/LeftPageTitle/LeftPageTitle";
import TableCard from "../../components/TableCard/TableCard";
import Container from "reactstrap/lib/Container";

export default function Blocks({ togleDisabledFilter }) {
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
      name: "Txn",
      selector: "txn",
      sortable: false,
      right: true,
    },
    {
      name: "Validator",
      selector: "validator",
      sortable: false,
      right: true,
    },
    {
      name: "Gas Used",
      selector: "gasUsed",
      sortable: false,
      right: true,
    },
    {
      name: "Gas Limit",
      selector: "gasLimit",
      sortable: false,
      right: true,
    },
    {
      name: "Reward",
      selector: "reward",
      sortable: false,
      right: true,
    },
  ];

  const data = [
    {
      id: 1,
      block: "Conan the Barbarian",
      age: "21 secs ago",
      txn: "1982",
      validator: "1982",
      gasUsed: "1982",
      gasLimit: "1982",
      reward: "0.83425 MATIC",
    },
    {
      id: 2,
      block: "Conan the Barbarian",
      age: "21 secs ago",
      txn: "1982",
      validator: "1982",
      gasUsed: "1982",
      gasLimit: "1982",
      reward: "0.83425 MATIC",
    },
    {
      id: 3,
      block: "Conan the Barbarian",
      age: "21 secs ago",
      txn: "1982",
      validator: "1982",
      gasUsed: "1982",
      gasLimit: "1982",
      reward: "0.83425 MATIC",
    },
  ];

  return (
    <Container>
      <LeftPageTitle title="Blocks" />
      <TableCard columns={columns} data={data} />
    </Container>
  );
}
