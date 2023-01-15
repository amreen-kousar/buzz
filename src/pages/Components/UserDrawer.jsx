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
  Card,
  CardContent,
} from '@mui/material';
// components
import Iconify from '../../components/Iconify';
import Scrollbar from '../../components/Scrollbar';
import { ColorManyPicker } from '../../components/color-utils';
import UserEditProfile from './UserComponent/UserEditProfile'
// ----------------------------------------------------------------------
UserDrawer.propTypes = {
  isOpenFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};

export default function UserDrawer({ isOpenFilter, onOpenFilter, onCloseFilter,users }) {


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
          sx: { width: 280, },
        }}
      >
      
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography variant="subtitle1" sx={{ ml: 1 }}>
            Member Details:  {user?.first_name}  {user?.last_name}
          </Typography>
          <IconButton onClick={onCloseFilter}>
            <Iconify icon="eva:close-fill" width={20} height={20} />
          </IconButton>
        </Stack>

        <Divider />
        <Stack style={{alignSelf:'center',}} direction={'row'}>
          <UserEditProfile />
         
          <Button >Delete Profile</Button>

        </Stack>
        <Scrollbar>
          <Stack spacing={3} sx={{ p: 3 }}>
            <div>
              <Card>
                <CardContent>
                  <Typography style={{ flexDirection: 'row' }} variant="subtitle1" gutterBottom>
                    Role:
                    <Typography variant="body1" >{user?.role_name}</Typography>
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Reporting Manager:
                    <Typography variant="body1" gutterBottom>{user?.supervisorName}</Typography>
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Date Of Joining:
                    <Typography variant="body1" gutterBottom> {user?.doj}</Typography>
                  </Typography>
                </CardContent>
              </Card>

              {/* <FormGroup>
                {FILTER_GENDER_OPTIONS.map((item) => (
                  <FormControlLabel key={item} control={<Checkbox />} label={item} />
                ))}
              </FormGroup> */}
            </div>

            <div>
              <Card>
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    Contact Information
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Mobile Number:
                    <Typography variant="body1" gutterBottom>   {user?.contactNum}</Typography>

                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Work: <Typography variant="body1" gutterBottom>   {user?.workNum}</Typography>
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Email: <Typography variant="body1" gutterBottom>   {user?.officeMailId}</Typography>
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Address: <Typography variant="body1" gutterBottom>   {user?.address}</Typography>
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    PinCode: <Typography variant="body1" gutterBottom>   {user?.pincode}</Typography>
                  </Typography>
                </CardContent>
              </Card>

            </div>

            <div>
              <Card>
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    Projects
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {user?.project_list.map(project => {
                      return (
                        <Typography variant="body1" gutterBottom>   {project.projectName}</Typography>
                      )
                    })}
                  </Typography>
                </CardContent>
              </Card>

            </div>
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
