import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import Funders from './TotalFunder';
import Location from './TotalLocation';
import TotalProject from './TotalProject';
import DateRangeFilter from '../DashboardFilters/DateRangeFilter'

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
TotalFilter.propTypes = {
  isOpenFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};

export default function TotalFilter({ isOpenFilter, onOpenFilter, onCloseFilter, getData, onSumbit, same, onDateSubmit }) {
  const [selectDATA, setSelectData] = useState();
  return (
    <>
      <Drawer
        anchor="right"
        open={isOpenFilter}
        onClose={() => {
          setSelectData();
          onCloseFilter();
        }}
        PaperProps={{
          sx: { width: 280 },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography variant="subtitle1" sx={{ ml: 1 }} style={{ marginLeft: 25, color: 'black' }}>
            Filters
            {selectDATA && selectDATA === 2 && ':  Funders'}
            {selectDATA && selectDATA === 3 && ':  Projects'}
            {selectDATA && selectDATA === 7 && ': Location'}
          </Typography>
          <IconButton
            onClick={() => {
              setSelectData();
              onCloseFilter();
            }}
          >
            <Iconify icon="eva:close-fill" width={20} height={20} />
          </IconButton>
        </Stack>

        <Divider />
        <Scrollbar>
          {/* <Stack spacing={3} sx={{ p: 3 }}> */}
          <div>
            <Card style={{ backgroundColor: '#f6f8fb' }}>
              <CardContent>
                <Typography style={{ marginLeft: 10 }} variant="subtitle1" gutterBottom>
                  Categories
                </Typography>
                <Button
                  onClick={() => {
                    setSelectData(2);
                  }}
                  sx={{
                    ':hover': {
                      bgcolor: '#ffd796', // theme.palette.primary.main
                      color: '#ff7424',
                    },
                    ':focus': {
                      bgcolor: '#ffd796',
                      color: '#ff7424',
                    },
                    color: 'black',
                  }}
                >
                  Funders
                </Button>
                <Button
                  onClick={() => {
                    setSelectData(3);
                  }}
                  sx={{
                    ':hover': {
                      bgcolor: '#ffd796', // theme.palette.primary.main
                      color: '#ff7424',
                    },
                    ':focus': {
                      bgcolor: '#ffd796',
                      color: '#ff7424',
                    },
                    color: 'black',
                  }}
                >
                  Project
                </Button>
                <Button
                  onClick={() => {
                    setSelectData(7);
                  }}
                  sx={{
                    ':hover': {
                      bgcolor: '#ffd796', // theme.palette.primary.main
                      color: '#ff7424',
                    },
                    ':focus': {
                      bgcolor: '#ffd796',
                      color: '#ff7424',
                    },
                    color: 'black',
                  }}
                >
                  Location
                </Button>
                <Button
                  onClick={() => {
                    setSelectData(7);
                  }}
                  sx={{
                    ':hover': {
                      bgcolor: '#ffd796', // theme.palette.primary.main
                      color: '#ff7424',
                    },
                    ':focus': {
                      bgcolor: '#ffd796',
                      color: '#ff7424',
                    },
                    color: 'black',
                  }}
                >
                  Date Range
                </Button>
              </CardContent>
            </Card>
            <Grid style={{ marginTop: 30 }}>
              <Funders getData={getData} selectDATA={selectDATA} />
            </Grid>
            <Grid style={{ marginTop: 30 }}>
              <TotalProject getData={getData} selectDATA={selectDATA} />
            </Grid>
            {selectDATA && selectDATA === 9 && <Grid style={{ marginTop: 30 }}>
              <DateRangeFilter onDateSubmit={onDateSubmit} />
            </Grid>}


            {selectDATA === 7 && (
              <Grid style={{ marginTop: 30 }}>
                <Location
                  selectDATA={selectDATA}
                  onSumbit={(e, i) => {
                    onSumbit(e, i);
                  }}
                />
              </Grid>
            )}


          </div>
        </Scrollbar>
      </Drawer>
    </>
  );
}
