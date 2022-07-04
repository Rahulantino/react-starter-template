import {
  createTable,
  useTableInstance,
  getCoreRowModel,
} from "@tanstack/react-table";

const table = createTable();
console.log(table);

const BasicTable = () => {
  return (
    <>
      <h2>Basic Table</h2>
    </>
  );
};

export default BasicTable;
