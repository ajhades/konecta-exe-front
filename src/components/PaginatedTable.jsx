import React from 'react';
import { usePagination } from '../context/PaginationContext';

const PaginatedTable = () => {
  const { currentData, fields } = usePagination();

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>{fields[0].label}</th>
          <th>{fields[1].label}</th>
        </tr>
      </thead>
      <tbody>
        {currentData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item[fields[0].name]}</td>
            <td>{item[fields[1].name]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PaginatedTable;
