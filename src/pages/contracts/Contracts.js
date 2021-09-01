import React from "react";

import LeftPageTitle from "../../components/LeftPageTitle/LeftPageTitle";
import TableCard from "../../components/TableCard/TableCard";
import { Container } from "reactstrap";

import { FaWrench } from "react-icons/fa";
import { BsLightningFill, BsInfoCircle, BsChevronDown } from "react-icons/bs";
import { FcOk } from "react-icons/fc";
import HelpText from "../../components/HelpText/HelpText";

export default function Contracts() {
  const apiURL = "https://my-json-server.typicode.com/rauda4286/fakeapi/db";
  const datos = fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { blocks = [] } = response;
      if (Array.isArray(blocks)) {
        // console.log(blocks);
        return blocks;
      }
    });
  // console.log(datos);

  const Button = () => (
    <>
      <BsLightningFill />
      <FaWrench />
    </>
  );

  const columns = [
    {
      name: "Address",
      selector: "address",
      sortable: false,
      width: "220px",
    },
    {
      // cell: row => <div style={{fontSize: 25}}>{"Contract Name"}</div>
      name: "Contract Name",
      selector: "contractName",
      sortable: false,
      left: true,
      width: "187px",
    },
    {
      name: "Compiler",
      selector: "compiler",
      sortable: false,
      left: true,
      width: "120px",
    },
    {
      name: "Version",
      selector: "version",
      sortable: false,
      left: true,
      width: "90px",
    },
    {
      name: "Balance",
      selector: "balance",
      sortable: false,
      left: true,
      width: "86px",
    },
    {
      name: "Txns",
      selector: "txns",
      sortable: false,
      left: true,
      width: "55px",
    },
    {
      name: "Setting",
      button: true,
      cell: () => <Button />,
      center: true,
      width: "70px",
    },
    {
      name: <>Verified</>,
      selector: "verified",
      sortable: false,
      left: true,
      width: "",
    },
    {
      name: (
        <>
          {" "}
          Audited <BsInfoCircle />
        </>
      ),
      selector: "audited",
      sortable: false,
      left: true,
      width: "120px",
    },
    {
      name: (
        <>
          {" "}
          License <BsInfoCircle />
        </>
      ),
      selector: "audited",
      sortable: false,
      left: true,
      width: "120px",
    },
  ];

  const data = [
    {
      id: 1,
      address: (
        <>
          <FcOk id="verificado" />{" "}
          <HelpText target="verificado" text="Verified Code" />
          <a href="/#"> 0xc1BDcC0E8898D76D5dBD4C31D121102ac82610Be</a>
        </>
      ),
      contractName: "AWFactory",
      compiler: "Solidity",
      version: "0.8.0	",
      balance: "0 MATIC",
      txns: 2,
      difficulty: "0.000 TH",
      setting: "buttons",
      verified: "8/17/2021",
      audited: "-",
    },
    {
      id: 2,
      address: (
        <>
          <FcOk id="verificado2" />{" "}
          <HelpText target="verificado2" text="Verified Code" />
          0x14e77a6ea5b913c3666521d96a79e8a62849a28b
        </>
      ),
      contractName: "ChainlinkOracleV1",
      compiler: "Solidity",
      version: "0.6.12",
      balance: "0 MATIC",
      txns: 1,
      difficulty: "0.000 TH",
      setting: "buttons",
      verified: "8/17/2021",
      audited: "-",
    },
    {
      id: 3,
      address: (
        <>
          <FcOk id="verificado3" />{" "}
          <HelpText target="verificado3" text="Verified Code" />
          0x14e77a6ea5b913c3666521d96a79e8a62849a28b
        </>
      ),
      contractName: "ChainlinkOracleV1",
      compiler: "Solidity",
      version: "0.6.12",
      balance: "0 MATIC",
      txns: 1,
      difficulty: "0.000 TH",
      setting: "buttons",
      verified: "8/17/2021",
      audited: "-",
    },
    {
      id: 4,
      address: (
        <>
          <FcOk id="verificado4" />{" "}
          <HelpText target="verificado4" text="Verified Code" />
          0x14e77a6ea5b913c3666521d96a79e8a62849a28b
        </>
      ),
      contractName: "ChainlinkOracleV1",
      compiler: "Solidity",
      version: "0.6.12",
      balance: "0 MATIC",
      txns: 1,
      difficulty: "0.000 TH",
      setting: "buttons",
      verified: "8/17/2021",
      audited: "-",
    },
    {
      id: 5,
      address: (
        <>
          <FcOk id="" /> <HelpText target="" text="Verified Code" />
          0x14e77a6ea5b913c3666521d96a79e8a62849a28b
        </>
      ),
      contractName: "ChainlinkOracleV1",
      compiler: "Solidity",
      version: "0.6.12",
      balance: "0 MATIC",
      txns: 1,
      difficulty: "0.000 TH",
      setting: "buttons",
      verified: "8/17/2021",
      audited: "-",
    },
    {
      id: 6,
      address: (
        <>
          <FcOk id="" /> <HelpText target="" text="Verified Code" />
          0x14e77a6ea5b913c3666521d96a79e8a62849a28b
        </>
      ),
      contractName: "ChainlinkOracleV1",
      compiler: "Solidity",
      version: "0.6.12",
      balance: "0 MATIC",
      txns: 1,
      difficulty: "0.000 TH",
      setting: "buttons",
      verified: "8/17/2021",
      audited: "-",
    },
  ];
  const DropdownsFilter = () => (
    <button type="button" className="btn btn-outline-secondary btn-sm ">
      <small>
        Select View / Filter Typeondary | Latest 500 Contracts <BsChevronDown />
      </small>
    </button>
  );

  return (
    <Container>
      <LeftPageTitle
        title="Contracts"
        rightText="With verified source codes only"
      />
      <TableCard columns={columns} data={data}>
        {" "}
        <DropdownsFilter />
      </TableCard>
    </Container>
  );
}
