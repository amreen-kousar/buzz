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
import GelathiFacilitator from './GelathiFacilitator';

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

export default function FiltersHome({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData, getData, onSumbit, onDateSubmit, type, resetBus, user, projectr }) {

  var [selectDATA, setSelectData] = useState()

  const filterPermissions = {

    Dashboard: [{ id: 2, roles: ['1', '8', '12', '3','11' , '9', '7'] }, { id: 1, roles: ['1', '8', '11' ,'12', '9',  '3', '7'] }, { id: 3, roles: [ '1', '4', '8', '5','6','12', '13','11' , '3', '9',  '7'] }, { id: 4, roles: ['1', '8', '12', '9','11' ,  '3',  '7'] }, { id: 5, roles: ['1',  '9', '11' ,'4', '8',  '12', '3', '7'] },{id:6,roles:['13']}, { id: 9, roles: [ '1', '9', '11' , '4', '6','8',  '5','12', '13', '3', '7'] },{ id: 7, roles: ['1', '4',  '9', '11' , '8', '12', '3', '7'] }, { id: 10, roles: ['1',  '9', '11' ,'3', '4', '5', '12',  '7'] }, { id: 12, roles: ['1', '3','11' ] }, { id: 13, roles: ['1','11' , '3'] }],

    Projects: [{ id: 31, roles: ['1', '2', '3', '4', '6'] }, { id: 7, roles: ['1', '2', '3', '4', '6'] }, { id: 9, roles: ['1', '2', '3', '4', '6'] }, { id: 2, roles: ['1', '3', '2'] }, { id: 4, roles: ['1', '3', '2'] }, { id: 5, roles: ['1', '3', '2'] }, { id: 6, roles: ['1', '3', '2'] }],

    BusList: [{ id: 30, roles: true }, { id: 3, roles: true }, { id: 2, roles: true }, { id: 7, roles: true },],

    People: [{ id: 1, roles: ['1', '3', '12', '11' ,'2'] }, { id: 2, roles: ['1', '12','11' , '3', '2'] }, { id: 32, roles: ['1', '3', '12','11' , '2'] }, { id: 33, roles: ['1', '3', '12','11' , '2'] },{ id: 5, roles: ['1', '3', '12', '11' ,'4', '2'] }, { id: 6, roles: ['1', '3', '12', '11' ,'4', '2'] }, { id: 34, roles: ['1', '4', '3','11' , '12', '2'] }, ],

    Demography: [ { id: 3, roles: true },{ id: 2, roles: true }, { id: 7, roles: true }],

    BuzzStock: [{ id: 3, roles: true }, { id: 2, roles: true }, { id: 7, roles: true }, { id: 9, roles: true }]
  }


  const data = localStorage?.getItem('userId')

  // partner = 1, funder = 2, project = 3, opm = 4, trainer = 5, gelathi = 6 SOM=12 GFl=13
  const filtersHeaders = { 1: 'Partner', 2: 'Funders', 3: 'Project', 4: 'Operation Managers', 5: 'Trainers', 6: 'Gelathi Facilitators', 12: 'Sr. Operations Manager', 13: 'Gelathi Facilitator Leads', 9: 'Date Range', 7: 'Location', 10: 'Participant', 30: 'All Bus', 31: 'All Projects', 32: 'All Buzz team Members', 33: 'Management Team', 34: 'Drivers' }


  const setData = (value) => {
    setSelectData(value)
    if (type == 'People') {
      user(1, { id: value, type: filtersHeaders[value] });
      onCloseFilter()
    }
    if (value == 30) {
      resetBus();
      onCloseFilter()
    }
    if (value == 31) {
      // call all projects
      projectr()
      onCloseFilter()
    }
  }

  useEffect(() => {
    console.log(Object.keys(filterPermissions[type]))

    if (type != 'People') {
      if (type == 'Demography' || type == 'BuzzStock' || type == 'BusList') {
        setSelectData(filterPermissions[type][0].id)
      }
      else {
        filterPermissions[type].forEach
          ((e, i, arr) => {
            console.log(e, "filterer")
            if (e.roles.includes(data)) {
              setSelectData(e?.id);
              arr.length = i + 1; // Behaves like `break`
            }
          })
      }
    }
  }, [])


  const styles = {
    buttonStyle: {
      ':hover': {
        bgcolor: '#ffd796',
        color: '#ed6c02',
      },
      color: 'black',
      marginRight: "0.5rem"
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
          setSelectData(null)
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
            setSelectData(null)
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
                  filterPermissions[type].map(f => {
                    return (f.roles === true || f.roles.includes(data)) && <Button onClick={() => { setData(f.id) }}
                      sx={styles.buttonStyle} style={selectDATA == f.id ? styles.highlightStyle : null}>{filtersHeaders[f.id]}</Button>
                  })
                }
              </CardContent>
            </Card>
          </div>

          {
            type != 'People' && <div>
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
                selectDATA == 6 && <Grid>
                  <GelathiFacilitator getData={getData} selectDATA={selectDATA} />
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
                  <Participant getData={getData} selectDATA={selectDATA} onDateSubmit={onDateSubmit} />
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
          }
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
