import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Iconify from '../../../components/Iconify';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function OperationManager() {
  return (
    <div>

    
      <Card style={{marginTop:20}}>
            <CardContent>
                <Typography>
                <Iconify icon="eva:people-fill" width={20} height={20} />
                OperationManager
                </Typography>
            </CardContent>
          </Card>
         
          </div>
  );
}