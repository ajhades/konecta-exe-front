import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const PaginationContext = createContext();

// Proveedor de contexto
export const PaginationProvider = ({ children, data, rowsPerPage, fields }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const currentData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <PaginationContext.Provider value={{ currentPage, totalPages, currentData, fields, handlePageChange }}>
      {children}
    </PaginationContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const usePagination = () => {
  return useContext(PaginationContext);
};
