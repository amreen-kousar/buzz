import { useState, useEffect } from 'react';
import { Card, Stack, Chip, Container, Typography, Grid, IconButton, } from '@mui/material';
import { Link,useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Iconify from 'src/components/Iconify';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Page from 'src/components/Page';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { AltRouteTwoTone } from '@mui/icons-material';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const Userrole = localStorage.getItem("userId")
  console.log(Userrole , "role logged in")
export default function MaterialStockList() {
  const Userrole = localStorage.getItem("userId")
  console.log(Userrole , "role logged in")
  const {state} = useLocation()
    const [clcikData, setClickData] = useState()
    const [materialStock, setmaterialStock] = useState([]);
    const [demo, setDemo] = useState([]);
const [item ,setItem] = useState([])
const [reloadMaterialData , setReloadMaterialData] = useState(false)
    const [openFilter, setOpenFilter] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [data1, setData1] = useState({});
    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };
    
  useEffect(() => {
    demoi()
    projData()
  }, []
  )
useEffect(()=>{
const materialData = []
demo.forEach((item)=>{
  materialData.push({
    stock_id: item.stock_id,
    name: item.name,
   
    quantity:null
  })

})
setmaterialStock(materialData)
console.log(materialStock, "stock details ")

}, [demo])
const id = sessionStorage?.getItem('proId');
const projData = (async) => {
  console.log(location, 'location props');
  var userDetails = JSON.parse(localStorage?.getItem('userDetails'));
  var role = JSON.parse(localStorage?.getItem('userDetails'))?.role;
  var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
  var data = JSON.stringify({
    project_id: id,
    role_id: role,
    emp_id: idvalue,
  });

  var config = {
    method: 'post',
    url: 'https://bdms.buzzwomen.org/appTest/getProjectData.php',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      setData1({ ...response.data.list });
      console.log(response.data.list, '<--------------setData1setData1');
    })
    .catch(function (error) {
      console.log(error);
    });
};


const onChangeMaterialValue = (index , quantity)=>{
  const apiData = [...materialStock]
  const changedData = apiData[index]
  changedData['quantity'] = quantity
  apiData[index]=changedData
  setmaterialStock(apiData)

console.log(materialStock , " chnaged data")
}


    const demoi = async () => {
      
        var userid = JSON.parse(localStorage.getItem('userDetails'))?.id
        var role =JSON.parse(localStorage.getItem('userDetails'))?.role
        var data = JSON.stringify({
            "project_id":state?.id
        });
     
    
        console.log(data, "checking for search",state?.id)
        const config = {
          method: 'post',
          url: 'https://bdms.buzzwomen.org/appTest/getStockItems.php', 
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          data
        };
        console.log("dataaaaaaaaaaaaa", data);
    
        axios(config)
          .then((response) => {
            console.log("responseeeeeeeeeeee", response)
            setDemo(response.data?.data)
            console.log(response.data?.data,"stockdataaaaaaaaa");
          })
          .catch((error) => {
            console.log(error);
          });
      }
      let stock = materialStock;
      
      const onSubmit = ()=>{
        var userid = JSON.parse(localStorage.getItem('userDetails'))?.id
        var role =JSON.parse(localStorage.getItem('userDetails'))?.role
        // let stock =[]
        // stock.push(materialStock)
        // var formdata = new FormData();
        
        // console.log(formdata , "formdata look")
        
        var data = JSON.stringify({
          
            "project_id": data1.project_id,
            "bus_id": data1.bus_id,
            "type": "0",
            "stock_list" :stock
        });
       
        console.log(data , "material api")
        const config = {
          method: 'post',
          url: 'https://bdms.buzzwomen.org/appTest/consumeStock.php', 
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          data :data
        };
        axios(config)
        .then(function (response) {
         if(response.status == 200){
          
         demoi()
          console.log("susscesfully added data material")
         }
         
        })
        .catch(function (error) {
          console.log(error , "failed");
        });
        console.log("submit")
        setAdmin(false)
      }
    return (
        <Page title="Buzz Stock">
        <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h5" gutterBottom>
                    <Link to="/dashboard/projects/project">
                        <IconButton>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton></Link>
                   Material Stock List 
                  {Userrole == 2?
                  
                  <IconButton  style={{ float: 'right', color: '#ff7424', position: 'absolute', right: 0, marginRight: '125px' }} onClick={
                    ()=>{
                      setAdmin(true)
                    }
                   }>
                      <Iconify style={{ color: 'black' }} icon="material-symbols:add" />
                    </IconButton>:null }
                </Typography>
                {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button> */}
            </Stack> 
            <Grid
        sx={{
          p: 1,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
        }}
      >
        <TableContainer component={Paper} sx={{justifyContent:'center',alignItems:'center',ml:10}}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 200 }}>
                <StyledTableCell>ITEM</StyledTableCell>
                <StyledTableCell>Available</StyledTableCell>
               {admin? <StyledTableCell>Add</StyledTableCell> : null }
              </TableRow>
            </TableHead>
            <TableBody>
              {demo && demo.map((row , index) => (
                <StyledTableRow >
                  <StyledTableCell component="th" scope="row">
                    {row.name} {row.id}
                  </StyledTableCell>
                  <StyledTableCell>{row.quantity_exist}</StyledTableCell>
                  {console.log(row , "data in row")}
                {
                  admin?   <StyledTableCell>{<>
                    <TextField
          required
          id="standard-required"
         onChange={
          
            (e)=>{onChangeMaterialValue(index , e.target.value) }
        
      
      }
          defaultValue=""
          variant="standard"
        />
                  </>}</StyledTableCell>
                  :null
                }
               
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {Userrole == 2?
                  
                  <IconButton  style={{ float: 'right', color: '#ff7424', position: 'absolute', right: 0, marginRight: '125px' }} onClick={
                   onSubmit
                   }>
                      <Iconify style={{ color: 'black' }} icon="material-symbols:add" />
                    </IconButton>:null }
        </Grid>
        </Container>
        </Page>

    );
}
const styles = {
    card1: {
        backgroundColor: '#f5f5f5',
        opacity: 0.9,
        marginTop: "20px",
        padding: "1rem"
    },
}