import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent } from "@mui/material";
import { writeResponse } from "../../redux/reducers/responseToDoListReducer";

const URL = "https://jsonplaceholder.typicode.com/todos";

function Main() {
  const dispatch = useDispatch();
  const responseRedux = useSelector((state) => state.responseToDoList.response);

  const columns = [
    { field: "id", headerName: "USER ID", width: 90 },
    {
      field: "title",
      headerName: "TITLE",
      width: 450,
      editable: true,
    },
    {
      field: "completed",
      headerName: "COMPLETED",
      width: 150,
      editable: true,
    },
  ];

  useEffect(() => {
    fetch(URL)
      .then((res) =>
        res.json().then((response) => dispatch(writeResponse(response)))
      )
      .catch((e) => console.log(e));
  }, []);

  return (
    <Card>
      <CardContent>
        <Box>
          <DataGrid
            rows={responseRedux}
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
      </CardContent>
    </Card>
  );
}
export default Main;
