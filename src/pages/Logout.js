import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const emails = ['username@gmail.com', 'user02@gmail.com'];


function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const navigate = useNavigate();
  const logoutuser = (path) => {
    //  localStorage.removeItem('userId')
    // localStorage.removeItem('userDetails')
    localStorage.clear()
    navigate('/')

  }
  const loginuser = (path) => {
    // navigate('/dashboard/app')
    navigate(-1)
  }
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog open={open} style={{ width: "100vw" }}>
      <DialogTitle style={{ textAlign: "center" }}>Are You Sure?</DialogTitle>
      <DialogContent>Do you want to logout?</DialogContent>
      <div style={{ margin: "5px", textAlign: "center" }}> <Button id="No"
        sx={{
          ':hover': {
            color: "#ffffff", bgcolor: "#ff7424"
          },
          color: "#ffffff", bgcolor: "#ff7424", borderRadius: "5px"
        }} onClick={loginuser}>No</Button>&nbsp;&nbsp;&nbsp;
        <Button sx={{
          ':hover': {
            color: "#ffffff", bgcolor: "#ff7424"
          },
          color: "#ffffff", bgcolor: "#ff7424"
        }} onClick={logoutuser} id="yes">Yes</Button>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  //   selectedValue: PropTypes.string.isRequired,
};

export default function Logout() {
  const [open, setOpen] = React.useState(true);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);

  };

  return (
    <div>

      <SimpleDialog
        // selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
