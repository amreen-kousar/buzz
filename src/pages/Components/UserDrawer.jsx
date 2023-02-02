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

export default function UserDrawer({ isOpenFilter, onOpenFilter, onCloseFilter, users }) {


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
          sx: { width: 400 },
        }}
      >

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography variant="subtitle1" sx={{ ml: 1 }} style={{ color: '#444444' }}>
            Member Details:  {user?.first_name}  {user?.last_name}
          </Typography>
          <IconButton onClick={onCloseFilter}>
            <Iconify icon="eva:close-fill" width={20} height={20} />
          </IconButton>
        </Stack>

        <Divider /><br />
        <Stack direction={'row'} justifyContent="flex-end">
          <UserEditProfile />
          <Button style={{ float: 'right' }} sx={{
            '&:hover': {
              backgroundColor: '#ffd796',
            },
          }}><Iconify icon="ic:baseline-delete" style={{ width: '30px', height: '30px', color: '#e69138', marginRight: 0 }}></Iconify></Button>

        </Stack>
        <Scrollbar>
          <Stack spacing={1} sx={{ px: 3 }}>
            <div>
              <Card>
                <CardContent>
                  <Typography style={{ flexDirection: 'row', color: '#444444' }} variant="subtitle1" gutterBottom>
                    Role:<span style={{ fontWeight: 100, color: '#444444' }}>{user?.role_name}</span>

                  </Typography>
                  <Typography variant="subtitle1" gutterBottom style={{ color: '#444444' }}>
                    Reporting Manager:<span style={{ fontWeight: 100, color: '#444444' }}>{user?.supervisorName}</span>
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom style={{ color: '#444444' }}>
                    Date Of Joining:<span style={{ fontWeight: 100, color: '#444444' }}>{user?.doj}</span> </Typography>
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
                  <Typography variant="subtitle1" gutterBottom style={{ color: '#444444' }}>
                    Contact Information
                  </Typography>
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
                    <Typography variant="subtitle1" gutterBottom style={{ color: '#444444' }}>
                      Projects
                    </Typography>
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
