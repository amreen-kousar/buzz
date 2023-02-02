import PropTypes from 'prop-types';
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import BuzzFunders from './Buzzfunders';
import { useState } from 'react';
import BuzzProjects from './Buzzprojects';
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

BuzzFilter.propTypes = {
  isOpenFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};

export default function BuzzFilter({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData, getData }) {
  const [selectDATA, setSelectData] = useState()
  const data = localStorage?.getItem('userId')
  const setData = (value) => {
    localStorage.setItem('selectedData', value)
    setSelectData(value)
  }
  return (
    <>
      {/* <Button disableRipple color="inherit" endIcon={<Iconify icon="ic:round-filter-list" />} onClick={onOpenFilter}>
        Filters&nbsp;
      </Button> */}

      <Drawer
        anchor="right"
        open={isOpenFilter}
        onClose={() => {
          setSelectData()
          onCloseFilter()
        }}
        PaperProps={{
          sx: { width: 280, },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography variant="subtitle1" sx={{ ml: 1 }} style={{ marginLeft: 25, color: 'black' }}>
            Filters
            {selectDATA && selectDATA == 2 && ":  Funders"}
            {selectDATA && selectDATA == 7 && ": Location"}
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
            <Card style={{ backgroundColor: '#f6f8fb', }}>
              <CardContent>
                {/* <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom> */}
                <Typography style={{ marginLeft: 10 }} variant="subtitle1" gutterBottom>Categories</Typography>
                {/* <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons"> */}
                {/* <Grid spacing={1} > */}
                {data == 1 | data == 2 && <Button onClick={() => { setData(3) }}
                  sx={{
                    ':hover': {
                      bgcolor: '#ffd796', // theme.palette.primary.main
                      color: '#ff7424',
                    },
                    ':focus': {
                      bgcolor: '#ffd796',
                      color: "#ff7424"
                    },
                    color: 'black',

                  }}>Project</Button>}
                {data == 1 | data == 2 && <Button onClick={() => { setData(2) }} sx={{
                  ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ff7424',
                  },
                  ':focus': {
                    bgcolor: '#ffd796',
                    color: "#ff7424"
                  },
                  color: 'black',

                }}
                  style={selectDATA == 2 ? {
                    background: '#ffd796', // theme.palette.primary.main
                    color: '#ff7424',
                  } : null}>Funders</Button>}
                {data == 1 | data == 2 && <Button sx={{
                  ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ff7424',
                  },
                  ':focus': {
                    bgcolor: '#ffd796',
                    color: "#ff7424"
                  },
                  color: 'black',

                }} >Location</Button>}
                {data == 1 | data == 2 && <Button sx={{
                  ':hover': {
                    bgcolor: '#ffd796', // theme.palette.primary.main
                    color: '#ff7424',
                  },
                  ':focus': {
                    bgcolor: '#ffd796',
                    color: "#ff7424"
                  },
                  color: 'black',

                }} >Date Range</Button>}
                {/* <Button onClick={()=>{setSelectData(1)}}>Partner</Button>   */}
                {/* <Button>Funders</Button> */}
                {/* <Button>Project</Button>
                        <Button onClick={()=>{setSelectData(7)}}>Location</Button>
                        <Button>All Bus</Button> */}

              </CardContent>
            </Card>

            <Grid>
              <BuzzFunders onClick={() => { setSelectData(2) }} selectDATA={selectDATA} />
            </Grid>

            <Grid>
              <BuzzProjects onClick={() => { setSelectData(3) }} selectDATA={selectDATA} />
            </Grid>
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
