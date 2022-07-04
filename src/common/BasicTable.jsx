import {
  createTable,
  useTableInstance,
  getCoreRowModel,
} from "@tanstack/react-table";
import { useState } from "react";

import students from "../student.json";

const table = createTable();
const defaultData = [...students];

const defaultColumns = [
  table.createDataColumn("name", {
    id: "name",
    header: "Full Name",
  }),
  table.createDataColumn("email", {
    id: "email",
    header: "Email Address",
  }),
  table.createDataColumn("phone", {
    id: "phone",
    header: "Phone Number",
  }),
  table.createDataColumn("standard", {
    id: "standard",
    header: "Class",
  }),
  table.createDataColumn("section", {
    id: "section",
    header: "Section",
  }),
  table.createDataColumn("age", {
    id: "age",
    header: "Age",
  }),
  table.createDataColumn("date_of_birth", {
    id: "date_of_birth",
    header: "Date of Birth",
    cell: (props) => new Date(props.getValue()).toDateString(),
  }),
  table.createDataColumn("date_of_admission", {
    id: "date_of_admission",
    header: "Date of Admission",
    cell: (props) => new Date(props.getValue()).toDateString(),
  }),
];

const BasicTable = () => {
  const [data, setData] = useState([...defaultData]);
  const [columns, setColumns] = useState([...defaultColumns]);

  const instance = useTableInstance(table, {
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(instance.getHeaderGroups());

  return (
    <>
      <table>
        <thead>
          {instance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : header.renderHeader()}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {instance.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{cell.renderCell()}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BasicTable;
