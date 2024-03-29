import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Trainersdata from './Trainersdata';
import axios from 'axios';
// material
import {
  Grid, Radio, Stack, Button, Drawer, Rating, Divider, Checkbox, FormGroup, IconButton, Typography, Chip, Card, CardContent, Box,
} from '@mui/material';


// components
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import Daterange from './Daterange';
;
import { id } from 'date-fns/locale';

Shakthimain.propTypes = {
    isOpenFilter: PropTypes.bool,
    onOpenFilter: PropTypes.func,
    onCloseFilter: PropTypes.func,
  };

export default function Shakthimain({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData, user, getData, onSumbit, onDateSubmit, type, shakti,data1 }) {

    var [selectDATA, setSelectData] = useState()
  
    const filterPermissions = {
  
      SelfShakthi: [{ id: 46, roles: ['1', '4','5', '12', '3', '11', '9', '7'] },  { id: 9, roles: ['1', '4','5', '12', '3', '11', '9', '7'] }, {id:1,roles:['1', '4','5', '12', '3', '11', '9', '7']},{id:2,roles:['1', '4','5', '12', '3', '11', '9', '7']},{id:5,roles:['1', '4', '12', '3', '11', '9', '7']}],
  
    //   GelathiProgram: [{id:45,roles:['1','8','12']},{id:2,roles:['1','12']},{id:1,roles:['1','12']},{id:3,roles:['1','12']},{ id: 9, roles: ['1', '2', '3', '4', '5', '9', '11', '12', '13', '6'] },{id:6,roles:['1','12']},{id:4,roles:['1','12']},{id:5,roles:['1','12']}],
  
      // Gelathis: [{ id: 6, roles: ['1', '3', '12', '11', '4', '2'] }],
  
      // GreenMotivators: [{ id: 6, roles: ['1', '3', '12', '11', '4', '2'] }],
  
      // Vyapar: [{ id: 6, roles: ['1', '3', '12', '11', '4', '2'] }],
  
      // Gelathicircles: [{ id: 6, roles: ['1', '3', '12', '11', '4', '2'] }]
    }
  
  
    const data = localStorage?.getItem('userId')
  
    const filtersHeaders = {  5: 'Trainers', 9: 'Date Range',1:'Rescheduled',2:'Cancelled',46:'All Training Batch'}
  
  
    const setData = (value) => {
      setSelectData(value)
      console.log(value,"selectedvalue")
      if(value==46){
        shakti();
        onCloseFilter();
      }
    
      if (filtersHeaders[value]=='Rescheduled' || filtersHeaders[value]=='Cancelled' ) {
        user(1, { id: value, type: filtersHeaders[value] });
       console.log(filtersHeaders[value],"value")
        onCloseFilter()
      }

     

    }
    console.log(Object.keys(filterPermissions[type],"filtersssssss"))
    useEffect(() => {
      console.log(Object.keys(filterPermissions[type],"filtersssssss"))
  
      
        if (type == 'Demography') {
          setSelectData(filterPermissions[type][0].id)
        }
        else {
          filterPermissions[type].forEach
            ((e, i, arr) => {
              console.log(e, "filterer")
              if (e.roles.includes(data)) {
                setSelectData(e?.id);
                arr.length = i + 1; // Behaves like `break`
              }
            })
        
      }
    }, [])
  
  
    const styles = {
      buttonStyle: {
        ':hover': {
          bgcolor: '#ffd796',
          color: '#ed6c02',
        },
        color: 'black',
        marginRight: "0.5rem",
        marginBottom: "0.5rem"
      },
      highlightStyle: {
        background: '#ffd796',
        color: '#ed6c02',
  
      }
    }
  
    return (
      <>
        <Drawer
          anchor="right"
          open={isOpenFilter}
          onClose={() => {
            setSelectData(null)
            onCloseFilter()
          }}
          PaperProps={{
            sx: { width: 400, },
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
            <Typography variant="subtitle1" sx={{ ml: 1 }} style={{ marginLeft: 25 }}>
              Filters :  {filtersHeaders[selectDATA]}
            </Typography>
            <IconButton onClick={() => {
              setSelectData(null)
              onCloseFilter()
            }}>
              <Iconify icon="eva:close-fill" width={20} height={20} />
            </IconButton>
          </Stack>
          <Divider />
          <Scrollbar>
            <div>
              <Card style={{ backgroundColor: '#F6F8FB', }}>
                <CardContent>
                  {
                    filterPermissions[type].map(f => {
                      return (f.roles === true || f.roles.includes(data)) && <Button onClick={() => { setData(f.id) }}
                        sx={styles.buttonStyle} style={selectDATA == f.id ? styles.highlightStyle : null}>{filtersHeaders[f.id]}</Button>
                    })
                  }
                </CardContent>
              </Card>
            </div>
            {
            type != 'people' && <div>
              {
                selectDATA == 5 && <Grid>
                  <Trainersdata type={type} getData={getData} selectDATA={selectDATA} data1={data1} />
                
                </Grid>
              }
              {/* {
                selectDATA == 6 && <Grid>
                  <GelathiFacilitators type={type} getData={getData} selectDATA={selectDATA} />
                </Grid>
              } 
               */}
              {
                selectDATA == 9 && <Grid>
                  <Daterange getData={getData} selectDATA={selectDATA} onDateSubmit={onDateSubmit} />
                </Grid>
              }
              {console.log(selectDATA,"selected")}
          
             
            </div>
          }
            
          </Scrollbar>
  
        </Drawer>
      </>
    );
  }
  const styles = {
    button: {
      '&:active': {
        backgroundColor: '#ffd796',
        color: '#ed6c02'
      },
      '&:hover': {
        backgroundColor: '#ffd796',
        color: '#ed6c02'
      },
    },
  }