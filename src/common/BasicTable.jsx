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

  console.log(instance);

  return (
    <>
      <h2>Basic Table</h2>
      <table>
        <thead>{instance.getHeaderGroups()}</thead>
      </table>
    </>
  );
};

export default BasicTable;
