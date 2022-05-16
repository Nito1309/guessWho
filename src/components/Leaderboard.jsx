import React from "react";
import BackButton from "./form-components/BackButton";
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function createData(name, score) {
    return { name, score};
  }
const rows = [
    createData('Alan', 500),
    createData('Nito', 450),
  ];

function Leaderboard(){
    return( 
        <div id="parent" className='w-full h-screen bg-background-leaderboard bg-cover'>
            <BackButton  text={'Guess who ?'} bgcolor='#7B61FF' navigate='/'></BackButton>
            <center><h1 className='text-3xl mb-3' >Leaderboard</h1></center>
            <div id="container" className='flex justify-center w-full'>
            <div className='w-2/5'>
    <TableContainer  className='w-2/5' component={Paper}>
      <Table sx={{  }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell align="right">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></div>
    </div>
        </div>
    )
}

export default Leaderboard;