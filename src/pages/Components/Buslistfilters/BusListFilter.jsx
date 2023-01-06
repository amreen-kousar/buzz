import PropTypes from 'prop-types';
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
// material
import {
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

BusListFilter.propTypes = {
  isOpenFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};

export default function BusListFilter({ isOpenFilter, onOpenFilter, onCloseFilter,clcikData }) {
  return (
    <>
      {/* <Button disableRipple color="inherit" endIcon={<Iconify icon="ic:round-filter-list" />} onClick={onOpenFilter}>
        Filters&nbsp;
      </Button> */}

      <Drawer
        anchor="right"
        open={isOpenFilter}
        onClose={onCloseFilter}
        PaperProps={{
          sx: { width: 280, },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography variant="subtitle1" sx={{ ml: 1 }}>
         Bus List Filters
          </Typography>
          <IconButton onClick={onCloseFilter}>
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
                    {/* <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons"> */}
                      {/* <Grid spacing={1} > */}
                        {/* <Button onClick={()=>{setSelectData(2)}}>Funders</Button>
8                        <Button onClick={()=>{setSelectData(1)}}>Partner</Button> */}
                        <Button>Project</Button>
                        <Button>Operation Manager</Button>

                      {/* </Grid> */}
                    {/* </ButtonGroup> */}
                    {/* <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons">
                      <Grid> */}
                        <Button>Trainer</Button>
                      {/* </Grid>
                    </ButtonGroup> */}

                    {/* <Grid spacing={2}> */}
                      {/* <Button onClick={()=>{setSelectData(9)}}>Date Range</Button>
                      <Button onClick={()=>{setSelectData(7)}}>Location</Button> */}
                      <Button>Participant</Button>
                    {/* </Grid> */}
                    <Button>Sr.Operation Manager</Button>
                    {/* <Button onClick={()=>{setSelectData(9)}}>Gelathis Facilator Leads</Button> */}
                    {/* </ButtonGroup> */}
                  {/* </Typography> */}
                </CardContent>
              </Card>
              {/* <Grid style={{ marginTop: 30 }}>
                <Funders getData={getData} selectDATA={selectDATA}/>
              </Grid>
              <Grid style={{ marginTop: 30 }}>
                <Partners getData={getData} selectDATA={selectDATA}/>
              </Grid> */}
              {/* <Grid style={{ marginTop: 30 }}>
                <DateRangeFilter onDateSubmit={onDateSubmit} />
              </Grid> */}
              {/* <Grid style={{ marginTop: 30 }}>
                <Location selectDATA={selectDATA}  onSumbit = {(e,i)=>{onSumbit(e,i)}} />
              </Grid> */}
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
