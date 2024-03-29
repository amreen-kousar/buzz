
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Stack } from '@mui/material';
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
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
    const { onClose, selectedValue, open, data, getData, sendData,name } = props;

    const handleClose = () => {
        onClose(selectedValue);
      };
      const [arr, setArr] = useState(name?name:[])
      const handleListItemClick = (value) => {
        console.log(arr,"<--dfdsfsdf",value)
        if (arr?.find(itm=>itm?.name===value?.first_name)) {
          var data = JSON.stringify({
            "project_id": sendData?.projectId,
            "role_id": value?.role_id,
            "emp_id": value?.id
          });
    
          var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/deleteEmpFromProject.php',
            headers: {
              'Content-Type': 'application/json'
            },
            data: data
          };
    
          axios(config)
            .then(function (response) {
              console.log("added successful;y222")
              const getList = arr?.filter(ite =>ite?.name !== value?.first_name )
              console.log(getList, "<--fgetList", value?.first_name, arr)
              setArr(getList)
            })
            .catch(function (error) {
              console.log(error);
            });
    
    
        }
        else {
          var data = JSON.stringify({
            "project_id": sendData?.project_id,
            "role_id": value?.role_id,
            "emp_id": value?.id
          });
    
    
          var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/addEmpToProject.php',
            headers: {
              'Content-Type': 'application/json'
            },
            data: data
          };
    
          axios(config)
            .then(function (response) {
              console.log("added successful;y")
              setArr([...arr, {id:value?.id,name:value?.first_name}])
              console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
              console.log(error);
            });
        }
        // onClose(value);
      };

    const [listData, setListData] = useState();


    return (
        <Dialog onClose={handleClose} open={open}>
            <Stack direction={'row'}>
                <Button variant="subtitle2" style={{ color: '#ed6c02' }} mt={2} ml={2} onClick={handleClose}>Back</Button>
                <DialogTitle>Add Gelathi Facilitators From List</DialogTitle>
                <Button mt={2} mr={2} variant="subtitle2" style={{ color: '#ff7424' }} onClick={() => {
          getData(arr),
            handleClose()
        }}>Save</Button>

            </Stack>


          

<List sx={{ pt: 0 }}>
        {data?.list?.map((email) => (

          <ListItem disableGutters>
            {/* {console.log(email,'<------------nnnjnjnjnnii')} */}
            <ListItemButton onClick={() => handleListItemClick(email)} key={email}>
              <ListItemAvatar>

                <Avatar>
                  {!arr?.find(itm=>itm?.name===email?.first_name) ?
                    // <AddIcon />:<CheckCircleRoundedIcon sx={{ color: 'red' }}/>}
                    <AddIcon /> : null}
                </Avatar>

              </ListItemAvatar>
              <ListItemText primary={email?.first_name} />
            </ListItemButton>
          </ListItem>
        ))}
            </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo({ isOpenFilter, onCloseFilter, getData, sendData,name,operations_manager_id }) {
    
  useEffect(() => {
    trainerList()
}, [operations_manager_id]
)
    const [open, setOpen] = React.useState(isOpenFilter);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);
    const [listData, setListData] = useState();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        onCloseFilter()
        setSelectedValue(value);
    };
    useEffect(() => {
        trainerList()
    }, []
    )
    const trainerList = () => {
        console.log(sendData, "sendDataaaa")
        var data = JSON.stringify({
            "role_id": 6,
            "project_id": sendData?.project_id?sendData?.project_id:sendData?.projectId,
            "operation_manager_id":operations_manager_id ,
            "pageNum": 1
        });

        var config = {
            method: 'post',
            url: 'https://bdms.buzzwomen.org/appTest/getPeopleList.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                setListData(response.data)
                console.log(response.data, '<----------setListDatasetListData');
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div>


            
              <SimpleDialog
        sendData={sendData}
        data={listData}
        name={name}
        getData={getData}
        selectedValue={selectedValue}
        open={isOpenFilter}
        onClose={handleClose}
      />
        </div>
    );
}
