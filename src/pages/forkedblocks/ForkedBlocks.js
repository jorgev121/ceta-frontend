import { useEffect } from "react";
import LeftPageTitle from "../../components/LeftPageTitle/LeftPageTitle";
import TableCard from "../../components/TableCard/TableCard";
import Container from "reactstrap/lib/Container";

export default function ForkedBlocks({ togleDisabledFilter }) {
  useEffect(() => {
    togleDisabledFilter(false);
  }, [togleDisabledFilter]);
  const columns = [
    {
      name: "Height",
      selector: "height",
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
      name: "Uncles",
      selector: "uncles",
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
      name: "Gas Limit",
      selector: "gasLimit",
      sortable: false,
      right: true,
    },
    {
      name: "Difficulty",
      selector: "difficulty",
      sortable: false,
      right: true,
    },
    {
      name: "Reward",
      selector: "reward",
      sortable: false,
      right: true,
    },
    {
      name: "ReorgDepth",
      selector: "reorgDepth",
      sortable: false,
      right: true,
    },
  ];

  const data = [
    {
      id: 1,
      height: "18095217",
      age: "21 secs ago",
      txn: "1982",
      uncles: 0,
      validator: "1982",
      gasLimit: "1982",
      difficulty: "0.000 TH",
      reward: "0.83425 MATIC",
      reorgDepth: 7,
    },
    {
      id: 2,
      height: "18095217",
      age: "21 secs ago",
      txn: "1982",
      uncles: 0,
      validator: "1982",
      gasLimit: "1982",
      difficulty: "0.000 TH",
      reward: "0.83425 MATIC",
      reorgDepth: 7,
    },
    {
      id: 3,
      height: "18095217",
      age: "21 secs ago",
      txn: "1982",
      uncles: 0,
      validator: "1982",
      gasLimit: "1982",
      difficulty: "0.000 TH",
      reward: "0.83425 MATIC",
      reorgDepth: 7,
    },
  ];

  return (
    <Container>
      <LeftPageTitle
        title="Forked Blocks"
        bottomText='Excluded blocks as a result of "Chain Reorganizations"'
      />
      <TableCard columns={columns} data={data} />
    </Container>
  );
}
