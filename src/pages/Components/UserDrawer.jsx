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
  Card,Avatar,
  CardContent,
} from '@mui/material';
// components
import Iconify from '../../components/Iconify';
import Scrollbar from '../../components/Scrollbar';
import { ColorManyPicker } from '../../components/color-utils';
import UserEditProfile from './UserComponent/UserEditProfile';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Color } from '@mui/material';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
// ----------------------------------------------------------------------
UserDrawer.propTypes = {
  isOpenFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};

export default function UserDrawer({ isOpenFilter, onOpenFilter, onCloseFilter, users }) {

  const userDetails = localStorage?.getItem('userId')
  {console.log(userDetails,"userrrrrrrrrrrrrrrrrrr")}
  let user = JSON.parse(localStorage?.getItem('people'))

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
          sx: { width: 350 },
        }}
      >
               <AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}>
          <Toolbar>
          
          
                        <IconButton style={{color:"white",float:'left'}} onClick={onCloseFilter}>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton>
                        <Typography variant="subtitle2" style={{color:'white'}}>
                   Member Detail
          </Typography>
         
          </Toolbar>
        </AppBar>

       
        <Divider /><br />

        {userDetails&&userDetails==2&&<Stack direction={'row'} justifyContent="flex-end">
          <UserEditProfile />
          <Button style={{ float: 'right' }} sx={{
            '&:hover': {
              backgroundColor: '#ffd796',
            },
          }}><Iconify icon="ic:baseline-delete" style={{ width: '30px', height: '30px', color: '#e69138', marginRight: 0 }}></Iconify></Button>

        </Stack>}
        <Scrollbar>
          <Stack spacing={1} sx={{ px: 1 }}>
            <div>
              <Card >
                <CardContent>
                <div  style={{float:'left',paddingTop:30,paddingRight:5}}>
            <Avatar src={user?.profile_pic} alt="photoURL" />
            </div>
                 <Card sx={{px:1}}>
                 <Typography style={{ flexDirection: 'row', color: '#444444',textAlign:'center'}} variant="subtitle1" gutterBottom>{user?.first_name}&nbsp;{user?.last_name}</Typography>
                  <Typography style={{ flexDirection: 'row', color: '#444444' }} variant="subtitle1" gutterBottom>
                    Role:<span style={{ fontWeight: 100, color: '#444444' }}>{user?.role_name}</span>

                  </Typography>
                  {userDetails&&userDetails==2&&<Typography variant="subtitle1" gutterBottom style={{ color: '#444444' }}>
                   Status : <span style={{ fontWeight: 100, color: '#444444' }}>{user?.status==='1'?"Active":null}</span>
                  </Typography>}
                  <Typography variant="subtitle1" gutterBottom style={{ color: '#444444' }}>
                    Reporting Manager:<span style={{ fontWeight: 100, color: '#444444' }}>{user?.supervisorName}</span>
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom style={{ color: '#444444' }}>
                    Date Of Joining:<span style={{ fontWeight: 100, color: '#444444' }}>{user?.doj}</span> </Typography>
               </Card>
                </CardContent>
              </Card>

              {/* <FormGroup>
                {FILTER_GENDER_OPTIONS.map((item) => (
                  <FormControlLabel key={item} control={<Checkbox />} label={item} />
                ))}
              </FormGroup> */}
            </div>

            <div>
              <Card style={{ width: "auto" }}>
                <CardContent>
                  <Card variant="subtitle1" gutterBottom style={{ padding:10,color: 'white' ,textAlign:'center',borderRadius:'0px',backgroundColor:'#999999'}}>
                    Contact Information
                  </Card>
                  <Typography variant="subtitle1" gutterBottom style={{ color: '#444444' }}>
                    Mobile Number:<span style={{ fontWeight: 100, color: '#444444' }}>{user?.contactNum}</span>

                  </Typography>
                  <Typography variant="subtitle1" gutterBottom style={{ color: '#444444' }}>
                    Work: <span style={{ fontWeight: 100, color: '#444444' }}>{user?.workNum} </span>
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom style={{ color: '#444444' }}>
                    Email:<span style={{ fontWeight: 100, color: '#444444' }}> {user?.officeMailId}</span>
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom style={{ color: '#444444' }}>
                    Address:<span style={{ fontWeight: 100, color: '#444444' }}>{user?.address}</span>
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom style={{ color: '#444444' }}>
                    PinCode:<span style={{ fontWeight: 100, color: '#444444' }}>{user?.pincode}</span>
                  </Typography>
                </CardContent>
              </Card>

            </div>

            {user?.project_list.length > 0 &&

              <div>
                <Card>
                  <CardContent>
                  <Card variant="subtitle1" gutterBottom style={{ padding:10,color: 'white' ,textAlign:'center',borderRadius:'0px',backgroundColor:'#999999'}}>
                    Projects
                  </Card>
                    <Typography variant="subtitle1" gutterBottom style={{ color: '#444444' }}>
                      {user?.project_list.map(project => {
                        return (
                          <Typography variant="body1" gutterBottom>   {project.projectName}</Typography>
                        )
                      })}
                    </Typography>
                  </CardContent>
                </Card>

              </div>

            }
          </Stack>
        </Scrollbar>

        {/* <Box sx={{ p: 3 }}>
          <Button
            fullWidth
            size="large"
            type="submit"
            color="inherit"
            variant="outlined"
            startIcon={<Iconify icon="ic:round-clear-all" />}
          >
            RAJ KUMAR
          </Button>
        </Box> */}
      </Drawer>
    </>
  );
}
