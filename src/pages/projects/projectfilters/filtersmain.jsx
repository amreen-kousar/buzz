import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// material
import {
  Grid, Radio, Stack, Button, Drawer, Rating, Divider, Checkbox, FormGroup, IconButton, Typography, Chip, Card, CardContent, Box,
} from '@mui/material';


// components
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import GelathiFacilitators from './Gelathifacilitators';
import Daterange from './Daterange';

import { id } from 'date-fns/locale';

Filtersmain.propTypes = {
    isOpenFilter: PropTypes.bool,
    onOpenFilter: PropTypes.func,
    onCloseFilter: PropTypes.func,
  };

export default function Filtersmain({ isOpenFilter, onOpenFilter, onCloseFilter, clcikData, user, getData, onSumbit, onDateSubmit, type, data1, gelathiPrograme }) {

    var [selectDATA, setSelectData] = useState()
  
    const filterPermissions = {
  
      GelathiProgram: [{id:45,roles:['1','3','4','6','12','13']},{id:2,roles:['1','3','4','6','12','13']},{id:1,roles:['1','3','4','6','12','13']},{id:3,roles:['1','3','4','6','12','13']},{ id: 9, roles: ['1','3','4','6','12','13']},{id:6,roles:['13','4','3','1','12']},{id:4,roles:['1','12','13','6','3']},{id:5,roles:['1','3','4','6','12','13']},],
  
      GreenMotivators: [{ id: 6, roles: ['1','3','12','4','6','13'] }],
  
      Vyapar: [{ id: 6, roles: ['1','3','12','4','6','13'] }],
  
      Gelathicircles: [{ id: 6, roles: ['1','3','12','4','6','13'] }],

      Gelathis:[{id:6,roles:['1','3','12','4','6']}]
    }
  
  
    const data = localStorage?.getItem('userId')
  
    const filtersHeaders = {   6: 'Gelathi Facilitators', 9: 'Date Range', 2:'Village Visits',1:'Circle Meetings',3:'Beehive Visits',4:'Rescheduled',5:'Cancelled',45:'All Gelathi Sessions'}
  
  
    const setData = (value) => {
      setSelectData(value)
      console.log(value,"selectedvalue")
      if(value==46){
        shakti();
        onCloseFilter();
      }
      if(value==45 ){
        gelathiPrograme();
        onCloseFilter();
      }
     
      if (filtersHeaders[value] == 'Circle Meetings' || filtersHeaders[value] == 'Beehive Visits' || filtersHeaders[value]=='Rescheduled' || filtersHeaders[value]=='Cancelled' || filtersHeaders[value]=='Village Visits') {
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
                selectDATA == 6 && <Grid>
                  <GelathiFacilitators type={type} getData={getData} selectDATA={selectDATA} data1={data1} />
                </Grid>
              } 
              
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