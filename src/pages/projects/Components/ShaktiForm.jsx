import * as React from 'react';
import {
  Button,
  Grid,
  Stack,
  TextField,
  Select,
  Radio,
  InputLabel,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Card,
  CardContent
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShaktiForm() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [age, setAge] = React.useState('');
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleChangeSelect = (event) => {
    setAge(event.target.value);
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Survey Form
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative', bgcolor: '#ed6c02' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Survey Form
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid>
        <Card>
            <CardContent>
          <Stack>
            <Typography mt={3} variant="h6">% of Women With increased Self Esteem</Typography>
          </Stack>
          <Stack>
            <Typography mt={2} variant="subtitle2">I feel That I am Person of worth</Typography>
            <Stack mt={2}>
              <InputLabel id="demo-simple-select-standard-label">Answer</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="subtitle2">I feel That I have Several good Qualities</Typography>
            <Stack mt={2}>
              <InputLabel id="demo-simple-select-standard-label">Answer</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="subtitle2">Sometimes I feel I am a Failure Person</Typography>
            <Stack mt={2}>
              <InputLabel id="demo-simple-select-standard-label">Answer</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="h6">
              Number of Women Work Toward Their Goal and Continuosly Track It Using The Buzz Self Assessment Tools Women
              Who Have Goal
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="subtitle2">1. Do You Have A Goal ? What Is It ?</Typography>
            <Stack mt={2}>
              <div>
                <Radio
                  checked={selectedValue === 'Yes'}
                  onChange={handleChange}
                  value="Yes"
                  name="radio-buttons"
                  label="Yes"
                  inputProps={{ 'aria-label': 'Yes' }}
                />
                <Radio
                  checked={selectedValue === 'No'}
                  onChange={handleChange}
                  value="No"
                  name="radio-buttons"
                  label="No"
                  inputProps={{ 'aria-label': 'No' }}
                />
              </div>
            </Stack>
          </Stack>
          <Stack mt={2} mb={2}>
              <TextField id="Correct Answer" label="Correct Answer" variant="outlined" />
            </Stack>
          <Stack>
            <Typography variant="subtitle2">2. Is there Pathway To That Goal ?</Typography>
            <Stack mt={2}>
              <div>
                <Radio
                  checked={selectedValue === 'Yes'}
                  onChange={handleChange}
                  value="Yes"
                  name="radio-buttons"
                  label="Yes"
                  inputProps={{ 'aria-label': 'Yes' }}
                />
                <Radio
                  checked={selectedValue === 'No'}
                  onChange={handleChange}
                  value="No"
                  name="radio-buttons"
                  label="No"
                  inputProps={{ 'aria-label': 'No' }}
                />
              </div>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="h6">
              Number Of Women Who Believe They Can FindSolutions Through Self Initiative
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="subtitle2">1. I Look Problems And Get Disheartned</Typography>
            <Stack mt={2}>
              <InputLabel id="demo-simple-select-standard-label">Answer</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="subtitle2">2. I take Problem And Attempt To Think About Solution For It ?</Typography>
            <Stack mt={2}>
              <InputLabel id="demo-simple-select-standard-label">Answer</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="subtitle2">
              3. Once I Choose A Solution I Make An Implementation Plan For It ?
              <Stack mt={2}>
              <InputLabel id="demo-simple-select-standard-label">Answer</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="subtitle2">4. I Look A Solution Since I Don't Have An Choice?</Typography>
            <Stack mt={2}>
              <InputLabel id="demo-simple-select-standard-label">Answer</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
          </Stack>
          <Stack>
            <Typography mt={2} variant="h6">
              Number of Women With Basic Financial Management Knowledge On Income Vs Expenditure , Book Keeping etc
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h6">
              1. If You Invest Rs 10,000 as Capital In Saree Buisness For 20 Saree . You Spend Rs 100 to Transport the
              Saree from the Wholesare to your Village . If You Sell All The Saree In For Rs 12,000 , How Much Profit
              You Have Made.
            </Typography>
            <Stack mt={3}>
              <TextField id="Correct Answer" label="Correct Answer" variant="outlined" />
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="h6">
              2. You Have Taken A Loan Of Rs 10,000 To be Paid Back In Equally Monthly Payments In One Year And You Have
              To Pay Back Rs 1000 A Month. WHat Is The Annual Interest Rate ?
            </Typography>
            <Stack mt={3}>
              <TextField id="Correct Answer" label="Correct Answer" variant="outlined" />
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="h6">
              Number of Trained Women With Growing Savings (how much saved , frequency , regularities of savings)
            </Typography>
            <Typography variant="h6">1. Do You Save Regularly ?</Typography>
            <Stack mt={2}>
              <div>
                <Radio
                  checked={selectedValue === 'Yes'}
                  onChange={handleChange}
                  value="Yes"
                  name="radio-buttons"
                  label="Yes"
                  inputProps={{ 'aria-label': 'Yes' }}
                />
                <Radio
                  checked={selectedValue === 'No'}
                  onChange={handleChange}
                  value="No"
                  name="radio-buttons"
                  label="No"
                  inputProps={{ 'aria-label': 'No' }}
                />
              </div>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="body1">2. Where Do You Save Up Money ? </Typography>

            <Stack mt={2}>
              <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
          </Stack>
          <Stack mt={2}>
            <Typography variant="body1">3. What Is The Frequency Of Your Savings ? </Typography>

            <Stack mt={2}>
              <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
          </Stack>
          <Stack>
            <Typography>Number Of Women Who Decide On How To Handle Their Personal Finances .</Typography>
          </Stack>
          <Stack mt={2}>
            <Typography>1. Do You Own Assets In Your Name ?</Typography>
            <Stack mt={2}>
              <div>
                <Radio
                  checked={selectedValue === 'Yes'}
                  onChange={handleChange}
                  value="Yes"
                  name="radio-buttons"
                  label="Yes"
                  inputProps={{ 'aria-label': 'Yes' }}
                />
                <Radio
                  checked={selectedValue === 'No'}
                  onChange={handleChange}
                  value="No"
                  name="radio-buttons"
                  label="No"
                  inputProps={{ 'aria-label': 'No' }}
                />
              </div>
            </Stack>
          </Stack>
          <Stack mt={2}>
            <Typography>2. Do You Seperate Financial Assets/Savings From That of Your Husbands ?</Typography>
            <Stack mt={2}>
              <div>
                <Radio
                  checked={selectedValue === 'Yes'}
                  onChange={handleChange}
                  value="Yes"
                  name="radio-buttons"
                  label="Yes"
                  inputProps={{ 'aria-label': 'Yes' }}
                />
                <Radio
                  checked={selectedValue === 'No'}
                  onChange={handleChange}
                  value="No"
                  name="radio-buttons"
                  label="No"
                  inputProps={{ 'aria-label': 'No' }}
                />
              </div>
            </Stack>
          </Stack>
          <Stack mt={2}>
            <Typography>3. Do You Spend The Money Earned By You As You Want To?</Typography>
            <Stack mt={2}>
              <div>
                <Radio
                  checked={selectedValue === 'Yes'}
                  onChange={handleChange}
                  value="Yes"
                  name="radio-buttons"
                  label="Yes"
                  inputProps={{ 'aria-label': 'Yes' }}
                />
                <Radio
                  checked={selectedValue === 'No'}
                  onChange={handleChange}
                  value="No"
                  name="radio-buttons"
                  label="No"
                  inputProps={{ 'aria-label': 'No' }}
                />
              </div>
            </Stack>
          </Stack>
          <Stack mt={2}>
            <Typography>4. Do You Have A Loan?</Typography>
            <Stack mt={2}>
              <div>
                <Radio
                  checked={selectedValue === 'Yes'}
                  onChange={handleChange}
                  value="Yes"
                  name="radio-buttons"
                  label="Yes"
                  inputProps={{ 'aria-label': 'Yes' }}
                />
                <Radio
                  checked={selectedValue === 'No'}
                  onChange={handleChange}
                  value="No"
                  name="radio-buttons"
                  label="No"
                  inputProps={{ 'aria-label': 'No' }}
                />
              </div>
            </Stack>
          </Stack>
          <Stack mt={2}>
            <Typography>5. In Whose Name Is the Loan ?</Typography>
            <Stack mt={2}>
              <div>
                <Radio
                  checked={selectedValue === 'Yes'}
                  onChange={handleChange}
                  value="Yes"
                  name="radio-buttons"
                  label="Yes"
                  inputProps={{ 'aria-label': 'Yes' }}
                />
                <Radio
                  checked={selectedValue === 'No'}
                  onChange={handleChange}
                  value="No"
                  name="radio-buttons"
                  label="No"
                  inputProps={{ 'aria-label': 'No' }}
                />
              </div>
            </Stack>
          </Stack>
          <Stack mt={2}>
            <Typography>
              6. What Are All the Places That You Have Ever Borrowed Money Or Taken Out Loan From ?
            </Typography>
            <Stack mt={2}>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Goverment Bank" />
                <FormControlLabel control={<Checkbox />} label="Private Bank" />
                <FormControlLabel control={<Checkbox />} label="Local MFI" />
                <FormControlLabel control={<Checkbox />} label="SHG Group" />
                <FormControlLabel control={<Checkbox />} label="Money Lender" />
                <FormControlLabel control={<Checkbox />} label="Middleman / Trader" />
                <FormControlLabel control={<Checkbox />} label="Agro Processors" />
                <FormControlLabel control={<Checkbox />} label="Parents" />
                <FormControlLabel control={<Checkbox />} label="Relatives" />
                <FormControlLabel control={<Checkbox />} label="Neighbours" />
                <FormControlLabel control={<Checkbox />} label="Friends" />
                <FormControlLabel control={<Checkbox />} label="Social Welfare Department" />
                <FormControlLabel control={<Checkbox />} label="Co-operatives" />
                <FormControlLabel control={<Checkbox />} label="Others" />
              </FormGroup>
            </Stack>
          </Stack>
          <Stack mt={2}>
            <Typography>
              7. What Is The Reason To  Borrow A Loan ?
            </Typography>
            <Stack mt={2}>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Start/Expand Own Income Generation City" />
                <FormControlLabel control={<Checkbox />} label="Start/Expand Husband's Or His Family Income Generation Activity" />
                <FormControlLabel control={<Checkbox />} label="Education (Own)" />
                <FormControlLabel control={<Checkbox />} label="Pay For Future Employment " />
                <FormControlLabel control={<Checkbox />} label="Own Marriage" />
                <FormControlLabel control={<Checkbox />} label="Brother/Sister's  Marriage" />
                <FormControlLabel control={<Checkbox />} label="Personal Expenses" />
                <FormControlLabel control={<Checkbox />} label="Household Use" />
                <FormControlLabel control={<Checkbox />} label="House Repair" />
                <FormControlLabel control={<Checkbox />} label="Medicine / Hospitalization" />
                <FormControlLabel control={<Checkbox />} label="Festival" />
                <FormControlLabel control={<Checkbox />} label="Others" />
              </FormGroup>
            </Stack>
          </Stack>
          <Stack>
            <Typography>
                Number Of Women With A Financial Plan For Next 1 Year 
            </Typography>
            <Typography>
              1. Do You Have A Specific Goal That You Are Saving Up For ?
            </Typography>
            
            <Stack mt={2}>
              <div>
                <Radio
                  checked={selectedValue === 'Yes'}
                  onChange={handleChange}
                  value="Yes"
                  name="radio-buttons"
                  label="Yes"
                  inputProps={{ 'aria-label': 'Yes' }}
                />
                <Radio
                  checked={selectedValue === 'No'}
                  onChange={handleChange}
                  value="No"
                  name="radio-buttons"
                  label="No"
                  inputProps={{ 'aria-label': 'No' }}
                />
              </div>
            </Stack>
            <Typography>
              2. How Much Do You Need To Save Up To Achieve This Goal  ?
            </Typography>
            <Stack mt={3}>
              <TextField id="Correct Answer" label="Correct Answer" variant="outlined" />
            </Stack>
          </Stack>
          <Stack>
            <Typography>Number Of Women Who Actively Participate In HouseHold Financial Decison Making  </Typography>
          </Stack>
          <Stack>
            <Typography> 1. Who Takes the Majority of Decisons From the Following Household</Typography>
          </Stack>
          <Stack>
            <Typography mt={2}> Education</Typography>
            <Stack mt={2}>
              <InputLabel id="demo-simple-select-standard-label">Answer</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
            <Typography mt={2}> Access To HealthCare </Typography>
            <Stack mt={2}>
              <InputLabel id="demo-simple-select-standard-label">Answer</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
            <Typography mt={2}>  Access To Credit </Typography>
            <Stack mt={2}>
              <InputLabel id="demo-simple-select-standard-label">Answer</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
            <Typography mt={2}> Saving Money </Typography>
            <Stack mt={2}>
              <InputLabel id="demo-simple-select-standard-label">Answer</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
            <Typography mt={2}> Asset Purchase </Typography>
            <Stack mt={2}>
              <InputLabel id="demo-simple-select-standard-label">Answer</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
            <Typography mt={2}> Day To Day Purchase  </Typography>
            <Stack mt={2}>
              <InputLabel id="demo-simple-select-standard-label">Answer</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
            <Typography mt={2}> Livelihood </Typography>
            <Stack mt={2}>
              <InputLabel id="demo-simple-select-standard-label">Answer</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
          </Stack>
          <Stack>
        <Typography variant ="h6">Number Of Women Who Finds Solution In Beehive Sessions</Typography>
        <Typography variant ="subtitle1">Do You See Yourself As A Part Of An Community ?</Typography>
        <Typography variant ="body1">Is It Important For Woman To Come Together And Share In Everyday Challenges And Problems </Typography>
        <Stack mt={2}>
              <div>
                <Radio
                  checked={selectedValue === 'Yes'}
                  onChange={handleChange}
                  value="Yes"
                  name="radio-buttons"
                  label="Yes"
                  inputProps={{ 'aria-label': 'Yes' }}
                />
                <Radio
                  checked={selectedValue === 'No'}
                  onChange={handleChange}
                  value="No"
                  name="radio-buttons"
                  label="No"
                  inputProps={{ 'aria-label': 'No' }}
                />
              </div>
            </Stack>
            <Typography mt={2} variant={"h6"}>Number Of Women Who Belives That She Has A Social Capital In The  Community </Typography>
            <Typography> 1. It Is Important For Woman To Come Together Ad Share Their Everyday Challenges And Problems </Typography>
            <Stack mt={2}>
              <InputLabel id="demo-simple-select-standard-label">Answer</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
                <Typography mt={2}>2. I Have A Woman In  My Community Whom I Share My Learnings And Problems , Solution With  </Typography>
                <Stack mt={2}>
              <InputLabel id="demo-simple-select-standard-label">Answer</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
          </Stack>
          <Stack>
            <Typography mt={2} variant="h6">Other Requirements</Typography>
            <Typography mt={2} variant="subtitle1">Are You Maintaining the Books Of Accounts</Typography>
            <Stack mt={2}>
              <div>
                <Radio
                  checked={selectedValue === 'Yes'}
                  onChange={handleChange}
                  value="Yes"
                  name="radio-buttons"
                  label="Yes"
                  inputProps={{ 'aria-label': 'Yes' }}
                />
                <Radio
                  checked={selectedValue === 'No'}
                  onChange={handleChange}
                  value="No"
                  name="radio-buttons"
                  label="No"
                  inputProps={{ 'aria-label': 'No' }}
                />
              </div>
            </Stack>
            <Typography mt={2} variant="subtitle1">Are You Maintaining the Books Of Accounts For Self Enterprise</Typography>
            <Stack mt={2} mb={5}>
              <div>
                <Radio
                  checked={selectedValue === 'Yes'}
                  onChange={handleChange}
                  value="Yes"
                  name="radio-buttons"
                  label="Yes"
                  inputProps={{ 'aria-label': 'Yes' }}
                />
                <Radio
                  checked={selectedValue === 'No'}
                  onChange={handleChange}
                  value="No"
                  name="radio-buttons"
                  label="No"
                  inputProps={{ 'aria-label': 'No' }}
                />
              </div>
            </Stack>

          </Stack>
          </CardContent>
          </Card>
        </Grid>
      </Dialog>
    </div>
  );
} 
