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
import Iconify from 'src/components/Iconify';
import Tooltip from 'src/theme/overrides/Tooltip';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open, teamData, setUserId } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    props?.setUserId(value?.id)
    props?.setName(value?.name)
    console.log(value, "<--valuevalueee")
    onClose(value);
  };
  // console.log(teamData, "<----teamDatateamDatateamData")

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle> <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
        <CloseIcon />
      </IconButton>Select Buzz Team Members</DialogTitle>
      <List sx={{ pt: 0 }}>
        {teamData?.map((email) => (

          <ListItem disableGutters>
            <ListItemButton onClick={() => handleListItemClick(email)} >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }} src={email?.profile_pic} />

              </ListItemAvatar>
              <ListItemText primary={email?.name} />
            </ListItemButton>
          </ListItem>

        ))}

        {/* <ListItem disableGutters>
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
        </ListItem> */}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  //   selectedValue: PropTypes.string.isRequired,
};

export default function PoaTeam({ setUserId ,setName}) {
  const [open, setOpen] = React.useState(false);
  //   const [selectedValue, setSelectedValue] = React.useState();
  const [teamData, setTeamData] = useState([])
  useEffect(() => {
    team()
  }, []
  )
  const team = async => {
    var data = JSON.stringify({
      "emp_id": 192,
      "team": ""
    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getMyTeam.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data?.data, "<--response.dataresponse.data")
        setTeamData(response.data?.data)
        console.log(response.data);
        console.log(response.data?.data[0]?.profile_pic, "---------------->")
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
      <Button onClick={handleClickOpen} style={{ float: "right", color: "#ff7424", margin: 10, marginTop: 22 }} sx={{
        '&:hover': {
          backgroundColor: '#ffd796',
          borderColor: "#ff7424",

        },
        borderColor: "#ff7424",
        color: "#ff7424",
        backgroundColor: '#ffd796',
      }} >
        <Iconify icon="mdi:people" style={{ width: '30px', height: '30px' }}></Iconify>
      </Button>
      <SimpleDialog
        teamData={teamData}
        setUserId={setUserId}
        setName={setName}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}