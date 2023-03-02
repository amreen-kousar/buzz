import PropTypes from 'prop-types';
import Iconify from 'src/components/Iconify';
import Scrollbar from 'src/components/Scrollbar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import defaultImage from '../../../assets/images/default.png';
import {useState} from 'react'
import { useEffect } from 'react';
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
  Card, Avatar,
  CardContent,
} from '@mui/material';
Peopleprofile.propTypes = {
  isOpenFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};
export default function Peopleprofile({isOpenFilter,onOpenFilter,onCloseFilter}){
    var [user,setUser]=useState(JSON.parse(localStorage?.getItem('profiledetails')))
    let userprofile =JSON.parse(localStorage.getItem('profiledetails'))
      useEffect(() => {
    //   editUser()
    updateSetUser()
  }, []
  )

  const updateSetUser=()=>{
    setUser(JSON.parse(localStorage?.getItem('people')))
  }
    

    return(
        <>


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


            <IconButton style={{ color: "white", float: 'left' }} onClick={onCloseFilter}>
              <Iconify icon="material-symbols:arrow-back-rounded" />
            </IconButton>
            <Typography variant="subtitle2" style={{ color: 'white' }}>
              Member Detail
            </Typography>

          </Toolbar>
        </AppBar>


        <Divider /><br />

        <Scrollbar>
          <Stack spacing={1} sx={{ px: 1 }}>
            <div>
              <Card >
                <CardContent>
                  <div style={{ float: 'left', paddingTop: 30, paddingRight: 5 }}>
                    <Avatar src={(userprofile?.profile_pic) ? userprofile.profile_pic : defaultImage} alt="photoURL" />
                  </div>
                  <Card sx={{ px: 1, boxShadow: 0 }} >
                    <Typography style={{ flexDirection: 'row', color: '#444444', }} variant="subtitle1" gutterBottom>{userprofile?.emp_name}&nbsp;{userprofile?.last_name}</Typography>
                    <Typography style={{ flexDirection: 'row', color: '#444444' }} variant="body1" gutterBottom>
                      Role : <span style={{ fontWeight: 100, color: '#444444' }}>{userprofile?.role}</span>

                    </Typography>
                   <Typography variant="body1" gutterBottom style={{ color: '#444444' }}>
                      Status : <span style={{ fontWeight: 100, color: '#444444' }}>{userprofile?.status === '1' ? "Active" : null}</span>
                    </Typography>
                    <Typography variant="body1" gutterBottom style={{ color: '#444444' }}>
                      Reporting Manager : <span style={{ fontWeight: 100, color: '#444444' }}>{userprofile?.supervisorName}</span>
                    </Typography>
            
                    <Typography variant="body1" gutterBottom style={{ color: '#444444' }}>
                      Date Of Joining : <span style={{ fontWeight: 100, color: '#444444' }}>{userprofile?.doj}</span> </Typography>
                  </Card>
                </CardContent>
              </Card>


            </div>

            <div>
              <Card style={{ width: "auto" }}>
                <CardContent>
                  <Card variant="subtitle1" gutterBottom style={{ padding: 10, color: 'white', textAlign: 'center', borderRadius: '0px', backgroundColor: '#999999' }}>
                    Contact Information
                  </Card>
                  <br />
                  <Typography variant="subtitle1" gutterBottom style={{ color: '#444444' }}>
                    Mobile Number:<span style={{ fontWeight: 100, color: '#444444' }}>{userprofile?.contactNum}</span>

                  </Typography>
                  <Typography variant="subtitle1" gutterBottom style={{ color: '#444444' }}>
                    Work: <span style={{ fontWeight: 100, color: '#444444' }}>{userprofile?.workNum} </span>
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom style={{ color: '#444444' }}>
                    Email:<span style={{ fontWeight: 100, color: '#444444' }}> {userprofile?.officeMailId}</span>
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom style={{ color: '#444444' }}>
                    Address:<span style={{ fontWeight: 100, color: '#444444' }}>{userprofile?.address}</span>
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom style={{ color: '#444444' }}>
                    PinCode:<span style={{ fontWeight: 100, color: '#444444' }}>{userprofile?.pincode}</span>
                  </Typography>
                </CardContent>
              </Card>

            </div>



            <div>
              <Card>
                <CardContent>
                  <Card variant="subtitle1" gutterBottom style={{ padding: 10, color: 'white', textAlign: 'center', borderRadius: '0px', backgroundColor: '#999999' }}>
                    Projects
                  </Card>
                  <br />
                  {userprofile?.project_list ?
                    <Typography variant="subtitle1" gutterBottom style={{ color: '#444444' }}>
                      {userprofile?.project_list.map(project => {
                        return (
                          <Typography variant="body1" gutterBottom>   {project.projectName}</Typography>
                        )
                      })}
                    </Typography>
                    :
                    <div style={{ textAlign: "center" }}>No projects found .</div>
                  }
                </CardContent>
              </Card>

            </div>


          </Stack>
        </Scrollbar>

    
      </Drawer>
    </>
    )
}