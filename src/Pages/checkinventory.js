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
  { id: 'inventoryId', label: 'Inventory ID', minWidth: 170 },
  { id: 'productId', label: 'Product ID', minWidth: 170 },
  { id: 'supplierId', label: 'Supplier ID', minWidth: 170 },
  { id: 'batchNumber', label: 'Batch Number', minWidth: 170 },
  { id: 'purchaseDate', label: 'Purchase Date', minWidth: 170 },
  { id: 'manufacturedDate', label: 'Manufactured Date', minWidth: 170 },
  { id: 'purchasePrice', label: 'Purchase Price', minWidth: 170 },
  { id: 'quantity', label: 'Quantity', minWidth: 170 },
  { id: 'expirationDate', label: 'Expiration Date', minWidth: 170 },
];

const rows = [
  { inventoryId: 1, productId: 101, supplierId: 201, batchNumber: '123ABC', purchaseDate: '2024-05-01', manufacturedDate: '2023-12-15', purchasePrice: 50.00, quantity: 100, expirationDate: '2025-05-01' },
  { inventoryId: 2, productId: 102, supplierId: 202, batchNumber: '456DEF', purchaseDate: '2024-05-02', manufacturedDate: '2024-01-20', purchasePrice: 75.00, quantity: 150, expirationDate: '2025-05-02' },
  { inventoryId: 3, productId: 103, supplierId: 203, batchNumber: '789GHI', purchaseDate: '2024-05-03', manufacturedDate: '2024-02-05', purchasePrice: 100.00, quantity: 200, expirationDate: '2025-05-03' },
  // Add more rows as needed
];

const CheckInventory = () => {
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
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.inventoryId}>
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

export default CheckInventory;
