import PropTypes from 'prop-types';
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';

import { useState, useEffect } from 'react';

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
import Funders from '../DashboardFilters/Funders';
import Partners from '../DashboardFilters/Partners';
import BuzzTeams from '../../Filters/BuzzTeam';
import Trainers from '../DashboardFilters/Trainers';
import Driver from '../../Filters/Driver';
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

UserFilter.propTypes = {
  isOpenFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};

export default function UserFilter({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData, getData }) {


  var [selectDATA, setSelectData] = useState()
  const userPermissions = ['1', '2']
  const data = localStorage?.getItem('userId')


  const filtersHeaders = [{ id: 9, name: 'Partners' }, { id: 8, name: 'Funders' }, { id: 5, name: 'Trainers' }, { id: 0, name: 'All Buzz team Members' }, { id: 10, name: 'Management Team' }, { id: 6, name: 'Gelathi Facilitators' }, { id: 7, name: 'Drivers' }]

  const setData = (value) => {
    localStorage.setItem('selectedData', value)
    setSelectData(value)
  }
  useEffect(() => {
    localStorage.setItem('selectedData', 1)
    setSelectData(1)
  }, [])

  useEffect(() => {
    setSelectData(localStorage.getItem('selectedData'))
  }, [isOpenFilter])

  const styles = {
    buttonStyle: {
      ':hover': {
        bgcolor: '#ffd796',
        color: '#ff7424',
      },
      color: 'black',
    },
    highlightStyle: {
      background: '#ffd796',
      color: '#ff7424',
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
          sx: { width: 280, },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography variant="subtitle1" sx={{ ml: 1 }} style={{ marginLeft: 25 }}>
            Filters
            {filtersHeaders.map(f => {
              return selectDATA == f.id && `:${f.name}`
            })}
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
            {/* <Card style={{ backgroundColor: '#F6F8FB', }}>
              <CardContent>
                {
                  filtersHeaders.map(f => {
                    return userPermissions.includes(data) && <Button onClick={() => { setData(f.id) }}
                      sx={styles.buttonStyle} style={selectDATA == f.id ? styles.highlightStyle : null}>{f.name}</Button>
                  })
                }
              </CardContent>
            </Card> */}

            {
              selectDATA == 2 && <Grid>
                <Funders getData={getData} selectDATA={selectDATA} />
              </Grid>
            }
            {
              selectDATA == 1 && <Grid>
                <Partners getData={getData} selectDATA={selectDATA} />
              </Grid>
            }
            {
              selectDATA == 0 && <Grid>
                <BuzzTeams getData={getData} selectDATA={selectDATA} />
              </Grid>

            }
            {
              selectDATA == 5 && <Grid>
                <Trainers getData={getData} selectDATA={selectDATA} />
              </Grid>
            }
            {
              selectDATA == 7 && <Grid>
                <Driver getData={getData} selectDATA={selectDATA} />
              </Grid>
            }
          </div>
        </Scrollbar>

      </Drawer>
    </>
  );
}
