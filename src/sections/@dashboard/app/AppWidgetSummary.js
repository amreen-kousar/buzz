// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  icon: PropTypes.string,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
  style: PropTypes.object,

};

export default function AppWidgetSummary({ title, total, icon, color = 'primary', sx, style, ...other }) {




  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: "center",
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
        height: "210px"
        // {
        //   xs: 100,
        //   sm: 200,
        //   md: 210,
        //   lg: 210,
        //   xl: 210,
        
        
        // }
        ,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor:'context-menu'
      }}
      {...other}
    >
      <div>
        {(icon) ? <IconWrapperStyle
          sx={{
            color: (theme) => theme.palette[color].dark,
            backgroundImage: (theme) =>
              `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
                theme.palette[color].dark,
                0.24
              )} 100%)`,
          }}
        >
          <Iconify icon={icon} width={24} height={24} />
        </IconWrapperStyle> : null}
        <span style={{ opacity: 0.72, fontSize: '1.5vw', color: '#103996' }}><strong>{title}</strong></span><br />
        {console.log(total, "total")}
        <span style={{ fontSize: '2.5vw', color: "#103996" }}><strong>
          {total}
        </strong></span>

        {/* <Typography variant="h4" sx={{ opacity: 0.72 }}>
          {title}
        </Typography> */}
        {/* <Typography variant="h5">{fShortenNumber(total)}</Typography> */}
        {/* <Typography variant="h2">{(total)}</Typography> */}
      </div>


      {/* <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography> */}
    </Card>
  );
}
