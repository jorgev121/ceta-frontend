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
      name: "Rank",
      selector: "rank",
      sortable: false,
    },
    {
      name: "Address",
      selector: "address",
      sortable: false,
      right: true,
    },
    {
      name: "Name Tag",
      selector: "tag",
      sortable: false,
      right: true,
    },
    {
      name: "Balance",
      selector: "balance",
      sortable: false,
      right: true,
    },
    {
      name: "Percentage",
      selector: "percentage",
      sortable: false,
      right: true,
    },
    {
      name: "Tx Count",
      selector: "txn",
      sortable: false,
      right: true,
    },
  ];

  const data = [
    {
      id: 1,
      rank: "Conan the Barbarian",
      address: "1982",
      tag: "1982",
      balance: "1982",
      percentage: "1982",
      txn: "1982",
    },
    {
      id: 2,
      rank: "Conan the Barbarian",
      address: "1982",
      tag: "1982",
      balance: "1982",
      percentage: "1982",
      txn: "1982",
    },
    {
      id: 3,
      rank: "Conan the Barbarian",
      address: "1982",
      tag: "1982",
      balance: "1982",
      percentage: "1982",
      txn: "1982",
    },
  ];

  return (
    <Container>
      <LeftPageTitle
        title="Plasma Deposit Transactions"
        info="Deposits from Plasma bridge. "
        link="#"
      />
      <TableCard columns={columns} data={data} />
    </Container>
  );
}
