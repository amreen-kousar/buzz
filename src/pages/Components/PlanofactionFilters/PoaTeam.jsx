import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open,teamData,setUserId } = props;

  const handleClose = () => {
   // onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    props?.setUserId(value?.id)
    console.log(value,"<--valuevalue")
 onClose(value);
  };
 console.log(teamData,"<----teamDatateamDatateamData")
  
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Select Buzz Team Members</DialogTitle>
      <List sx={{ pt: 0 }}>
        {teamData?.map((email) => (
          <ListItem disableGutters>
            <ListItemButton onClick={() => handleListItemClick(email)} >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email?.name} />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem disableGutters>
          <ListItemButton
            autoFocus
          //  onClick={() => handleListItemClick('addAccount')}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
};

export default function PoaTeam({setUserId}) {
  const [open, setOpen] = React.useState(false);
//   const [selectedValue, setSelectedValue] = React.useState();
  const [teamData,setTeamData] = useState([])
  useEffect(()=>{
    team()
   },[]
    )
  const team = async =>{
    var data = JSON.stringify({
        "emp_id": 144,
        "team": ""
      });
      
      var config = {
        method: 'post',
        url: 'https://bdms.buzzwomen.org/appTest/getMyTeam.php',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(response.data?.data,"<--response.dataresponse.data")
        setTeamData(response.data?.data)
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
   // setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        {/* Selected: {selectedValue} */}
      </Typography>
      <br /><br></br>
      <Button variant="outlined"  onClick={handleClickOpen} style={{float:"right",color:"#ed6c02"}} sx={{
              '&:hover': {
                backgroundColor: '#ffd796',
                borderColor:"#ed6c02"
              },  
              borderColor:"#ed6c02",
              color:"#ed6c02"
            }} >
       Select Buzz Member
      </Button>
      <SimpleDialog
        teamData={teamData}
        setUserId={setUserId}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}