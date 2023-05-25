import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';
import { 
  Stack, 
  Drawer, 
  Divider, 
  IconButton, 
  Typography, 
  Card, 
  CardContent } from '@mui/material';
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import { Icon } from '@iconify/react';
import GelathiCircleForm from './GelathiCircleForm';
import GreenSurvey from './GreenSurvey';
import Vyaparprogram from './Vyaparprogram';
import { oldbaseURL } from 'src/utils/api';
GelathiCircleDrawer.propTypes = {
  isOpenFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};
export default function GelathiCircleDrawer({
  reloadmethod,
  isOpenFilter,
  onOpenFilter,
  onCloseFilter,
  clcikData,
  data1,
  sessionData
}) {
  const [selectedFromIndex, setSelectedFormIndex] = useState({
    index: '',
    id: '',
  });
  const [session, setSession] = useState('');
  const [SessionClickData,setSessionClickData]=useState('');
  const [circleData, setcircleData] = useState('');
  const [reloadFromForm, setReloadFromForm] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [singleCircleData, setSingleCircleData] = useState();
const [showGreenFrom ,setShowGreenForm] = useState(false)
const [formData , setFormData] = useState()
  console.log(clcikData ," circleDatta")
  useEffect(() => {
    circle();
  }, [clcikData]);
  const gelathiDrawerReloder = () => {
    console.log("Ihadbeencalledfromprops")
    setReloadFromForm(!reloadFromForm);
  };
  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      circle();
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [reloadFromForm]);
const circle = (async) => {
    const userid = JSON.parse(localStorage.getItem('userDetails'))?.id;
    var data = JSON.stringify({
      circle_id: clcikData?.id ,
      project_id: data1?.project_id,
      emp_id: userid,
    });
var config = {
      method: 'post',
      url: oldbaseURL+'getGelathiCircleDataNew.php',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
axios(config)
      .then(function (response) {
        setcircleData(response?.data); 
        
      })
      .catch(function (error) {
        console.log(error);
      });
  };
const removegelathicircle = async (itm) => {
    if (confirm('Are you sure want to remove')) {
      var data = JSON.stringify({
        circle_id: clcikData?.id,
        flag: 0,
        gelathi_id: itm?.gelathi_id,
      });
      var config = {
        method: 'post',
        url: oldbaseURL +'updateEnrolledGelathi.php',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          circle();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };



  
  const callGelathiFormComponent = (index, id) => {
    setShowForm(true);
    setSelectedFormIndex({
      index: index,
      id: id,
    });
  };

  const handleform=()=>{
    alert('survey was done')
  }
return (
    <>
      <Drawer
        anchor="right"
        open={isOpenFilter}
        onClose={onCloseFilter}
        PaperProps={{
          sx: { width: 350 },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography variant="subtitle1" sx={{ ml: 1 }}>
            {`${clcikData?.title}:`}
          </Typography>
          <IconButton onClick={onCloseFilter}>
            <Iconify icon="eva:close-fill" width={20} height={20} />
          </IconButton>
        </Stack>
        <Divider />
        <Scrollbar>
          <Stack spacing={10} sx={{ p: 3 }}>
            {circleData?.gelathis?.length > 0 ? (
              <div>
                {circleData?.gelathis?.map((itm, index) => {
                  return (
                    <Card style={{ marginTop: 20 }}>
                      <CardContent>
                        <Stack style={{ float: 'right' }}>
                          <IconButton style={{ marginLeft: 70 }} onClick={() => removegelathicircle(itm)}>
                            <Icon
                              icon="material-symbols:check-box-rounded"
                              width={20}
                              height={20}
                              marginTop={20}
                              color="#ff7424"
                            />
                          </IconButton>
                          {(( sessionData?.type == 4) )? (
                            (itm?.is_survey)?
                            <IconButton
                              style={{ marginLeft: 70 }}
                              onClick={
                                // callGelathiFormComponent(index , itm?.gelathi_id  )
                                // if we want to see filed form means need to call another component so that time we can use this kind of methods to call instead of rendering inside the map
                              handleform
                              }
                            >
                              <Icon icon="clarity:form-line" width={20} height={20} marginTop={20} color="green" />
                            </IconButton>
                            : (sessionData?.type==4 && sessionData?.check_in != "0")? (
                            
                              
                            <IconButton
                            style={{ marginLeft: 70 }}
                            onClick={() => {
                               callGelathiFormComponent(index, itm?.gelathi_id);
                             
                            }}
                          >
                            <Icon icon="clarity:form-line" width={20} height={20} marginTop={20} color="#ff7424" />
                          </IconButton>
                          ):null
                          ) : 
                          (( sessionData?.type == 10) )? (
                            (itm?.is_green_survey)?
                            <IconButton
                              style={{ marginLeft: 70 }}
                              onClick={() => {
                                // callGelathiFormComponent(index , itm?.gelathi_id  )
                                // if we want to see filed form means need to call another component so that time we can use this kind of methods to call instead of rendering inside the map
                              }}
                            >
                              <Icon icon="clarity:form-line" width={20} height={20} marginTop={20} color="green" />
                            </IconButton>
                            : (sessionData?.type==10 && sessionData?.check_in != "0")? (
                            
                             
                                
                                <IconButton
                              style={{ marginLeft: "18px" , background: "none" , padding: 0  }}
                              onClick={() => {
                                // callGelathiFormComponent(index , itm?.gelathi_id  )
                                // if we want to see filed form means need to call another component so that time we can use this kind of methods to call instead of rendering inside the map
                              }}
                            >
                              <GreenSurvey itm={itm } changeState={gelathiDrawerReloder} />
                               </IconButton>
                             
                          ):null
                          ) : (( sessionData?.type == 16) )? (
                            (itm?.is_vyapar_survey)?
                            <IconButton
                              style={{ marginLeft: 70 }}
                              onClick={() => {
                                // callGelathiFormComponent(index , itm?.gelathi_id  )
                                // if we want to see filed form means need to call another component so that time we can use this kind of methods to call instead of rendering inside the map
                              }}
                            >
                              <Icon icon="clarity:form-line" width={20} height={20} marginTop={20} color="green" />
                            </IconButton>
                            : (sessionData?.type==16 && sessionData?.check_in != "0")? (
                              <IconButton
                              style={{ marginLeft: 90 ,background:"none" }}
                              onClick={() => {
                                // callGelathiFormComponent(index , itm?.gelathi_id  )
                                // if we want to see filed form means need to call another component so that time we can use this kind of methods to call instead of rendering inside the map
                              }}
                            >
                              <Vyaparprogram itm={itm } changeState={gelathiDrawerReloder} />
                           </IconButton>
                          ):<></>
                          ): <></>
                        
                          
                          
                          }
                        </Stack>
                        <Typography variant="subtitle1">{itm?.firstName}</Typography>
                        <Typography variant="subtitle1" gutterBottom>
                          <Typography variant="body1" gutterBottom>
                            {itm?.villagename} 
                          </Typography>
                        </Typography>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <h5 style={{ textAlign: 'center' }}>No Gelathi</h5>
            )}
             {showForm && (
              <GelathiCircleForm
                index={selectedFromIndex.index}
                reloadmethod={reloadmethod}
                clcikData={clcikData}
                circleData={circleData}
                singleCircleData={singleCircleData}
                id={selectedFromIndex.id}
                setShowForm={setShowForm}
                gelathiDrawerReloder={gelathiDrawerReloder}
              />
            )}

            {showGreenFrom && <GreenSurvey itm={formData } />}
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}
