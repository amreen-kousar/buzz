import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// material
import {
  Grid,
  Radio,
  Stack,
  Button,
  Drawer,
  Rating,
  Divider,
  Checkbox,
  FormGroup,
  IconButton,
  Typography,
  Chip,
  Card,
  CardContent,
  Box,
} from '@mui/material';


// components
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import { ColorManyPicker } from '../../../components/color-utils';
import Funders from './Funders';
import Partners from './Partners';
import Projects from './Projects';
import Location from './Location';
import SrOperationManager from './SrOperationManager'
import Participant from './Participant';
import Trainers from './Trainers';
import GelathisLead from './GelathisLead';
import DateRangeFilter from './DateRangeFilter';
// ----------------------------------------------------------------------

export const SORT_BY_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'priceDesc', label: 'Price: High-Low' },
  { value: 'priceAsc', label: 'Price: Low-High' },
];
export const FILTER_GENDER_OPTIONS = ['Men', 'Women', 'Kids'];
export const FILTER_CATEGORY_OPTIONS = ['All', 'Shose', 'Apparel', 'Accessories'];
export const FILTER_RATING_OPTIONS = ['up4Star', 'up3Star', 'up2Star', 'up1Star'];
export const FILTER_PRICE_OPTIONS = [
  { value: 'below', label: 'Below $25' },
  { value: 'between', label: 'Between $25 - $75' },
  { value: 'above', label: 'Above $75' },
];
export const FILTER_COLOR_OPTIONS = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];


DashboardFilter.propTypes = {
  isOpenFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};

