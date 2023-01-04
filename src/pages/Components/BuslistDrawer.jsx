import PropTypes from 'prop-types';
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
import Iconify from '../../components/Iconify';
import Scrollbar from '../../components/Scrollbar';
import { ColorManyPicker } from '../../components/color-utils';

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

BuslistDrawer.propTypes = {
  isOpenFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};

export default function BuslistDrawer({ isOpenFilter, onOpenFilter, onCloseFilter,clcikData }) {
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
          {`Bus Number : ${clcikData?.register_number}`}
          </Typography>
          <IconButton onClick={onCloseFilter}>
            <Iconify icon="eva:close-fill" width={20} height={20} />
          </IconButton>
        </Stack>

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ p: 3 }}>
            <div>
            <Card>
                <CardContent>
                <Typography style={{flexDirection:'row'}} variant="subtitle1" gutterBottom>
               Registration Date
               <Typography variant="body1" >25/12/2022</Typography>       
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
               Engine Number:
               <Typography variant="body1" gutterBottom>122132323dsd</Typography> 
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              Chasis Number:
               <Typography variant="body1" gutterBottom>jhbhb2233</Typography> 
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              Insurance Number:
               <Typography variant="body1" gutterBottom>please</Typography> 
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              Insurance Company:
               <Typography variant="body1" gutterBottom>IcICI Bank</Typography> 
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              Insurance Start Date:
               <Typography variant="body1" gutterBottom>25/12/2022</Typography> 
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              Insurance End Date:
               <Typography variant="body1" gutterBottom>25/12/2023</Typography> 
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              Last Service Date:
               <Typography variant="body1" gutterBottom>25/12/2023</Typography> 
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              Next Service Date:
               <Typography variant="body1" gutterBottom>25/12/2023</Typography> 
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              Permit Details:
               <Typography variant="body1" gutterBottom>31/12/2023</Typography> 
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
             Fitness Certificate:
               <Typography variant="body1" gutterBottom>31/12/2023</Typography> 
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              Emission Date:
               <Typography variant="body1" gutterBottom>31/12/2023</Typography> 
              </Typography>
                </CardContent>
            </Card>
             
              {/* <FormGroup>
                {FILTER_GENDER_OPTIONS.map((item) => (
                  <FormControlLabel key={item} control={<Checkbox />} label={item} />
                ))}
              </FormGroup> */}
            </div>

           
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}
