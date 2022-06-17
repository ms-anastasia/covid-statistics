import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: '№', width: 78, cellClassName: 'super-app-theme--cell' },
  { field: 'country', headerName: 'Country', width: 1162 },
  { field: 'totalConfirmed', headerName: 'Total Confirmed', width: 560 },
];

const rows = [
  { id: 1, country: 'Snow', totalConfirmed: 35},
  { id: 2, country: 'Snow', totalConfirmed: 35},
  { id: 3, country: 'Snow', totalConfirmed: 35},
  { id: 4, country: 'Snow', totalConfirmed: 35},
];

export default function DataTable() {
  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
