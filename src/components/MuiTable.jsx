import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { usePagination } from '../context/PaginationContext';
import { deleteEmployee } from '../redux/employee/actions';
import { deleteApplication } from '../redux/application/actions';
import FormDialog from './FormDialog';

export default function BasicTable() {
  const dispatch = useDispatch();
  const { currentData, fields, model } = usePagination();

  const [open, setOpen] = useState(false);

  const editItem = (a) => {
    switch(model){
      case 'employee':
        console.log('edit employees'+ a)
      break;

      case 'application':
        console.log('edit application'+ a)
      break;
  
      default:
      break;
    }
  }
  const deleteItem = async(a) => {
    switch(model){
      case 'employee':
        dispatch(deleteEmployee(a));
        console.log(`delete item ${a}`);
        break;
        
        case 'application':
        dispatch(deleteApplication(a));
        console.log(`delete item ${a}`);
      break;
  
      default:
      break;
    }
  }

  const handleClose = () => {
    setOpen(!open);
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>{fields[0].label}</TableCell>
              <TableCell align="right">{fields[1].label}</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell component="th" scope="row">
                  {row[fields[0].name]}
                </TableCell>
                <TableCell align="right">{row[fields[1].name]}</TableCell>
                <TableCell align="right">
                  <FormDialog form={fields} data={row} onSubmitForm={(row) => editItem(row)} />
                  <Button color="error" variant="contained" size="small" onClick={() => deleteItem(row.id)}>Eliminar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
