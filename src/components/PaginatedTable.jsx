import React from 'react';
import { usePagination } from '../context/PaginationContext';
import Button from '@mui/material/Button';
import { deleteEmployee } from '../redux/employee/actions';
import { deleteApplication } from '../redux/application/actions';
import { useDispatch } from 'react-redux';

const PaginatedTable = () => {
  const dispatch = useDispatch();
  const { currentData, fields, model } = usePagination();

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

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>{fields[0].label}</th>
          <th>{fields[1].label}</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {currentData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item[fields[0].name]}</td>
            <td>{item[fields[1].name]}</td>
            <td>
              <Button variant="contained" size="small" onClick={() => editItem(item.id)}>Editar</Button>
              <Button color="error" variant="contained" size="small" onClick={() => deleteItem(item.id)}>Eliminar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PaginatedTable;
