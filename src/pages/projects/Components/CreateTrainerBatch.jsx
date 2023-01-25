import * as React from 'react';
import {Button,Box,TextField,Stack, CardContent,Card} from '@mui/material/';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateTrainerBatch() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(dayjs('2022-04-07'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
       New Training Batch
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', bgcolor: '#ed6c02' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Self Shakti
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Card style={{marginTop:20}}>
            <CardContent>
            <Stack style={{marginTop:20}}>
                <Typography>Project : njnjnnjnjn22</Typography>
                </Stack>
                <Stack style={{marginTop:20}}>
                <Typography> Partner : test Partnner 11</Typography>
                </Stack>
            </CardContent>
        </Card>
        <Stack style={{marginTop:20}}>
        <TextField
          fullWidth
          error
          id="outlined-error"
          label="Sub Village"  />
        </Stack>
        <Stack style={{marginTop:20}}>
        <TextField
          fullWidth
          error
          id="outlined-error"
          label="Number Of Participants"  />
          </Stack>
          <Stack style={{marginTop:20}}>
           <TextField
          fullWidth
          error
          id="outlined-error"
          label="Contact Person"  />
          </Stack>
        <Stack style={{marginTop:20}}>
           <TextField
          fullWidth
          error
          id="outlined-error"
          label="Contact Number"  />
          </Stack>
         <Stack style={{marginTop:40}}>
          <Typography>Day 1</Typography>
          </Stack>
          <Stack style={{marginTop:20}}>

          <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
      </Stack>

      <Stack style={{marginTop:40}}>
          <Typography>Day 2</Typography>
          </Stack>
          <Stack style={{marginTop:20}}>

          <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
      </Stack>
      </Dialog>
    </div>
  );
}