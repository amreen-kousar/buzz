import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import {
  Button,
  Grid,
  Stack,
  TextField,
  Select,
  Radio,
  RadioGroup,
  InputLabel,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Card,
  CardContent,
  CardActionArea,DialogContent,DialogContentText
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
import { Color } from '@mui/material';
import { Link } from 'react-router-dom';
import Iconify from '../../../components/Iconify';
import { Icon } from '@iconify/react';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Vyaparprogram() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [vyaparform,setvyaparform]=useState('');
  const [survey,setsurvey] = React.useState('');
  const [education,seteducation]= React.useState('');
  const [maritalstatus,setmaritalstatus] = React.useState('');
  const [phone,setphone] = React.useState('');
  const [sector,setSector] = React.useState('');
  const [numberproficiency,setnumberproficiency]=React.useState('');
  const [writtenproficiency,setwrittenproficiency]=React.useState('');
  const [bussinessyears,setBussinessyears]=React.useState('');
  const [licensevalue,setlicensevalue]=React.useState('');
  const [homebased,sethomebased] = React.useState('');
  const [challengesvalue,setChallengesvalue] = React.useState('');
  const [bussinesscurrentstate,setbussinesscurrentstate]=React.useState('');
  const [accountbooks,setaccountbooks]=React.useState('');
  const [generateideas,setgenerateideas]=React.useState('');
  const [bussinessplan,setbussinessplan]=React.useState('');
  const [submitbussinessplan,setsubmitbussinessplan]=React.useState('');
  const [loan,setloan]= React.useState('');
  const [accessingloan,setaccessingloan]=React.useState('');
  const [finance,setfinance]=React.useState('');
  const [currentloan,setcurrentloan]=React.useState('');
  const [bussinesskills,setbussinesskills] = React.useState('');
  const [checked,setChecked] = React.useState({
    tell_us_three_things_about_you_as_an_entrepreneur:[],
    please_list_down_the_various_components_of_business:[],
    what_are_the_prerequisites_to_access_a_loan_Tick_the_ones_you_think_you_need:[]
  });
  const [vyaapar, setVyaapar] = useState('');  
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const [sendData,setSendData] = useState({
  gfId:"",
  when_was_survey_done:"",
  name_of_the_vyapari:"",
  age:"",
  contact_number:"",
  village_id:"",
  location_circle:"",
  higher_education:"",
  marital_status:"",
  number_of_people_in_the_household:"",
  do_you_own_a_smart_phone:"",
  do_you_have_internet_connection_on_your_smart_phone:"",
  sector_type_of_business:"",
  are_you_proficient_with_numbers:"",
  are_you_proficient_with_written_language:"",
  household_income_monthly:"",
  over_the_last_month_your_average_income:"",
  your_business_profit_last_month:"",
  how_much_monthly_income_would_you_like_to_ideally_earn:"",
  amount_invested_when_the_business_started:"",
  number_of_years_the_business_has_been_operating:"",
  reason_for_stopping_bussiness:"",
  hours_engaged_in_bussiness:"",
  license_for_existing_bussiness:"",
  home_based_or_will_you_work_from_home:"",
  why_do_you_do_business:"",
  tell_us_three_things_about_you_as_an_entrepreneur:"",
  tell_us_three_things_about_your_role_as_a_woman_at_home:"",
  what_are_your_challenges_in_running_and_growing_your_business:"",
  what_is_your_plan_to_overcome_these_challenges:"",
  what_are_your_skills:"",
  what_are_the_resources_available_with_you_for_your_business:"",
  who_is_your_customer_Describe_them_to_us:"",
  please_list_down_the_various_components_of_business:"",
  I_know_the_current_state_of_my_business_in_terms_of_is_it_making_profit_loss_revenue:"",
  what_kind_of_books_of_accounts_do_you_maintain:"",
  i_am_confident_that_I_can_generate_ideas_to_solve_my_business_problems:"",
  tell_us_about_one_business_problem_you_solved_how_did_you_solve_it:"",
  what_is_your_business_goal_Business_impurumenet_madodu:"",
  do_you_have_a_business_plan_to_reach_that_goal:"",
  can_you_submit_a_business_plan_for_your_goal_to_us_right_now:"",
  what_are_the_strenghts_of_your_business:"",
  what_are_the_weaknesses_of_your_business:"",
  what_are_the_oppourtunities_for_your_business:"",
  are_you_able_to_raise_the_required_finance_for_your_business_right_now:"",
  i_have_taken_a_loan_from:"",
  i_have_trouble_accessing_loan_for_my_business:"",
  what_are_the_prerequisites_to_access_a_loan_Tick_the_ones_you_think_you_need:"",
  any_loan_currently_availed_by_your_family:"",
  need_any_additional_skills_to_run_your_bussiness:"",
})
 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    gelathinamelist();
      // setenrolledVyaapar([{ stockname: "fist" }, { stockname: "second" }])
  }, []
  )


  const vyaparformdata= async =>{
    var data = JSON.stringify({
      "partcipantId":2,
      "gfId":sendData?.gfId,
      "when_was_survey_done":survey,
      "name_of_the_vyapari":sendData?.name_of_the_vyapari,
      "age":sendData?.age,
      "contact_number":sendData?.contact_number,
      "village_id":sendData?.village_id,
      "location_circle":sendData?.location_circle,
      "higher_education":education,
      "marital_status":maritalstatus,
      "number_of_people_in_the_household":sendData?.number_of_people_in_the_household,
      "do_you_own_a_smart_phone":phone,
      "do_you_have_internet_connection_on_your_smart_phone":"3",
      "sector_type_of_business":sector,
      "are_you_proficient_with_numbers":numberproficiency,
      "are_you_proficient_with_written_language":writtenproficiency,
      "household_income_monthly":sendData?.household_income_monthly,
      "over_the_last_month_your_average_income":sendData?.over_the_last_month_your_average_income,
      "your_business_profit_last_month":sendData?.your_business_profit_last_month,
      "how_much_monthly_income_would_you_like_to_ideally_earn":sendData?.how_much_monthly_income_would_you_like_to_ideally_earn,
      "amount_invested_when_the_business_started":sendData?.amount_invested_when_the_business_started,
      "number_of_years_the_business_has_been_operating":bussinessyears,
      "reason_for_stopping_bussiness":sendData?.reason_for_stopping_bussiness,
      "hours_engaged_in_bussiness":sendData?.hours_engaged_in_bussiness,
      "license_for_existing_bussiness":licensevalue,
      "home_based_or_will_you_work_from_home":homebased,
      "why_do_you_do_business":sendData?.why_do_you_do_business,
      "tell_us_three_things_about_you_as_an_entrepreneur":checked['tell_us_three_things_about_you_as_an_entrepreneur'],
      "tell_us_three_things_about_your_role_as_a_woman_at_home":sendData?.tell_us_three_things_about_your_role_as_a_woman_at_home,
      "what_are_your_challenges_in_running_and_growing_your_business":challengesvalue,
      "what_is_your_plan_to_overcome_these_challenges":sendData?.what_is_your_plan_to_overcome_these_challenges,
      "what_are_your_skills":sendData?.what_are_your_skills,
      "what_are_the_resources_available_with_you_for_your_business":sendData?.what_are_the_resources_available_with_you_for_your_business,
      "who_is_your_customer_Describe_them_to_us":sendData?.who_is_your_customer_Describe_them_to_us,
      "please_list_down_the_various_components_of_business":checked['please_list_down_the_various_components_of_business'],
      "I_know_the_current_state_of_my_business_in_terms_of_is_it_making_profit_loss_revenue":bussinesscurrentstate,
      "what_kind_of_books_of_accounts_do_you_maintain":accountbooks,
      "i_am_confident_that_I_can_generate_ideas_to_solve_my_business_problems":generateideas,
      "tell_us_about_one_business_problem_you_solved_how_did_you_solve_it":sendData?.tell_us_about_one_business_problem_you_solved_how_did_you_solve_it,
      "what_is_your_business_goal_Business_impurumenet_madodu":sendData?.what_is_your_business_goal_Business_impurumenet_madodu,
      "do_you_have_a_business_plan_to_reach_that_goal":bussinessplan,
      "can_you_submit_a_business_plan_for_your_goal_to_us_right_now":submitbussinessplan,
      "what_are_the_strenghts_of_your_business":sendData?.what_are_the_strenghts_of_your_business,
      "what_are_the_weaknesses_of_your_business":sendData?.what_are_the_weaknesses_of_your_business,
      "what_are_the_oppourtunities_for_your_business":sendData?.what_are_the_oppourtunities_for_your_business,
      "are_you_able_to_raise_the_required_finance_for_your_business_right_now":finance,
      "i_have_taken_a_loan_from":loan,
      "i_have_trouble_accessing_loan_for_my_business":accessingloan,
      "what_are_the_prerequisites_to_access_a_loan_Tick_the_ones_you_think_you_need":checked['what_are_the_prerequisites_to_access_a_loan_Tick_the_ones_you_think_you_need'],
      "any_loan_currently_availed_by_your_family":currentloan,
      " need_any_additional_skills_to_run_your_bussiness":bussinesskills
      });
      
      var config = {
        method: 'post',
        url: 'https://bdms.buzzwomen.org/appTest/new/updateBuzzVyaparProgramBaseline.php',
        headers: {
          'Content-Type': 'application/json'
        },
        data : data
      
      };
      // Console.log(data,"dataaaaaaaaaaaaaaaaaaaaaaaaaaa")
      axios(config)
      .then(function (response) {
        setvyaparform(response?.data)
      })
      .catch(function (error) {
        console.log(error);
      });
      
}



  const gelathinamelist= async =>{
      var data = JSON.stringify({
          "partcipantId":457065
        });
        
        var config = {
          method: 'post',
          url: 'https://bdms.buzzwomen.org/appTest/getGelathiList.php',
          headers: {
            'Content-Type': 'application/json'
          },
          data : data
        
        };
        // Console.log(data,"dataaaaaaaaaaaaaaaaaaaaaaaaaaa")
        axios(config)
        .then(function (response) {
          setVyaapar(response?.data)
        })
        .catch(function (error) {
          console.log(error);
        });
        
  }

  const surveydone=(event)=>{
    setsurvey(event.target.value)
  }

  const educationlevel=(event)=>{
    seteducation(event.target.value)
  }
  
  const marital=(event)=>{
    setmaritalstatus(event.target.value)
  }

  const phonestatus=(event)=>{
    setphone(event.target.value)
  }

  const sectortype=(event)=>{
      setSector(event.target.value)
  }

  const numberproficiencyvalue=(event)=>{
    setnumberproficiency(event.target.value)
  }

  const writtenproficiencyvalue=(event)=>{
    setwrittenproficiency(event.target.value)
  }

  const bussinessyearsvalue=(event)=>{
    setBussinessyears(event.target.value)
  }

  const handlelicensevalue=(event)=>{
    setlicensevalue(event.target.value)
  }

  const homebasedvalue=(event)=>{
    sethomebased(event.target.value)
  }

  const challengesbussiness=(event)=>{
    setChallengesvalue(event.target.value)
  }

  const bussinesscurrentstatevalue=(event)=>{
         setbussinesscurrentstate(event.target.value)
  }

  const handleaccountbooks=(event)=>{
    setaccountbooks(event.target.value)
  }

  const generateideasvalue=(event)=>{
    setgenerateideas(event.target.value)
  }

  const bussinessplanvalue=(event)=>{
    setbussinessplan(event.target.value)
  }
   
  const submitbussinessplanvalue=(event)=>{
    setsubmitbussinessplan(event.target.value)
  }

  const financevalue=(event)=>{
    setfinance(event.target.value)
  }
  
  const loanvalue=(event)=>{
    setloan(event.target.value)
  }

  const accessingloanvalue=(event)=>{
    setaccessingloan(event.target.value)
  }

  const currentloanvalue=(event)=>{
    setcurrentloan(event.target.value)
  }

  const bussinesskillsvalue=(event)=>{
    setbussinesskills(event.target.value)
  }

  const handleprerequisites = (label,event) => {
    var updatedList = [...checked[label]];
    if (event.target.checked) {
      updatedList = [...checked[label], event.target.value];
    } else {
      updatedList.splice(checked[label].indexOf(event.target.value), 1);
    }
    let tempData = {...checked}
    tempData[label]=updatedList
    setChecked(tempData);
  
  };
 
  
  return (
    <div>
     
        <Stack style={{ position:'absolute',right:0 ,float:'right' }}  mb={2}>
      
        <IconButton onClick={handleClickOpen}>
         <Icon  icon="clarity:form-line" width={20} height={20} marginTop={20}  color="#ff7424"  />
        </IconButton>
        </Stack> 
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar sx={{ position: 'relative', bgcolor: '#ff7424' }}>
          <Toolbar>
          
                        <IconButton style={{color:"white"}} onClick={handleClose}>
                            <Iconify icon="material-symbols:arrow-back-rounded" />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1, color: "inherit" }} variant="h6" component="div" >
          Buzz Vyapar Program Baseline
          </Typography>


          <Button autoFocus edge="end" color="inherit" onClick={() => vyaparformdata()}>
          <Iconify icon="material-symbols:save" width={30} height={30} />
          </Button>
       
         
          </Toolbar>
        </AppBar>
        <DialogContent dividers={scroll === 'paper'} sx={{ background: "#f9fafb" }}>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
        <Grid>
        {/* <Card mt={1} style={{ borderRadius: 20}} >
                <CardContent>
               
                    <Typography variant="subtitle2" style={{color:'white',backgroundColor:"#ff7424",padding:10,borderRadius:5}}>
                    Buzz Vyapar Program Baseline
                  </Typography>  
                  <Typography variant="subtitle2" style={{color:'#ff7424',backgroundColor:"white",paddingTop:10}}>
                    * Required
                  </Typography>  
                  </CardContent>    
          </Card> */}

          <Card>
     
            <CardContent>
            
            <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>Name of the GF / ?????????????????? ??????????????? *</Typography>
                  <Stack mt={2} mb={2}>
               
              <Select color="common" label="Choose Gelathi Facilitator" variant="standard" onChange={(e) => setSendData({ ...sendData, gfId: e?.target?.value })} value={sendData?.gfId}>
              
                  {vyaapar?.list?.map((itm)=>{
                    return(
                            <MenuItem value={itm?.id}>{itm?.first_name}</MenuItem>
                    )
                  })}
                </Select>
                  </Stack>
                </CardContent>
              </Card>
                  <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>When was survey done / ????????????????????? ??????????????? ???????????????????????????? *</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      value={survey}
                      onChange={surveydone}
                    >
                      <FormControlLabel value="Before Bootcamp1" control={<Radio style={{color:"#595959"}}  />} label="Before Bootcamp1" />
                      <FormControlLabel value="Before Bootcamp2" control={<Radio style={{color:"#595959"}} />} label="Before Bootcamp2" />
                      <FormControlLabel value="Other" control={<Radio style={{color:"#595959"}} />} label="Other" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
           
              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>Name of vyapari / ??????????????????????????? ???????????????*</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="vyapari name" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, name_of_the_vyapari: e?.target?.value })} value={sendData?.name_of_the_vyapari}/>
                  </Stack>
                </CardContent>
              </Card>
               
                
              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>Age / ?????????????????? *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="Age" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, age:e.target.value})} value={sendData?.age}/>
                  </Stack>
                </CardContent>
              </Card>
              
                 
              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>Contact Number /?????????????????? ?????????????????? *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="phone number" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, contact_number:e.target.value})} value={sendData?.contact_number} />
                  </Stack>
                </CardContent>
              </Card>
               
               
              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Village Name *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="village Name" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, village_id:e.target.value})} value={sendData?.village_id}/>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Name of the Cohort / ????????????/??????????????? *</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="cohort name" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, location_circle:e.target.value})} value={sendData?.location_circle} />
                  </Stack>
                </CardContent>
              </Card>
                 
              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Education / ?????????????????????????????????</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      value={education}
                      onChange={educationlevel}
                    >
                      <FormControlLabel value="Below 8th std" control={<Radio style={{color:"#595959"}} />} label="Below 8th std" />
                      <FormControlLabel value="10th - 12th std" control={<Radio style={{color:"#595959"}} />} label="10th - 12th std" />
                      <FormControlLabel value="Under graduate" control={<Radio style={{color:"#595959"}} />} label="Under graduate" />
                      <FormControlLabel value="Post graduation" control={<Radio style={{color:"#595959"}} />} label="Post graduation" />
                      <FormControlLabel value="Technical(ITI/Diploma)" control={<Radio style={{color:"#595959"}} />} label="Technical(ITI/Diploma)" />
                      <FormControlLabel value="No formal education" control={<Radio style={{color:"#595959"}} />} label="No formal education" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
                

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Marital Status / ????????????????????? ?????????????????? </Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      value={maritalstatus}
                      onChange={marital}
                    >
                      <FormControlLabel value="Married" control={<Radio style={{color:"#595959"}} />} label="Married" />
                      <FormControlLabel value="Unmarried" control={<Radio style={{color:"#595959"}} />} label="Unmarried" />
                      <FormControlLabel value="Widowed" control={<Radio style={{color:"#595959"}} />} label="Widowed" />
                      <FormControlLabel value="Seperated" control={<Radio style={{color:"#595959"}} />} label="Separated" />
                      <FormControlLabel value="Divorced" control={<Radio style={{color:"#595959"}} />} label="Divorced" />
                    
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
                
              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Number of people in the household / ????????????????????????????????? ????????? ??????????????????</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="household peoplecount " label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, number_of_people_in_the_household:e.target.value})} value={sendData?.number_of_people_in_the_household}/>
                  </Stack>
                </CardContent>
              </Card>
              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Do you own a smart phone / ???????????? ???????????????????????? ???????????? ??????????????????????????????????</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      value={phone}
                      onChange={phonestatus}
                    >
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
          


              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
               
                <CardContent>
               <Typography style={{color:"#ff7424"}}>Sector/Type of business ???????????????????????? ???????????????????????? ?????????/ ????????? ??????????????? ?????????????????? (????????? ?????????????????? ??? ??????????????????????????? ???????????????????????????)</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                      value={sector}
                      onChange={sectortype}
                    
                    >
                      <FormControlLabel value="Animal husbandry" control={<Radio style={{color:"#595959"}} />} label="Animal husbandry" />
                      <FormControlLabel value="Petty shop" control={<Radio style={{color:"#595959"}} />} label="Petty shop" />
                      <FormControlLabel value="Clothes Selling" control={<Radio style={{color:"#595959"}} />} label="Clothes Selling" />
                      <FormControlLabel value="Vegetable Vendor" control={<Radio style={{color:"#595959"}} />} label="Vegetable Vendor" />
                      <FormControlLabel value="Hotel or Catering" control={<Radio style={{color:"#595959"}} />} label="Hotel or Catering" />
                      <FormControlLabel value="Tailor" control={<Radio style={{color:"#595959"}} />} label="Tailor" />
                      <FormControlLabel value="Beautician" control={<Radio style={{color:"#595959"}} />} label="Beautician" />
                      <FormControlLabel value="Rope making" control={<Radio style={{color:"#595959"}} />} label="Rope making" />
                      <FormControlLabel value="Edible oil selling" control={<Radio style={{color:"#595959"}} />} label="Edible oil selling" />
                      <FormControlLabel value="Other" control={<Radio style={{color:"#595959"}} />} label="Other" />
                    </RadioGroup>
          
                </CardContent>
              </Card>
                 
                    <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                  <Typography style={{color:"#ff7424"}}>Are you proficient with numbers? / ???????????? ???????????????????????????????????? ????????????????????????????????????????????????</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      value={numberproficiency}
                      onChange={numberproficiencyvalue}
                    >
                      <FormControlLabel value="Basic" control={<Radio style={{color:"#595959"}} />} label="Basic" />
                      <FormControlLabel value="Proficient" control={<Radio style={{color:"#595959"}} />} label="Proficient" />
                      <FormControlLabel value="Competent" control={<Radio style={{color:"#595959"}} />} label="Competent" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
                
                

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Are you proficient with written language / ???????????? ??????????????? ??????????????????????????? ????????????????????????????????????????????????</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      value={writtenproficiency}
                      onChange={writtenproficiencyvalue}
                    >
                      <FormControlLabel value="Basic" control={<Radio style={{color:"#595959"}} />} label="Basic" />
                      <FormControlLabel value="Proficient" control={<Radio style={{color:"#595959"}} />} label="Proficient" />
                      <FormControlLabel value="Competent" control={<Radio style={{color:"#595959"}} />} label="Competent" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
                
              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Household income (Monthly) ???????????????????????? (???????????????)</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="income" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, household_income_monthly:e.target.value})} value={sendData?.household_income_monthly}/>
                  </Stack>
                </CardContent>
              </Card>
             
              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Over the last month your average income / ???????????? ?????????????????? ??????????????? ?????????????????? ????????????</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="average income" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, over_the_last_month_your_average_income:e.target.value})} value={sendData?.over_the_last_month_your_average_income} />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Your profit (last month) / ??????????????? ????????? (???????????? ??????????????????) </Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="profit" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, your_business_profit_last_month:e.target.value})} value={sendData?.your_business_profit_last_month} />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>How much monthly income would you like to ideally earn / ???????????? ??????????????? ??????????????? ??????????????????????????? ?????????????????????????????????????????? ?????????????????? ??????????????????????????????</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="monthlyincome" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, how_much_monthly_income_would_you_like_to_ideally_earn:e.target.value})} value={sendData?.how_much_monthly_income_would_you_like_to_ideally_earn}/>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Amount invested when the business started (approximately if they know) / ????????????????????? ???????????????????????????????????? ?????????????????? ??????????????? ??????????????? (???????????? ?????????????????????????????????)</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="invested amount" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, amount_invested_when_the_business_started:e.target.value})} value={sendData?.amount_invested_when_the_business_started} />
                  </Stack>
                </CardContent>
              </Card>


              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Number of years the business has been operating / ??????????????????????????? ??????????????????????????????????????????????????????????????? ?????????????????? ??????????????????</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      value={bussinessyears}
                      onChange={bussinessyearsvalue}
                    >
                      <FormControlLabel value="Less than 1 year" control={<Radio style={{color:"#595959"}} />} label="Less than 1 year" />
                      <FormControlLabel value="1-3 years" control={<Radio style={{color:"#595959"}} />} label="1-3 years" />
                      <FormControlLabel value="4-6 years" control={<Radio style={{color:"#595959"}} />} label="4-6 years" />
                      <FormControlLabel value="5-8 years" control={<Radio style={{color:"#595959"}} />} label="5-8 years" />
                      <FormControlLabel value="8-10 years" control={<Radio style={{color:"#595959"}} />} label="8-10 years" />
                      <FormControlLabel value="more than 10 years" control={<Radio style={{color:"#595959"}} />} label="more than 10 years" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>For any reason have you stopped or kept hold your business / ?????????????????? ?????????????????????????????? ???????????? ??????????????? ???????????????????????????????????? ?????????????????????????????????????????? ???????????? ??????????????????????????????????????????????????????????????????</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="reason" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, reason_for_stopping_bussiness:e.target.value})} value={sendData?.reason_for_stopping_bussiness}/>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>No.of hours engaged in a day for business / ??????????????????????????????????????? ???????????? ???????????????????????? ??????????????? ????????????????????? ????????????????????????????????????????????????????</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="hours" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, hours_engaged_in_bussiness:e.target.value})} value={sendData?.hours_engaged_in_bussiness}/>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Do you have license for existing business / ???????????????????????????????????????????????? ??????????????????????????????????????? ???????????? ????????????????????? ??????????????????????????????????</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      value={licensevalue}
                      onChange={handlelicensevalue}
                    >
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Is it home based or will you work from a shop/business unit/ ????????? ????????? ?????????????????????????????????????????? ???????????? ???????????? ???????????????/ ????????????????????? ????????????????????? ???????????? ???????????????????????????????</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      value={homebased}
                      onChange={homebasedvalue}
                    >
                      <FormControlLabel value="I work from home" control={<Radio style={{color:"#595959"}} />} label="I work from home" />
                      <FormControlLabel value="I have my own business space" control={<Radio style={{color:"#595959"}} />} label="I have my own business space" />
                      <FormControlLabel value="I share the space with husband/family member" control={<Radio style={{color:"#595959"}} />} label="I share the space with husband/family member" />
                      
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
              
              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Why do you do business / ???????????? ???????????? ????????????????????? ??????????????????????????????</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="business reason" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, why_do_you_do_business:e.target.value})} value={sendData?.why_do_you_do_business}/>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>Tell us three things about you as an enterpreneur / ??????????????????????????????????????????????????? ??????????????? ??????????????? ???????????? ?????????????????????????????? ???????????? ??????????????????</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel value="Self Motivated" control={<Checkbox style={{color:"#595959"}} />} label="Self Motivated" onChange={(event)=>handleprerequisites('tell_us_three_things_about_you_as_an_entrepreneur',event)}/>
                      <FormControlLabel value="Financial knowledge" control={<Checkbox style={{color:"#595959"}} />} label="Financial knowledge" onChange={(event)=>handleprerequisites('tell_us_three_things_about_you_as_an_entrepreneur',event)}/>
                      <FormControlLabel value="Hard working" control={<Checkbox style={{color:"#595959"}} />} label="Hard working"onChange={(event)=>handleprerequisites('tell_us_three_things_about_you_as_an_entrepreneur',event)}/>
                      <FormControlLabel value="Leadership quality" control={<Checkbox style={{color:"#595959"}} />} label="Leadership quality"onChange={(event)=>handleprerequisites('tell_us_three_things_about_you_as_an_entrepreneur',event)}/>
                      <FormControlLabel value="Decision maker" control={<Checkbox style={{color:"#595959"}} />} label="Decision maker"onChange={(event)=>handleprerequisites('tell_us_three_things_about_you_as_an_entrepreneur',event)}/>
                      <FormControlLabel value="Business Vision" control={<Checkbox style={{color:"#595959"}} />} label="Business Vision"onChange={(event)=>handleprerequisites('tell_us_three_things_about_you_as_an_entrepreneur',event)}/>
                      <FormControlLabel value="Market Knowledge" control={<Checkbox style={{color:"#595959"}} />} label="Market Knowledge"onChange={(event)=>handleprerequisites('tell_us_three_things_about_you_as_an_entrepreneur',event)}/>
                      <FormControlLabel value="Others" control={<Checkbox style={{color:"#595959"}} />} label="Others"onChange={(event)=>handleprerequisites('tell_us_three_things_about_you_as_an_entrepreneur',event)}/>
                    </FormGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Tell us three things about your role as a woman at home</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="reason" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, tell_us_three_things_about_your_role_as_a_woman_at_home:e.target.value})} value={sendData?.tell_us_three_things_about_your_role_as_a_woman_at_home} />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#ff7424',borderRadius:0,height:'60px'}}>
                <CardContent>
                <Typography style={{color:"#ffffff"}}>Business Challenges</Typography>
                
                </CardContent>
              </Card>

    
              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>What are your challenges in running and growing your business? / ??????????????? ???????????????????????????????????? ?????????????????????????????? ??????????????? ????????????????????????????????? ??????????????? ??????????????????????????????</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      value={challengesvalue}
                      onChange={challengesbussiness}
                    >
                      <FormControlLabel value="Limited Funding" control={<Radio style={{color:"#595959"}} />} label="Limited Funding" />
                      <FormControlLabel value="Balancing Responsibilities" control={<Radio style={{color:"#595959"}} />} label="Balancing Responsibilities" />
                      <FormControlLabel value="Fear of Failure" control={<Radio style={{color:"#595959"}} />} label="Fear of Failure" />
                      <FormControlLabel value="No Support System" control={<Radio style={{color:"#595959"}} />} label="No Support System" />
                      <FormControlLabel value="Limited business knowledge" control={<Radio style={{color:"#595959"}} />} label="Limited business knowledge" />
                      <FormControlLabel value="Other" control={<Radio style={{color:"#595959"}} />} label="Other" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>What is your plan to overcome these challenges?</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="challenges" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, what_is_your_plan_to_overcome_these_challenges:e.target.value})} value={sendData?.what_is_your_plan_to_overcome_these_challenges} />
                  </Stack>
                </CardContent>
              </Card>

              
              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>What are your skills?</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="skills" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, what_are_your_skills:e.target.value})} value={sendData?.what_are_your_skills} />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>What are the resources available with you for your business? / ??????????????? ??????????????????????????????????????? ??????????????? ????????? ??????????????????????????? ????????????????????????????????? ???????????????????</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="resources" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, what_are_the_resources_available_with_you_for_your_business:e.target.value})} value={sendData?.what_are_the_resources_available_with_you_for_your_business} />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#ff7424',borderRadius:0,height:'60px'}}>
                <CardContent>
                <Typography style={{color:"#ffffff"}}>Business Components</Typography>
                
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Who is your customer? Describe them to us / ??????????????? ?????????????????? ????????????? ??????????????????????????? ???????????? ?????????????????????</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="customer" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, who_is_your_customer_Describe_them_to_us:e.target.value})} value={sendData?.who_is_your_customer_Describe_them_to_us} />
                  </Stack>
                </CardContent>
              </Card>

 

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>Please identify parts/aspects of business / ???????????????????????? ??????????????????/???????????????????????????????????? ????????????????????????</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel value="Infrastructure" control={<Checkbox style={{color:"#595959"}} />} label="Infrastructure" onChange={(event)=>handleprerequisites('please_list_down_the_various_components_of_business',event)}/>
                      <FormControlLabel value="Marketing" control={<Checkbox style={{color:"#595959"}} />} label="Marketing"onChange={(event)=>handleprerequisites('please_list_down_the_various_components_of_business',event)} />
                      <FormControlLabel value="Funding" control={<Checkbox style={{color:"#595959"}} />} label="Funding"onChange={(event)=>handleprerequisites('please_list_down_the_various_components_of_business',event)}/>
                      <FormControlLabel value="Customers" control={<Checkbox style={{color:"#595959"}} />} label="Customers"onChange={(event)=>handleprerequisites('please_list_down_the_various_components_of_business',event)}/>
                      <FormControlLabel value="Products/Services" control={<Checkbox style={{color:"#595959"}} />} label="Products/Services"onChange={(event)=>handleprerequisites('please_list_down_the_various_components_of_business',event)}/>
                      <FormControlLabel value="Family support" control={<Checkbox style={{color:"#595959"}} />} label="Family support"onChange={(event)=>handleprerequisites('please_list_down_the_various_components_of_business',event)}/>
                      <FormControlLabel value="Confidence" control={<Checkbox style={{color:"#595959"}} />} label="Confidence"onChange={(event)=>handleprerequisites('please_list_down_the_various_components_of_business',event)}/>
                      <FormControlLabel value="Good Communication" control={<Checkbox style={{color:"#595959"}} />} label="Good Communication"onChange={(event)=>handleprerequisites('please_list_down_the_various_components_of_business',event)}/>
                    </FormGroup>
                  </Stack>
                </CardContent>
              </Card>


              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>I know the current state of my business in terms of is it making profit, loss revenue </Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      value={bussinesscurrentstate}
                      onChange={bussinesscurrentstatevalue}
                    >
                      <FormControlLabel value="Strongly Agree" control={<Radio style={{color:"#595959"}} />} label="Strongly Agree" />
                      <FormControlLabel value="Agree" control={<Radio style={{color:"#595959"}} />} label="Agree" />
                      <FormControlLabel value="Neutral" control={<Radio style={{color:"#595959"}} />} label="Neutral" />
                      <FormControlLabel value="Disagree" control={<Radio style={{color:"#595959"}} />} label="Disagree" />
                      <FormControlLabel value="Strongly Disagree" control={<Radio style={{color:"#595959"}} />} label="Strongly Disagree" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
              
              
              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>What kind of books of accounts do you maintain?</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      value={accountbooks}
                      onChange={handleaccountbooks}
                    >
                      <FormControlLabel value="I maintain no accounts" control={<Radio style={{color:"#595959"}} />} label="I maintain no accounts" />
                      <FormControlLabel value="I have rough accounts" control={<Radio style={{color:"#595959"}} />} label="I have rough accounts" />
                      <FormControlLabel value="I have a proper accounts" control={<Radio style={{color:"#595959"}} />} label="I have a proper accounts" />
                     
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

          
              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>I am confident that i can generate ideas to solve my business problems</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      value={generateideas}
                      onChange={generateideasvalue}
                    >
                      <FormControlLabel value="Strongly Agree" control={<Radio style={{color:"#595959"}} />} label="Strongly Agree" />
                      <FormControlLabel value="Agree" control={<Radio style={{color:"#595959"}} />} label="Agree" />
                      <FormControlLabel value="Neutral" control={<Radio style={{color:"#595959"}} />} label="Neutral" />
                      <FormControlLabel value="Disagree" control={<Radio style={{color:"#595959"}} />} label="Disagree" />
                      <FormControlLabel value="Strongly Disagree" control={<Radio style={{color:"#595959"}} />} label="Strongly Disagree" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
              
              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>Tell us about one business problm you solved, how did you solve it?</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="business sol" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, tell_us_about_one_business_problem_you_solved_how_did_you_solve_it:e.target.value})} value={sendData?.tell_us_about_one_business_problem_you_solved_how_did_you_solve_it}  />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#ff7424',borderRadius:0,height:'60px'}}>
                <CardContent>
                <Typography style={{color:"#ffffff"}}>Business Goal</Typography>
                
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>What is your business goal / ??????????????? ????????????????????? ???????????? ??????????</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="business goal" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, what_is_your_business_goal_Business_impurumenet_madodu:e.target.value})} value={sendData?.what_is_your_business_goal_Business_impurumenet_madodu}/>
                  </Stack>
                </CardContent>
              </Card>
              
          
              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Do you have a business plan to reach that goal?</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      value={bussinessplan}
                      onChange={bussinessplanvalue}
                    >
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="I don't know" control={<Radio style={{color:"#595959"}} />} label="I don't know" />
                      
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Can you submit a business plan for your goal to us right now?</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      value={submitbussinessplan}
                      onChange={submitbussinessplanvalue}
                    >
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                      <FormControlLabel value="I don't know" control={<Radio style={{color:"#595959"}} />} label="I don't know" />
                      
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              
              <Card style={{ marginTop: 20, backgroundColor: '#ff7424',borderRadius:0,height:'60px'}}>
                <CardContent>
                <Typography style={{color:"#ffffff"}}>SWOT Analysis</Typography>
                
                </CardContent>
              </Card>
 
              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>What are strengths of your business?</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="strengths" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, what_are_the_strenghts_of_your_business:e.target.value})} value={sendData?.what_are_the_strenghts_of_your_business}/>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>What are weaknesses of your business?</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="weakness" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, what_are_the_weaknesses_of_your_business:e.target.value})} value={sendData?.what_are_the_weaknesses_of_your_business}/>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                <Typography style={{color:"#ff7424"}}>What are opportunities of your business?</Typography>
                  <Stack mt={2} mb={2}>
                    <TextField id="opportunities" label="Your Answer" variant="outlined" color="common" onChange={(e) => setSendData({ ...sendData, what_are_the_oppourtunities_for_your_business:e.target.value})} value={sendData?.what_are_the_oppourtunities_for_your_business} />
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20, backgroundColor: '#ff7424',borderRadius:0,height:'60px'}}>
                <CardContent>
                <Typography style={{color:"#ffffff"}}>Access to finance</Typography>
                
                </CardContent>
              </Card>
             
             
              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Are you able to raise the required finance for your business right now?/ ???????????? ??????????????? ????????????????????????????????? ?????????????????????????????? ?????????????????? ?????????????????????????????? ??????????????? ?????????????????????????????????????????????????</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      value={finance}
                      onChange={financevalue}
                    >
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>


                 
              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>I have taken a loan from</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      value={loan}
                      onChange={loanvalue}
                    >
                      <FormControlLabel value="Government bank" control={<Radio style={{color:"#595959"}} />} label="Government bank" />
                      <FormControlLabel value="Private bank" control={<Radio style={{color:"#595959"}} />} label="Private bank" />
                      <FormControlLabel value="NGO" control={<Radio style={{color:"#595959"}} />} label="NGO" />
                      <FormControlLabel value="Money Lender" control={<Radio style={{color:"#595959"}} />} label="Money Lender" />
                      <FormControlLabel value="Middleman/trader" control={<Radio style={{color:"#595959"}} />} label="Middleman/trader" />
                      <FormControlLabel value="Parents" control={<Radio style={{color:"#595959"}} />} label="Parents" />
                      <FormControlLabel value="Relatives/Neighbors" control={<Radio style={{color:"#595959"}} />} label="Relatives/Neighbors" />
                      <FormControlLabel value="Friends" control={<Radio style={{color:"#595959"}} />} label="Friends" />
                      <FormControlLabel value="Social Welfare departments" control={<Radio style={{color:"#595959"}} />} label="Social Welfare departments" />
                      <FormControlLabel value="Cooperatives" control={<Radio style={{color:"#595959"}} />} label="Cooperatives" />
                      <FormControlLabel value="SHG Group" control={<Radio style={{color:"#595959"}} />} label="SHG Group" />
                      <FormControlLabel value="Other" control={<Radio style={{color:"#595959"}} />} label="Other" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

               
               <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>I have trouble accessing loan for my business</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      value={accessingloan}
                      onChange={accessingloanvalue}
                    >
                      <FormControlLabel value="Strongly Agree" control={<Radio style={{color:"#595959"}} />} label="Strongly Agree" />
                      <FormControlLabel value="Agree" control={<Radio style={{color:"#595959"}} />} label="Agree" />
                      <FormControlLabel value="Neutral" control={<Radio style={{color:"#595959"}} />} label="Neutral" />
                      <FormControlLabel value="Disagree" control={<Radio style={{color:"#595959"}} />} label="Disagree" />
                      <FormControlLabel value="Strongly Disagree" control={<Radio style={{color:"#595959"}} />} label="Strongly Disagree" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>


              
              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Typography style={{color:"#ff7424"}}>What are the prerequisites to access a loan? Tick the one's you think you need / ???????????????????????? ?????????????????????????????? ???????????????????????????????????????????????? ??????????????????? ??????????????? ???????????? ???????????? ???????????? ???????????????????????????????????? ???????????? ????????????</Typography>
                  <Stack mt={2}>
                    <FormGroup >
                      <FormControlLabel value="KYC documents of all the applicants - PAN card, Aadhar Crad, address proof" control={<Checkbox style={{color:"#595959"}} />} label="KYC documents of all the applicants - PAN card, Aadhar Crad, address proof" onChange={(event)=>handleprerequisites('what_are_the_prerequisites_to_access_a_loan_Tick_the_ones_you_think_you_need',event)}/>
                      <FormControlLabel value="Address Proof of the business premises" control={<Checkbox style={{color:"#595959"}} />} label="Address Proof of the business premises" onChange={(event)=>handleprerequisites('what_are_the_prerequisites_to_access_a_loan_Tick_the_ones_you_think_you_need',event)} />
                      <FormControlLabel value="2 Passport size photographs of the applicant" control={<Checkbox style={{color:"#595959"}} />} label="2 Passport size photographs of the applicant" onChange={(event)=>handleprerequisites('what_are_the_prerequisites_to_access_a_loan_Tick_the_ones_you_think_you_need',event)}/>
                      <FormControlLabel value="Light bill & rent agreement" control={<Checkbox style={{color:"#595959"}} />} label="Light bill & rent agreement" onChange={(event)=>handleprerequisites('what_are_the_prerequisites_to_access_a_loan_Tick_the_ones_you_think_you_need',event)}/>
                      <FormControlLabel value="Balance sheet and profit & Loss statement for the last 2-3 years" control={<Checkbox style={{color:"#595959"}} />} label="Balance sheet and profit & Loss statement for the last 2-3 years" onChange={(event)=>handleprerequisites('what_are_the_prerequisites_to_access_a_loan_Tick_the_ones_you_think_you_need',event)}/>
                      <FormControlLabel value="Quotations of machinery,equipment,furniture & other assets to be purchased" control={<Checkbox style={{color:"#595959"}} />} label="Quotations of machinery,equipment,furniture & other assets to be purchased" onChange={(event)=>handleprerequisites('what_are_the_prerequisites_to_access_a_loan_Tick_the_ones_you_think_you_need',event)} />
                      <FormControlLabel value="Letters of support, reference" control={<Checkbox style={{color:"#595959"}} />} label="Letters of support, reference" onChange={(event)=>handleprerequisites('what_are_the_prerequisites_to_access_a_loan_Tick_the_ones_you_think_you_need',event)}/>
                     
                    </FormGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Is there any loan currently availed by you/family / ????????????/?????????????????????????????? ???????????????????????? ??????????????????????????? ???????????? ??????????????? </Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      value={currentloan}
                      onChange={currentloanvalue}
                    >
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>

              <Card style={{ marginTop: 20,  borderRadius: 20 }}>
                <CardContent>
                  <Stack mt={2}>
                    <Typography style={{color:"#ff7424"}}>Do you need any additional skills to run your business / ??????????????? ???????????????????????????????????? ?????????????????? ??????????????? ?????????????????? ??????????????????????????? ???????????????????????? ??????????????????????????????????</Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="Yes"
                      name="radio-buttons-group"
                      value = {bussinesskills}
                      onChange={bussinesskillsvalue}
                    >
                      <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}} />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
                    </RadioGroup>
                  </Stack>
                </CardContent>
              </Card>
              {/* -------------------------------- */}
            </CardContent>
          </Card>
        </Grid>
        </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
