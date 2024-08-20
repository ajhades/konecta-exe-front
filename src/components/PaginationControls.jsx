import React from 'react';
import { usePagination } from '../context/PaginationContext';

const PaginationControls = () => {
  const { currentPage, totalPages, handlePageChange } = usePagination();

  return (
    <div className="pagination">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          disabled={index + 1 === currentPage}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default PaginationControls;
