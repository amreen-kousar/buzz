import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Stack, TextField, Grid, Divider,Box } from '@mui/material';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Edit from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link as RouterLink } from 'react-router-dom';
import Iconify from '../../components/Iconify';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  //   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  //   transition: theme.transitions.create('transform', {
  //     duration: theme.transitions.duration.shortest,
  //   }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
        }}
        avatar={
          <Avatar sx={{ bgcolor: red[500], width: 100, height: 100, marginLeft: 13 }} aria-label="recipe">
            P
          </Avatar>
        }
        // action={
        //     <Chip label="ACTIVE" size="small" color="success" variant="filled" />
        // }
      />
      <Typography variant="h6" marginLeft={13}>
        Pablo D . Horse
      </Typography>

      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body1" gutterBottom>
          Role: CEO
        </Typography>
        <Typography variant="body1" gutterBottom>
          Reporting Manager: Uthara
        </Typography>
        <Typography variant="body1" gutterBottom>
          Work : sahib@gmail.com
        </Typography>
        <Typography variant="body1" gutterBottom>
          Contact Number: 9999488304
        </Typography>
        <Typography variant="body1" gutterBottom>
          Address: Kempapura Bangalore
        </Typography>
        <Typography variant="body1" gutterBottom>
          Pincode:110058
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            Edit User
          </Button>
          {/* <Edit /> */}
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Stack mb={3} style={{ backgroundColor: '#f5f5f5', borderRadius: 9 }}>
            <Typography
              variant="h6"
              sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
              }}
            >
              Edit User Information
            </Typography>
          </Stack>
          <Card>
            <CardContent>
              <Typography variant="body1" gutterBottom>
                UserName: Sunny
              </Typography>
              <Typography variant="body1" gutterBottom>
                Role: CEO
              </Typography>
              <Typography variant="body1" mb={1.5} gutterBottom>
                Email: sahib@gmail.com
              </Typography>
            </CardContent>
          </Card>
          <Stack mb={1.5}>
            <Divider variant="middle" />
          </Stack>
          <Grid  direction={'column'} spacing={1.8} alignItems="center" justifyContent="space-between">
            <Grid item  mb={1}>
              <TextField
                fullWidth
                helperText="Mobile Number Required *"
                size="small"
                margin="dense"
                type="number"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                id="Mobile-Number"
                label="Mobile Number"
                variant="outlined"
              />
            </Grid>
            <Grid item mb={2}>
              <TextField fullWidth size="small" id="Work" label="Work" variant="outlined"  />
            </Grid>
            <Grid item mb={2}>
              <TextField
              fullWidth
                helperText="Address Required *"
                size="small"
                id="Address"
                label="Address"
                variant="outlined"
              />
            </Grid>
            <Grid item mb={2}>
              <TextField fullWidth size="small" id="Address1" label="Address1" variant="outlined" />
            </Grid>
            <Grid item mb={2}>
              <TextField fullWidth size="small" id="Address2" label="Address2" variant="outlined" />
            </Grid>
            <Grid item mb={2}>
              <TextField fullWidth size="small" id="PinCode" label="PinCode" variant="outlined" />
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:save-fill" />}>
            Save
          </Button>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}
