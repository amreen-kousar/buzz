import * as React from 'react';
import Button from '@mui/material/Button';
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ photos, setPhotos, batch }) {
  console.log(batch, '<--------shownshownshown')


  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    //setShown(shown)
    setOpen(photos)
  }, [photos])

  const handleClickOpen = () => {
    setPhotos(true)
    setOpen(true);
  };

  const handleClose = () => {
    setPhotos(false)
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}>
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
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}

          </Toolbar>
        </AppBar>
        <List>
          <>

            {/* {batch?.photos?.map(itm => {
              return (
                <>
                  <img src={itm?.photo1 ? itm?.photo1 : ""} />
                  <img src={itm?.photo2 ? itm?.photo2 : ""} />
                </>
              )
            })} */}
             {photos} && 
             <div>

<div style={{display:'flex' , flexDirection:'row'}}> {(batch?.photos[0].photo1)?<img id="img-event-data" src={batch?.photos[0].photo1} style={{height:100,width:100}}/>:"No Photos Found"}
&nbsp;&nbsp;{(batch?.photos[0].photo2)?<img id="img-event-data" src={batch?.photos[0].photo2} style={{height:100,width:100}}/>:null}</div>
</div>
          </>
        </List>
      </Dialog>
    </div>
  );
}