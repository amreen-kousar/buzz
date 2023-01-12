// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Iconify from '../../../components/Iconify';
// import { DateRangePicker, DateRange } from 'mui-daterange-picker';

// const bull = (
//   <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
//     •
//   </Box>
// );

// export default function DateRangeFilter(props) {
//   const [open, setOpen] = React.useState(false);
//   const [dateRange, setDateRange] = React.useState({});

//   const toggle = () => setOpen(!open);

//   return (
//     <div>
//       <Card style={{ marginTop: 20 }}>
//         <CardContent>
//           <DateRangePicker
//             open={true}
//             toggle={toggle}
//             onChange={(range) => {
//               console.log(range, ',---randefe'), setDateRange(range);
//             }}
//           />{' '}
//           <Button onClick={() => props?.onDateSubmit(dateRange)}>Submit</Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
// import * as React from 'react';

// import TextField from '@mui/material/TextField';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';

// import Box from '@mui/material/Box';

// export default function DateRangeFilter() {
//   const [value, setValue] = React.useState([null, null]);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <StaticDateRangePicker
//         // displayStaticWrapperAs="desktop"
//         value={value}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(startProps, endProps) => (
//           <React.Fragment>
//             <TextField {...startProps} />
//             <Box sx={{ mx: 2 }}> to </Box>
//             <TextField {...endProps} />
//           </React.Fragment>
//         )}
//       />
//     </LocalizationProvider>
//   );
// }
import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { CardContent } from '@mui/material';
import Box from '@mui/material/Box';
export default function StaticDatePickerDemo(props) {
  const [value, setValue] = React.useState([null,null]);
  const [open, setOpen] = React.useState(false);
     const [dateRange, setDateRange] = React.useState({});
    //  const toggle = () => setOpen(!open);
  return (
    <Card style={{marginTop:20}} sx={{color:"#ed6c02"}} >
      <CardContent sx={{color:"#ed6c02"}}>
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <StaticDatePicker
        // displayStaticWrapperAs="desktop"
        // openTo="month"
        value={value}
        // toggle={toggle}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        sx={{color:"#ed6c02"}}
        renderInput={(params) => <TextField {...params} sx={{color:"white",bgcolor:"#ed6c02"}} />}
        // renderInput={ (startProps,endProps) =>(
        // <React.Fragment>
        //   <TextField {...startProps} />  <Box sx={{ mx: 2 }}> to </Box><TextField {...endProps}/>
        // </React.Fragment>
  // )}
      />
    </LocalizationProvider>
    <Button onClick={() => props?.onDateSubmit(dateRange)}
     sx=
     {{
      ":hover":{
            color:"#ed6c02",
            bgcolor:"#ffd796"
      },
      
      color:"#ffffff",bgcolor:"#ed6c02"}}>Submit</Button>
    </CardContent>
    </Card>
  );
}

