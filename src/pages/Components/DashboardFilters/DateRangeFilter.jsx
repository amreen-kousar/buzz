
import * as React from 'react';
import dayjs from 'dayjs';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { CardContent, Stack } from '@mui/material';
import Box from '@mui/material/Box';
export default function StaticDatePickerDemo(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const [open, setOpen] = React.useState(false);
  const [dateRange, setDateRange] = React.useState({});

  return (
    <Card style={{ marginTop: 20 }} sx={{ color: "#ff7424" }} >
      <CardContent sx={{ color: "#ff7424" }}>

        <Stack>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              value={startDate}
              onChange={(newstartvalue) => {
                setStartDate(newstartvalue)
              }}
              renderInput={(params) => <TextField {...params} sx={{ color: "white" }} />}

            />
          </LocalizationProvider></Stack>
        <Stack>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              value={endDate}
              onChange={(newendvalue) => {
                setEndDate(newendvalue)
              }}
              renderInput={(params) => <TextField {...params} sx={{ color: "white" }} variant="outlined" color="" />}
            />
          </LocalizationProvider></Stack>

        <Button onClick={() => props?.onDateSubmit(dateRange)}
          sx=
          {{
            ":hover": {
              color: "#ff7424",
              bgcolor: "#ffd796"
            },

            color: "#ffffff", bgcolor: "#ff7424"
          }}>Submit</Button>
      </CardContent>
    </Card>
  );
}