export default function DashboardFilter({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData, getData, onSumbit, onDateSubmit }) {
  var [selectDATA, setSelectData] = useState()
  const data = localStorage?.getItem('userId')
  const setData = (value) => {
    localStorage.setItem('selectedData', value)
    setSelectData(value)
  }
  useEffect(() => {
    localStorage.setItem('selectedData', 2)
    setSelectData(2)
  }, [])

  useEffect(() => {
    setSelectData(localStorage.getItem('selectedData'))
    console.log(selectDATA)
  }, [isOpenFilter])
 

  console.log("xncvjhdat",data)
  
  // <TextField fullWidth id="outlined-basic" label="Bus Number" required variant="outlined" value={AddUser.busNumber} onChange={(e) => { setAddUser({ ...AddUser, busNumber: e.target.value }) }} />
  return (
    <>

      <Drawer
        anchor="right"
        open={isOpenFilter}
        onClose={() => {
          // setSelectData(2)
          onCloseFilter()
          // setData()
        }}
        PaperProps={{
          sx: { width: 400 },
        }}
      >
      
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography variant="subtitle1" sx={{ ml: 1 }} style={{ marginLeft: 25, color: 'black' }}>
            Filters
            {selectDATA && selectDATA == 2 && ":  Funders"}
            {selectDATA && selectDATA == 1 && ": Partner"}
            {selectDATA && selectDATA == 3 && ": Project"}
            {selectDATA && selectDATA == 4 && ": Operation Manager"}
            {selectDATA && selectDATA == 5 && ": Trainers"}
            {selectDATA && selectDATA == 9 && ": Date Range"}
            {selectDATA && selectDATA == 7 && ": Location"}
            {selectDATA && selectDATA == 12 && ":SR.Operation Manager"}
            {selectDATA && selectDATA == 13 && ":Gelathis Facilator Leads"}
          </Typography>
          <IconButton onClick={() => {
            setSelectData()
            onCloseFilter()
          }}>
            <Iconify icon="eva:close-fill" width={20} height={20} />
          </IconButton>
        </Stack>

        <Divider />

        <Scrollbar>
          {/* <Stack spacing={3} sx={{ p: 3 }}> */}
          <div>
            <Card >
              <CardContent style={{ backgroundColor: "#F6F8FB" }}>
                {/* <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom> */}
                <Typography style={{ marginLeft: 10 }} variant="subtitle1" gutterBottom>Categories</Typography>

               
              {data==1&&<Button onClick={() => { setData(2) }}
                  sx={{
                    ':hover': {
                      bgcolor: '#ffd796', // theme.palette.primary.main
                      color: '#ed6c02',
                    },
                    color: 'black',
                  }} style={selectDATA == 2 ? {
                    background: '#ffd796', // theme.palette.primary.main
                    color: '#ed6c02',
                  } : null}>Funders</Button>}

                {data==1&&<Button onClick={() => { setData(1) }}
                  sx={{
                    ':hover': {
                      bgcolor: '#ffd796', // theme.palette.primary.main
                      color: '#ed6c02',
                    },
                    color: 'black',

                  }} style={selectDATA == 1 ? {
                    background: '#ffd796', // theme.palette.primary.main
                    color: '#ed6c02',
                  } : null}>Partner</Button>}
                {data==6|data==1&&<Button sx={{
                  ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ed6c02',
                  },
                  color: 'black',
                }}>Project</Button>}
                {data==1&&<Button sx={{
                  ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ed6c02',
                  },

                  color: 'black',
                }}>Operation Manager</Button>}

             
                {data==1&&<Button onClick={() => { setData(5) }} sx={{
                  ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ed6c02',
                  },

                  color: 'black',
                }} style={selectDATA == 5 ? {
                  background: '#ffd796', // theme.palette.primary.main
                  color: '#ed6c02',
                } : null}>Trainer</Button>}
            
               {data==6|data==1&&<Button onClick={() => { setData(9) }}
                  sx={{
                    ':hover': {
                      bgcolor: '#ffd796', // theme.palette.primary.main
                      color: '#ed6c02',
                    },
                    color: 'black'

                  }} style={selectDATA == 9 ? {
                    background: '#ffd796', // theme.palette.primary.main
                    color: '#ed6c02',
                  } : null}>Date Range</Button>}
                {data==1&&<Button onClick={() => { setData(7) }} sx={{
                  ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ed6c02',
                  },
                  color: 'black',

                }} style={selectDATA == 7 ? {
                  background: '#ffd796', // theme.palette.primary.main
                  color: '#ed6c02',
                } : null}>Location</Button>}
                {data==1&&<Button sx={{
                  ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ed6c02',
                  },
                  color: 'black',
                }}>Participant</Button>}
                {/* </Grid> */}
                {data==1&&<Button onClick={() => { setData(12) }} sx={{
                  ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ed6c02',
                  },

                  color: 'black',
                }} style={selectDATA == 12 ? {
                  background: '#ffd796', // theme.palette.primary.main
                  color: '#ed6c02',
                } : null}>Sr.Operation Manager</Button>}
                {data==1&&<Button onClick={() => { setData(13) }} s sx={{
                  ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ed6c02',
                  },

                  color: 'black',
                }} style={selectDATA == 13 ? {
                  background: '#ffd796', // theme.palette.primary.main
                  color: '#ed6c02',
                } : null}>Gelathis Facilator Leads</Button>}
              
              </CardContent>
            </Card>
            <Grid style={{ marginTop: 30 }}>
              <Funders getData={getData} selectDATA={selectDATA} />
            </Grid>
            <Grid style={{ marginTop: 30 }}>
              <Partners getData={getData} selectDATA={selectDATA} />
            </Grid>
            <Grid style={{ marginTop: 30 }}>
              <Projects getData={getData} selectDATA={selectDATA} />
            </Grid>
            {selectDATA&&selectDATA===9&&<Grid style={{ marginTop: 30 }}>
                <DateRangeFilter onDateSubmit={onDateSubmit} />
              </Grid>}
           {selectDATA&&selectDATA===7&&<Grid style={{ marginTop: 30 }}>
              <Location selectDATA={selectDATA} onSumbit={(e, i) => { onSumbit(e, i) }} />
            </Grid>}
            <Grid style={{ marginTop: 30 }}>
              <Trainers getData={getData} selectDATA={selectDATA} />
            </Grid>
            <Grid style={{ marginTop: 30 }}>
              <GelathisLead getData={getData} selectDATA={selectDATA} />
            </Grid>
            <Grid style={{ marginTop: 30 }}>
              <SrOperationManager getData={getData} selectDATA={selectDATA} />
            </Grid>

            {/* <Grid style={{ marginTop: 10 }}>
                <GelathisLead  onDateSubmit={onDateSubmit}/>
              </Grid> */}
            {/* <Grid style={{ marginTop: 30 }}>
                <Partners />
              </Grid>
              <Grid style={{ marginTop: 30 }}>
                <Projects />
              </Grid>
              <Grid style={{ marginTop: 30 }}>
                <Location />
              </Grid>
              <Grid style={{ marginTop: 30 }}>
                <SrOperationManager />
              </Grid>
              <Grid style={{ marginTop: 30 }}>
                <Participant />
              </Grid>
              <Grid style={{ marginTop: 30 }}>
                <Trainers />
              </Grid>
              <Grid style={{ marginTop: 30 }}>
                <GelathisLead />
              </Grid> */}




          </div>
          {/* </Stack> */}
        </Scrollbar>
      </Drawer>
    </>
  );
}
const styles = {
  button: {
    '&:active': {
      backgroundColor: '#ffd796',
      color: '#ed6c02'
    },
    '&:hover': {
      backgroundColor: '#ffd796',
      color: '#ed6c02'
    },
  },
}
