import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

const Table = ({ data, columns }) => {
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      globalFilter: filtering,
    },
    initialState: {
      pagination: { pageSize: 5, pageIndex: 0 },
    },
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="p-5 border-2 rounded-xl border-[#1dc071] bg-base-100 mb-5 ">
      <div className="flex flex-col">
        {/* filter input */}
        <div className="item-start mb-3">
          <input
            type="text"
            placeholder="Search...."
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            className="input input-bordered input-md sm:input-sm w-full max-w-xs"
          />
        </div>
        {/* table */}
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg border-gray-700">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  {table.getHeaderGroups().map((headerGroup, index) => (
                    <tr key={index}>
                      {headerGroup.headers.map((header, index) => (
                        <th
                          key={index}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row, index) => (
                      <tr key={index}>
                        {row.getVisibleCells().map((cell, index) => (
                          <td
                            key={index}
                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 font-medium select-all"
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={columns.length} className="h-24 text-center">
                        No results.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* table controller */}
        <div className="items-center justify-start py-4 space-x-2">
          <button
            className="btn_table"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </button>
          <button
            className="btn_table"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
