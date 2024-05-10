import * as React from 'react';
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
  { id: 'productId', label: 'Product ID', minWidth: 170 },
  { id: 'supplierId', label: 'Supplier ID', minWidth: 100 },
  { id: 'productName', label: 'Product Name', minWidth: 170 },
  { id: 'description', label: 'Description', minWidth: 170 },
  { id: 'category', label: 'Category', minWidth: 170 },
  { id: 'unitPrice', label: 'Unit Price', minWidth: 170 },
  { id: 'reorderLevel', label: 'Reorder Level', minWidth: 170 },
];

function createData(productId, supplierId, productName, description, category, unitPrice, reorderLevel) {
  return { productId, supplierId, productName, description, category, unitPrice, reorderLevel };
}

const rows = [
  createData(1, 101, 'Paracetamol', 'Pain reliever', 'Medicine', 5.99, 50),
  createData(2, 102, 'Aspirin', 'Anti-inflammatory', 'Medicine', 3.99, 40),
  createData(3, 103, 'Ibuprofen', 'Pain reliever', 'Medicine', 4.99, 60),
  createData(4, 104, 'Amoxicillin', 'Antibiotic', 'Medicine', 8.99, 30),
  createData(5, 105, 'Omeprazole', 'Heartburn relief', 'Medicine', 6.99, 45),
  createData(6, 106, 'Atorvastatin', 'Cholesterol management', 'Medicine', 9.99, 55),
  createData(7, 107, 'Metformin', 'Diabetes management', 'Medicine', 7.99, 35),
  createData(8, 108, 'Losartan', 'Blood pressure control', 'Medicine', 6.49, 48),
  createData(9, 109, 'Lisinopril', 'Blood pressure control', 'Medicine', 5.49, 42),
  createData(10, 110, 'Amlodipine', 'Blood pressure control', 'Medicine', 7.49, 47),
];

function StickyHeadTable() {
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
                  align={column.align}
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.productId}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
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
}

export default StickyHeadTable;
