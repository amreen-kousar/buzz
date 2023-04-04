import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Stack, Checkbox, Card, CardContent } from '@mui/material';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import CreateGelathiCircle from './CreateGelathiCircle';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ChooseGelathi(data1) {
  const { state } = useLocation();
  console.log(data1, 'state');
  const [clcikData, setClickData] = useState();
  const [enrolled, setenrolled] = useState('');
  const [gelathiData, setGelathiData] = useState([]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const checkBoxData = (itm) => {
    if (gelathiData?.find((i) => i?.id === itm?.id)) {
      const filterData = gelathiData?.filter((item) => item?.id !== itm?.id);
      setGelathiData(filterData);
    } else {
      setGelathiData([...gelathiData, itm]);
    }
    console.log(itm, '<----dsadasdasdad');
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    enrolledGelathi();
  }, []);
  const enrolledGelathi = (async) => {
    var userDetails = JSON.parse(localStorage?.getItem('userDetails'));
    var role = JSON.parse(localStorage?.getItem('userDetails'))?.role;
    var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
    var data = JSON.stringify({
      search: '',
      project_id: state?.id,
      emp_id: idvalue,
      role_id: role,
    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getEnrollGelathi.php',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setenrolled(response.data);
        console.log(response.data, '<---------------setenrolledsetenrolled');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // search bar
  const searchFunction = (e) => {
    search = e;
    setSearch(search);
    setSelected({ name: e, type: 'Search' });
    circle();
  };
  const circle = async (id, i, g) => {
    console.log(id, 'idvalue', i);
    var role = JSON.parse(localStorage?.getItem('userDetails'))?.role;
    var idvalue = JSON.parse(localStorage?.getItem('userDetails'))?.id;
    var data = JSON.stringify({
      search: search,
      project_id: state?.id,
      gelathi_id: id?.emp_id ? id?.emp_id : '',
    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getGelathiCircle.php',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setgelathiCircles(response.data);
        setCount(response?.data?.list.length);
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    return (
      <div>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          style={{
            float: 'right',
            marginLeft: '1rem',
            borderRadius: '50%',
            padding: '0.2rem',
            marginTop: '-0.5rem',
            position: 'fixed',
            zIndex: '1',
            bottom: 40,
            right: 40,
          }}
          sx={{
            ':hover': {
              bgcolor: '#ffd796',
              color: '#ff7424',
              border: '#ffd796',
            },
            bgcolor: '#ffd796',
            color: '#ff7424',
            border: 'none',
          }}
          title="Create POA"
        >
          <span style={{ fontSize: '2rem' }}>+</span>
        </Button>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar sx={{ position: 'fixed', bgcolor: '#ff7424' }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div" color="inherit">
                Gelathis
              </Typography>
              <Searchbar getSearch={(e) => searchFunction(e)} />
              {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}

              <CreateGelathiCircle handleCloseGelathi={handleClose} gelathiData={gelathiData} data1={data1} />
            </Toolbar>
          </AppBar>
          {/* <Card><CardContent>Project : {data1?.data1?.project_name}</CardContent></Card> */}
          {enrolled?.list?.length !== 0 ? (
            enrolled?.list?.map((itm) => {
              return (
                <Stack>
                  <Card style={{ marginTop: 60 }}>
                    <CardContent direction={'row'}>
                      <Stack direction={'row'}>
                        <Typography variant="subtitle1" gutterBottom>
                          {` ${itm?.gelathiname}`}{' '}
                          <Checkbox
                            {...label}
                            onChange={() => {
                              checkBoxData(itm);
                            }}
                          />
                        </Typography>

                        <br />
                      </Stack>
                      <Typography variant="subtitle1" gutterBottom>
                        {` ${itm?.villagename}`}
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              );
            })
          ) : (
            <>
              <h1>No Enrolled Gelathi Found</h1>
            </>
          )}
        </Dialog>
      </div>
    );
  };
}
