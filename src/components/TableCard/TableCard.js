import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import Table from "../Table/Table";
import "./TableCard.css";
// import { BsChevronDown } from "react-icons/bs";

export default function TableCard({ children, columns, data }) {
  // Props: titleCard or button, subtitle, columnHeader
  // console.log('TableCard', children, columns, data)

  return (
    <Card>
      <CardHeader>
        {/**Título o Componente */}
         {children}
      </CardHeader>
      <CardBody>
        <Table columns={columns} data={data} />
      </CardBody>
    </Card>
  );
}
