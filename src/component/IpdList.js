import * as React from "react";
import Box from "@mui/material/Box";

import { useGetPostsQuery } from "../features/api/apiSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";

const columns = [{ field: "id", headerName: "an", width: 90 }];

const rows = [{ id: 13, lastName: "Snow", firstName: "Jon", age: 35 }];

export default function IpdList() {
  const { data, isLoading, isSuccess, isError, error } = useGetPostsQuery();
  console.log(rows);
  console.log(data);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>AN</TableCell>
              <TableCell align="right">HN</TableCell>
              <TableCell align="right">ชื่อ-สกุล</TableCell>
              <TableCell align="right">แผนก</TableCell>
              <TableCell align="right">สิทธิ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((row) => (
                <TableRow
                  key={row.an}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.an}
                  </TableCell>
                  <TableCell align="right">{row.Hn}</TableCell>
                  <TableCell align="right">{row.Fullname}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow></TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}
