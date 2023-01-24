import PropTypes from 'prop-types';
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';

import { useState } from 'react';

// material
import {
  Grid,
  Box,
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
  RadioGroup,
  Card,
  CardContent,
} from '@mui/material';
// components



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

// ----------------------------------------------------------------------

ProjectFilter.propTypes = {
  isOpenFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};

export default function ProjectFilter({ isOpenFilter, onOpenFilter, onCloseFilter,clcikData ,getData}) {
 const [selectDATA,setSelectData] = useState()
 const data = localStorage?.getItem('userId')
  return (
    <>
      {/* <Button disableRipple color="inherit" endIcon={<Iconify icon="ic:round-filter-list" />} onClick={onOpenFilter}>
        Filters&nbsp;
      </Button> */}

      <Drawer
        anchor="right"
        open={isOpenFilter}
        onClose={()=>{
          setSelectData()
            onCloseFilter()}}
        PaperProps={{
          sx: { width: 280, },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography variant="subtitle1" sx={{ ml: 1 }} style={{ marginLeft:25}}>
          Filters
         {selectDATA&&selectDATA===2&&":  Funders"}
         {selectDATA&&selectDATA===7&&": Location"}
          </Typography>
          <IconButton onClick={()=>{
        setSelectData()
          onCloseFilter()}}>
            <Iconify icon="eva:close-fill" width={20} height={20} />
          </IconButton>
        </Stack>

        <Divider />
        <Scrollbar>
          {/* <Stack spacing={3} sx={{ p: 3 }}> */}
            <div>
              <Card style={{backgroundColor:'#F6F8FB',}}>
                <CardContent>
                  {/* <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom> */}
                 <Typography style={{ marginLeft:10}} variant="subtitle1" gutterBottom>Categories</Typography>
                      {(data==1|data==2)?<Button sx={{
                    ':hover': {
                      bgcolor: '#ffd796', // theme.palette.primary.main
                      color: '#ed6c02',
                    },
                    color: 'black',
                  }}>All Bus</Button>:null}
                   {(data==6)?<Button sx={{
                    ':hover': {
                      bgcolor: '#ffd796', // theme.palette.primary.main
                      color: '#ed6c02',
                    },
                    color: 'black',
                  }}>All Projects</Button>:null}
                     {(data==1|data==2|data==6)?<Button  sx={{
                    ':hover': {
                      bgcolor: '#ffd796', // theme.palette.primary.main
                      color: '#ed6c02',
                    },
                    color: 'black',
                  }} >
                    Location</Button>:null}
                   
                    {(data==1|data==2|data==6)? <Button sx={{
                    ':hover': {
                      bgcolor: '#ffd796', // theme.palette.primary.main
                      color: '#ed6c02',
                    },
                    color: 'black',
                  }}>Date Range</Button>:null}
                     {(data==1|data==2)?<Button  sx={{
                    ':hover': {
                      bgcolor: '#ffd796', // theme.palette.primary.main
                      color: '#ed6c02',
                    },
                    color: 'black',
                  }} 
                  >Funders</Button>:null}
                        {(data==1|data==2)?<Button sx={{
                    ':hover': {
                      bgcolor: '#ffd796', // theme.palette.primary.main
                      color: '#ed6c02',
                    },
                    color: 'black',
                  }} 
                  >Operation Manager</Button>:null}
                       {(data==1|data==2)?<Button sx={{
                    ':hover': {
                      bgcolor: '#ffd796', // theme.palette.primary.main
                      color: '#ed6c02',
                    },
                    color: 'black',
                  }}
                  >Trainer</Button>:null}
                       {(data==1|data==2)? <Button sx={{
                    ':hover': {
                      bgcolor: '#ffd796', // theme.palette.primary.main
                      color: '#ed6c02',
                    },
                    color: 'black',
                  }}>Gelathi Facilitator</Button>:null}
                   

                    
               
                      
                      
                </CardContent>
              </Card>
            
            {/* <Grid>
              <Poafunders selectDATA={selectDATA}/>
            </Grid> */}
            {/* {selectDATA===7&&<Grid style={{ marginTop: 30 }}>
                <Location selectDATA={selectDATA}  onSumbit = {(e,i)=>{onSumbit(e,i)}} />
              </Grid> } */}
              
          
            </div>
          {/* </Stack> */}
        </Scrollbar>

      </Drawer>
    </>
  );
}
