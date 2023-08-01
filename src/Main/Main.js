import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'USER ID', width: 90 },
  {
    field: 'title',
    headerName: 'TITLE',
    width: 450,
    editable: true,
  },
  {
    field: 'completed',
    headerName: 'COMPLETED',
    width: 150,
    editable: true,
  },
];

const rows = [
  { id: 1, title: 'delectus aut autem', completed: 'X'},
  { id: 2, title: 'quis ut nam facilis et officia qui', completed: 'X'},
  { id: 3, title: 'fugiat veniam minus ', completed: 'X'},
  { id: 4, title: 'et porro tempora', completed: 'V'},
  { id: 5, title: 'laboriosam molitia et enim quasi adipisci quia provident ilum', completed: 'X'},
  { id: 6, title: 'Vanessa', completed: null},
  { id: 7, title: 'Claudia', completed: 'X'},
  { id: 8, title: 'Camilla', completed: 'X'},
  { id: 9, title: 'Giuseppe', completed: 'X'},
];

function Main() {
  return (
    <Box sx={{ height: 400, width: '70%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
export default Main;
