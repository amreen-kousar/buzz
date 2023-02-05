import Card from '@mui/material/Card';
import { useEffect } from 'react';
import CardContent from '@mui/material/CardContent';
import Iconify from '../../../components/Iconify';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
function ListTabledata(props) {
    useEffect(() => {
        console.log(props, "in List Table dataaaa")
    }, [])

    return (
        <Card >
            {props.data?.length !== 0 ? props.data?.map(itm => {
                return (
                    <TableContainer sx={{ paddingLeft: "1rem" }} ><br />
                        <Table aria-label="customized table"  >
                            <TableBody style={{ marginTop: "10px" }} >
                                <TableRow onClick={() => { props.getData({ ...itm, type: props.type }, props.selectDATA) }} >
                                    <TableCell sx={{ width: "10px" }}> <Iconify icon="mdi:user-circle" width={25} height={25} /> </TableCell>
                                    <TableCell >  {itm?.name} </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                )
            }) : null}
        </Card>
    )
}

export default ListTabledata