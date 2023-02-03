import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// material
import {
  Grid, Radio, Stack, Button, Drawer, Rating, Divider, Checkbox, FormGroup, IconButton, Typography, Chip, Card, CardContent, Box,
} from '@mui/material';


// components
import Iconify from '../../components/Iconify';
import Scrollbar from '../../components/Scrollbar';
import { ColorManyPicker } from '../../components/color-utils';
import Funders from './Funders';
import Partners from './Partners';
import Projects from './Projects';
import Location from './Location';
import SrOperationManager from './SrOperationManager'
import Participant from './Participant';
import Trainers from './Trainers';
import GelathisLead from './GelathisLead';
import DateRangeFilter from './DateRangeFilter';
import OperationManager from './OperationManager';
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


FiltersHome.propTypes = {
  isOpenFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};

export default function FiltersHome({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData, getData, onSumbit, onDateSubmit, type, resetBus }) {

  var [selectDATA, setSelectData] = useState()

  const filterPermissions = {

    Dashboard: { 1: ['1', '8', '12', '3', '7'], 2: ['1', '8', '12', '3', '7'], 3: ['6', '1', '5', '4', '8', '12', '13', '3', '7'], 4: ['1', '8', '12', '3', '7'], 5: ['1', '4', '8', '12', '3', '7'], 7: ['1', '4', '8', '12', '3', '7'], 9: ['6', '1', '5', '4', '8', '12', '13', '3', '7'], 10: ['5', '4', '3', '12', '3', '7'], 12: ['1', '3'], 13: ['1', '3', '13'] },

    Projects: { 30: ['1', '2'], 31: ['6'], 7: ['1', '2', '6'], 9: ['1', '2', '6'], 2: ['1', '2'], 4: ['1', '2'], 5: ['1', '2'], 6: ['1', '2'] },

    BusList: { 2: ['1', '2'], 3: ['1', '2'], 7: ['1', '2'], 30: ['1', '2'] },

    People: { 1: ['1', '2'], 2: ['1', '2'], 5: ['1', '2'], 32: ['1', '2'], 33: ['1', '2'], 34: ['1', '2'] },

    Demography: { 2: true, 3: true, 7: true },

    BuzzStock: { 2: true, 3: true, 7: true, 9: true }
  }


  const data = localStorage?.getItem('userId')

  // partner = 1, funder = 2, project = 3, opm = 4, trainer = 5, gelathi = 6 SOM=12 GFl=13
  const filtersHeaders = { 1: 'Partners', 2: 'Funders', 3: 'Projects', 4: 'Operation Manager', 5: 'Trainer', 6: 'Gelathi Facilitators', 12: 'Sr. Operations Manager', 13: 'Gelathi Falicitator Lead', 9: 'Date Range', 7: 'Location', 10: 'Participant', 30: 'All Bus', 31: 'All Projects', 32: 'All Buzz team Members', 33: 'Management Team', 34: 'Drivers' }


  const setData = (value) => {
    setSelectData(value)
    if (value == 30) {
      resetBus();
      onCloseFilter()
    }
  }

  useEffect(() => {
    console.log(onDateSubmit)
    setSelectData(Object.keys(filterPermissions[type])[0])
  }, [])


  const styles = {
    buttonStyle: {
      ':hover': {
        bgcolor: '#ffd796',
        color: '#ed6c02',
      },
      color: 'black',
    },
    highlightStyle: {
      background: '#ffd796',
      color: '#ed6c02',
    }
  }

  return (
    <>
      <Drawer
        anchor="right"
        open={isOpenFilter}
        onClose={() => {
          setSelectData()
          onCloseFilter()
        }}
        PaperProps={{
          sx: { width: 400, },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography variant="subtitle1" sx={{ ml: 1 }} style={{ marginLeft: 25 }}>
            Filters :  {filtersHeaders[selectDATA]}
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
          <div>
            <Card style={{ backgroundColor: '#F6F8FB', }}>
              <CardContent>
                {
                  Object.keys(filterPermissions[type]).map(f => {
                    return (filterPermissions[type][f] === true || filterPermissions[type][f].includes(data)) && <Button onClick={() => { setData(f) }}
                      sx={styles.buttonStyle} style={selectDATA == f ? styles.highlightStyle : null}>{filtersHeaders[f]}</Button>
                  })
                }
              </CardContent>
            </Card>
            {

            }
            {
              selectDATA == 1 && <Grid>
                <Partners getData={getData} selectDATA={selectDATA} />
              </Grid>
            }
            {
              selectDATA == 2 && <Grid>
                <Funders getData={getData} selectDATA={selectDATA} />
              </Grid>
            }
            {
              selectDATA == 3 && <Grid>
                <Projects getData={getData} selectDATA={selectDATA} />
              </Grid>

            }
            {
              selectDATA == 4 && <Grid>
                <OperationManager getData={getData} selectDATA={selectDATA} />
              </Grid>

            }
            {
              selectDATA == 5 && <Grid>
                <Trainers getData={getData} selectDATA={selectDATA} />
              </Grid>
            }
            {
              selectDATA == 7 && <Grid>
                <Location getData={getData} selectDATA={selectDATA} onSumbit={onSumbit} />
              </Grid>
            }
            {
              selectDATA == 9 && <Grid>
                <DateRangeFilter getData={getData} selectDATA={selectDATA} onDateSubmit={onDateSubmit} />
              </Grid>
            }
            {
              selectDATA == 10 && <Grid>
                <Participant getData={getData} selectDATA={selectDATA} />
              </Grid>
            }
            {
              selectDATA == 12 && <Grid>
                <SrOperationManager getData={getData} selectDATA={selectDATA} />
              </Grid>
            }
            {
              selectDATA == 13 && <Grid>
                <GelathisLead getData={getData} selectDATA={selectDATA} />
              </Grid>
            }
          </div>
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
