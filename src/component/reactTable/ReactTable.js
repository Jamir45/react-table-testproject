import React, { useMemo } from "react";
import { tableColumns, groupHeader } from "./tableUtils/columns";
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination } from "react-table";
import SearchInput from "./tableUtils/SearchInput";
import { Fab, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel } from "@material-ui/core";
import MaUTable from '@material-ui/core/Table'

import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { styled } from '@material-ui/core/styles'
const Footer = styled(TableFooter)({
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  borderTop: '1px solid black',
  '& button': {
    margin: '0px 5px'
  }
})

const ReactTable = ({ countries }) => {
  const columns = useMemo(() => tableColumns, []);
  const data = useMemo(() => countries, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    setGlobalFilter,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <TableContainer sx={{ background: '#f0f0f0' }}>
        <SearchInput inputValue={globalFilter} setInputValue={setGlobalFilter} />
        <MaUTable {...getTableProps()}>
          <TableHead>
            {headerGroups.map(headerGroup => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <TableCell
                    {...(column.id === 'selection'
                      ? column.getHeaderProps()
                      : column.getHeaderProps(column.getSortByToggleProps()))}
                  >
                    {column.render('Header')}
                    {column.id !== 'selection' ? (
                      <TableSortLabel
                        active={column.isSorted}
                        direction={column.isSortedDesc ? 'desc' : 'asc'}
                      />
                    ) : null}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <TableCell {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </MaUTable>
        <Footer>
          <div>
            <Fab
              variant="extended"
              size="small"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              <FirstPageIcon />First
            </Fab>
            <Fab
              variant="extended"
              size="small"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <ChevronLeftIcon />Previous
            </Fab>
          </div>
          <div>
            <span>
              Page <strong>{pageIndex + 1} of {pageOptions.length}</strong>
            </span>
            <span>
              | Go to page:
              <input type="number" defaultValue={pageIndex + 1} onChange={(e) => {
                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(pageNumber)
              }}
                style={{ width: '50px' }}
              />
            </span>
            <span>
              | Page Size:
              <select
                value={pageSize}
                className="pageSelection"
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                {
                  [10, 15, 20, 25].map(pageNumber => {
                    return (
                      <option value={pageNumber}>
                        Show {pageNumber}
                      </option>
                    )
                  })
                }
              </select>
            </span>
          </div>
          <div>
            <Fab
              variant="extended"
              size="small"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Next<ChevronRightIcon />
            </Fab>
            <Fab
              variant="extended"
              size="small"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              Last<LastPageIcon />
            </Fab>
          </div>
        </Footer>
      </TableContainer>
    </>
  );
};

export default ReactTable;
