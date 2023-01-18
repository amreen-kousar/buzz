// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
       <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ScrollToTop />
      {/* <BaseOptionChartStyle /> */}
      <Router />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
