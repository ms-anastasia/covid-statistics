import * as React from 'react';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import { fetchCountries } from "../../services/api"

// import { createStyles, makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) =>
// createStyles({
//   root: {
//     '& div[data-rowIndex][role="row"]:nth-of-type(5n-4)': {
//       color: "blue",
//       fontSize: 18,
//       //risky
//       minHeight: "60px !important",
//       height: 60,
//       "& div": {
//         minHeight: "60px !important",
//         height: 60,
//         lineHeight: "59px !important"
//       }
//     },
//     "& .MuiDataGrid-renderingZone": {
//       "& .MuiDataGrid-row": {
//         "&:nth-child(2n)": { backgroundColor: "rgba(235, 235, 235, .7)" }
//       }
//     }
//   }
// })
// );

const columns: GridColDef[] = [
  { field: 'id', headerName: '№', width: 78,},
  { field: 'country', headerName: 'Country', width: 1162 },
  { field: 'totalConfirmed', headerName: 'Total Confirmed', width: 560 },
];

const DataTable = () => {

  const [data, setData] = useState([]);

  const getCountriesData = () => {
    fetchCountries().then((data) =>
    setData(data.Countries)
    );
  }

  useEffect(() => {
    getCountriesData();
  }, []);

 const rows = data.map((row, index) => ({
  id: index+1,
  country: row.Country,
  totalConfirmed: row.TotalConfirmed
 }))

  // const classes = useStyles()
  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid
      // className={classes.root}
        rows={rows}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[12]}
      />
    </div>
  );
}
export default DataTable;
