import { useState,useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Iconify from '../../../components/Iconify';



export default function GelathisLead() {
 
  return (
    <div>

    
      <Card style={{marginTop:20}}>
            <CardContent>
                <Typography>
                <Iconify icon="eva:people-fill" width={20} height={20} />
                Projects
                </Typography>
            </CardContent>
          </Card>
          
          </div>
  );
}