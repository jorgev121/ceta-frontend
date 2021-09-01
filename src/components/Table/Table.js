import React from "react";
import DataTable from "react-data-table-component";
import { customStyles } from "./StyleTable";

export default function Table({ columns, data }) {
  return (
    <DataTable
      className="table-responsive"
      noHeader
      title=""
      columns={columns}
      data={data}
      pagination
      highlightOnHover
      customStyles={customStyles}
      paginationPerPage={25}
    />
  );
}
