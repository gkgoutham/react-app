import React from 'react';
import DataTable from 'react-data-table-component';



const CustomDataTable = ({ data }) => {
  const columns = [
    { name: 'Name', selector: 'name', sortable: true },
    { name: 'Age', selector: 'age', sortable: true, right: true },
    { name: 'Country', selector: 'country', sortable: true },
  ];

  const tableData = data.map((item, index) => ({
    id: index + 1,
    name: item.name,
    age: item.age,
    country: item.country,
  }));

  const customStyles = {
    headCells: {
      style: {
        border: '1px solid #dee2e6',
        color: 'rgba(0,0,0,0.87)',
        fontSize: '14px',
        fontWeight: 'bold',
        backgroundColor: 'lightgrey'
      },
    },
    cells: {
      style: {
        border: '1px solid #dee2e6',
        fontSize: '12px',
      },
    },
    rows: {
      style: {
        fontSize: '12px',
      },
    },
  };
  return (
    <DataTable
      columns={columns}
      data={tableData}
      pagination
      paginationPerPage={5}
      paginationRowsPerPageOptions={[5, 10, 20]}
      striped={true}
      customStyles={customStyles}
    />
  );
};

export default CustomDataTable;
