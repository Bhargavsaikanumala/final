import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';

const columns = [
  { id: 'orderId', label: 'Order ID', minWidth: 170 },
  { id: 'orderDate', label: 'Order Date', minWidth: 170 },
  { id: 'totalAmount', label: 'Total Amount', minWidth: 170 },
  { id: 'pharmacistId', label: 'Pharmacist ID', minWidth: 170 },
  { id: 'supplierId', label: 'Supplier ID', minWidth: 170 },
];

const rows = [
  { orderId: 1, orderDate: '2024-05-01', totalAmount: 120.50, pharmacistId: 101, supplierId: 201 },
  { orderId: 2, orderDate: '2024-05-02', totalAmount: 150.25, pharmacistId: 102, supplierId: 202 },
  { orderId: 3, orderDate: '2024-05-03', totalAmount: 175.75, pharmacistId: 103, supplierId: 203 },
  // Add more rows as needed
];

const ViewOrders = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Navbar />
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align="left"
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.orderId}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align="left">
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Footer />
    </div>
  );
};

export default ViewOrders;
