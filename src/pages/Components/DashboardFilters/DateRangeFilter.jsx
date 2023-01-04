import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Iconify from '../../../components/Iconify';
import { DateRangePicker, DateRange } from 'mui-daterange-picker';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

export default function DateRangeFilter(props) {
  const [open, setOpen] = React.useState(false);
  const [dateRange, setDateRange] = React.useState({});

  const toggle = () => setOpen(!open);

  return (
    <div>
      <Card style={{ marginTop: 20 }}>
        <CardContent>
          <DateRangePicker
            open={true}
            toggle={toggle}
            onChange={(range) => {
              console.log(range, ',---randefe'), setDateRange(range);
            }}
          />{' '}
          <Button onClick={() => props?.onDateSubmit(dateRange)}>Submit</Button>
        </CardContent>
      </Card>
    </div>
  );
}
