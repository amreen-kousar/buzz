import React from "react";
import { Container,Stack,Typography,IconButton } from "@mui/material";
import { Link } from 'react-router-dom';
import Iconify from '../../components/Iconify';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow';
import TableCell from "@mui/material/TableCell";


export default function AssignTargets()
{
    return(
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h5" gutterBottom>
                    <Link to="/dashboard/projects/project">
                        <IconButton>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton></Link>
                    Assign Targets
                </Typography>
           
            </Stack>
            <TableContainer >
                  <Table aria-label="customized table">
                    <TableBody>
                      <TableRow >
                        <TableCell>Project </TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell>Taluk</TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell>Partner</TableCell>
                      </TableRow>
                     
                    </TableBody>
                  </Table>
                </TableContainer>
                <Typography gutterBottom style={{textAlign:'center'}}>
                     Total Targets : 
                </Typography>

        </Container>
    )
}