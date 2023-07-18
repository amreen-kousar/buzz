import * as React from 'react';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
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
  CardActionArea,
  DialogContent,
  DialogContentText,
  FormHelperText,
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
import { Link, useLocation } from 'react-router-dom';
import Iconify from '../../../components/Iconify';
import { Icon } from '@iconify/react';
import products from 'src/_mock/products';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Alert from '@mui/material/Alert';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function GreenSurvey(props) {
  
  const { state } = useLocation();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [age, setAge] = React.useState('');
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [greensurveyform, setgreensurveyform] = React.useState('');
  const [greenform, setGreenForm] = useState('');
  const [wealth, setwealth] = React.useState('');
  const [climate, setClimate] = React.useState('');
  const [weather, setweather] = React.useState('');
  const [tackleclimatechange, settackleclimatechange] = React.useState('');
  const [climatechangerating, setclimatechangerating] = React.useState('');
  const [somethingtackle, setsomethingtackle] = React.useState('');
  const [groundwaterstatement, setgroundwaterstatement] = React.useState('');
  const [waterquality, setwaterquality] = React.useState('');
  const [wateraffect, setwateraffect] = React.useState('');
  const [land, setland] = React.useState('');
  const [environment, setEnvironment] = React.useState('');
  const [householdactivity, sethouseholdactivity] = React.useState('');
  const [climateffort, setclimateffort] = React.useState('');
  const [climateaction, setclimateaction] = React.useState('');
  const [paychemicals, setpaychemicals] = React.useState('');
  const [pollutioncause, setpollutioncause] = React.useState('');
  const [products, setproducts] = React.useState('');
  const [foodconnection, setfoodconnection] = React.useState('');
  const [trees, settrees] = React.useState('');
  const [successMessage, setsuccessMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [checked, setChecked] = React.useState({
    natural_resources: [],
    natural_resources_impacting_your_life: [],
    changes_happened_to_the_climate: [],
    main_source_of_water: [],
  });
  const [initiativemeasures, setinitiativemeasures] = React.useState('');
  const [communitytogether, setcommunitytogether] = React.useState('');
  const [waterconservation, setwaterconservation] = React.useState('');
  const [naturalresourcesstate, setnaturalresourcesstate] = React.useState([]);

  const [climatechanges, setclimatechanges] = React.useState([]);
  const [sourceofwater, setsourceofwater] = React.useState([]);
  const [showClimateDiscription, setShowClimateDiscription] = React.useState(false);
  const [showWaterConsuDiscription, setShowWaterConsuDiscription] = React.useState(false);
  const [showHouseHoldDiscription, setShowHouseHoldDiscription] = React.useState(false);
  const [showEcoFriendlyDiscription, setShowEcoFriendlyDiscription] = React.useState(false);
  const [showClimateChangeDiscription, setShowClimateChangeDiscription] = React.useState(false);
  const [showpark, setShowPark] = React.useState(false);
  const [sendData, setSendData] = React.useState({
    Email: '',
    Name_of_the_surveyor: '',
    Name_of_the_respondent: '',
    Village_Name: '',
    Phone_number: '',
    natural_resources: '',
    natural_resources_impacting_your_life: '',
    Natural_Wealth: '',
    climate_change: '',
    What_do_you_know_about_it: '',
    change_in_the_weather_climate: '',
    changes_happened_to_the_climate: '',
    climate_change_threatens_personal_family_health_safety: '',
    done_to_tackle_climate_change: '',
    do_something_to_tackle_climate_change: '',
    main_source_of_water: '',
    shown_below_do_you_agree_with: '',
    How_concerned_local_water_quality: '',
    personal_actions_can_affect_water_quality: '',
    take_water_conservation_measures: '',
    If_yes_what_kind_of_measures: '',
    list_down_impact_of_climate_change: '',
    gifting_his_6_acres_land_to_children: '',
    Which_one_according_to_you_is_right: '',
    believe_connection_between_the_food_health_climate: '',
    native_food_you_believe_is_envionmentally_friendly: '',
    household_activity_pollutes_natural_resources: '',
    alternatives_household_materials_cause_pollution: '',
    If_yes_what_are_they: '',
    eco_friendly_products_and_activities: '',
    little_more_than_what_you_pay_for_the_chemicals: '',
    this_switch_to_eco_friendly_products: '',
    climate_change_is_a_lot_of_effort: '',
    action_out_of_concern_for_climate_change: '',
    If_yes_what_did_you_do_are_you_doing: '',
    natural_resource_community_immediate_attention_measures: '',
    If_yes_what_is_that_resource: '',
    achieve_with_regard_to_natural_resource_conservation: '',
    initiative_to_conserve_the_environment: '',
    community_together_achieve_my_conservation_goal: '',
  });
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

  const [helperText, setHelperText] = useState('');
  const [wealthError, setWealthError] = useState(false);
  const [climateError, setClimateError] = useState(false);
  const [weatherError, setWeatherError] = useState(false);
  const [climatechangeratingError, setClimatechangeratingError] = useState(false);
  const [tackleclimatechangeError, setTackleclimatechangeError] = useState(false);
  const [somethingtackleError, setSomethingtackleError] = useState(false);
  const [groundwaterstatementError, setGroundwaterstatementError] = useState(false);
  const [waterqualityError, setWaterqualityError] = useState(false);
  const [wateraffectError, setWateraffectError] = useState(false);
  const [waterconservationError, setWaterconservationError] = useState(false);
  const [landError, setLandError] = useState(false);
  const [treesError, setTreesError] = useState(false);
  const [foodconnectionError, setFoodconnectionError] = useState(false);
  const [householdactivityError, setHouseholdactivityError] = useState(false);
  const [pollutioncauseError, setPollutioncauseError] = useState(false);
  const [paychemicalsError, setPaychemicalsError] = useState(false);
  const [productsError, setProductsError] = useState(false);
  const [climateffortError, setClimateffortError] = useState(false);
  const [climateactionError, setClimateactionError] = useState(false);
  const [initiativemeasuresError, setInitiativemeasuresError] = useState(false);
  const [environmentError, setEnvironmentError] = useState(false);
  const [communitytogetherError, setCommunitytogetherError] = useState(false);

  // Save data to local storage

  const saveDataLocally = (key, data) => {
 
      const existingData = localStorage.getItem('green');
      const parsedData = existingData ? JSON.parse(existingData) : [];
      const newData = { ...data}; // Replace with your own data object
      parsedData.push(newData);
      const updatedData = JSON.stringify(parsedData);
      localStorage.setItem('green', updatedData);
      console.log("i called and store ", updatedData)
    // localStorage.setItem(key, JSON.stringify(data));
  };
  const localStorageData = localStorage.getItem('green');
useEffect(()=>{
  const existingData = localStorage.getItem('green');
      const parsedData = existingData ? JSON.parse(existingData) : [];
      if(parsedData?.length){
        parsedData.map(item=>{
          if(item?.partcipantId===props?.itm?.id || item?.partcipantId===props?.itm.gelathi_id){
            setSendData(item);
            setwealth(item?.Natural_Wealth)
          }
        })
      }
},[])

  // Get data from local storage
  const data1 = localStorage.getItem("green");
  console.log(JSON.parse(data1) ," getlocal")
  const getDataLocally = (key) => {
    const data = localStorage.getItem("green");
    console.log(data ," getlocal")

    return data ? JSON.parse(data) : null;
  };
  const isOnline = () => {
    return navigator.onLine;
  };

  const networkAccess = async () => {
    try {
      await fetch('https://www.google.com/', { mode: 'no-cors' });

      return true;
    } catch (error) {
      return false;
    }
  };
  const greensurveyformdata = async () => {
  var  data = {}

  data = JSON.stringify({
      partcipantId: props?.itm?.id || props?.itm.gelathi_id,
      Email: sendData?.Email,
      Name_of_the_surveyor: sendData?.Name_of_the_surveyor,
      Name_of_the_respondent: sendData?.Name_of_the_respondent,
      Village_Name: sendData?.Village_Name,
      Phone_number: sendData?.Phone_number,
      natural_resources: checked['natural_resources'],
      natural_resources_impacting_your_life: checked['natural_resources_impacting_your_life'],
      Natural_Wealth: wealth,
      climate_change: climate,
      What_do_you_know_about_it: sendData?.What_do_you_know_about_it,
      change_in_the_weather_climate: weather,
      changes_happened_to_the_climate: checked['changes_happened_to_the_climate'],
      climate_change_threatens_personal_family_health_safety: climatechangerating,
      done_to_tackle_climate_change: tackleclimatechange,
      do_something_to_tackle_climate_change: somethingtackle,
      main_source_of_water: checked['main_source_of_water'],
      shown_below_do_you_agree_with: groundwaterstatement,
      How_concerned_local_water_quality: waterquality,
      personal_actions_can_affect_water_quality: wateraffect,
      take_water_conservation_measures: waterconservation,
      If_yes_what_kind_of_measures: sendData?.If_yes_what_kind_of_measures,
      list_down_impact_of_climate_change: sendData?.list_down_impact_of_climate_change,
      gifting_his_6_acres_land_to_children: land,
      Which_one_according_to_you_is_right: trees,
      believe_connection_between_the_food_health_climate: foodconnection,
      native_food_you_believe_is_envionmentally_friendly:
        sendData?.native_food_you_believe_is_envionmentally_friendly,
      household_activity_pollutes_natural_resources: householdactivity,
      alternatives_household_materials_cause_pollution: pollutioncause,
      If_yes_what_are_they: sendData?.If_yes_what_are_they,
      eco_friendly_products_and_activities: sendData?.eco_friendly_products_and_activities,
      little_more_than_what_you_pay_for_the_chemicals: paychemicals,
      this_switch_to_eco_friendly_products: products,
      climate_change_is_a_lot_of_effort: climateffort,
      action_out_of_concern_for_climate_change: climateaction,
      If_yes_what_did_you_do_are_you_doing: 'No',
      natural_resource_community_immediate_attention_measures: initiativemeasures,
      If_yes_what_is_that_resource: sendData?.If_yes_what_is_that_resource,
      achieve_with_regard_to_natural_resource_conservation:
        sendData?.achieve_with_regard_to_natural_resource_conservation,
      initiative_to_conserve_the_environment: environment,
      community_together_achieve_my_conservation_goal: communitytogether,
    });
    if (isOnline() && networkAccess()) {
      let validationSchema = [
        {
          field: wealth,
          setField: setWealthError,
          errorText: 'Please Select The Option',
        },
      ];
      validationSchema.map((x) => {
        if (x.key == '') {
          const y = x.setField;
          y(true);
        }
      });
      if (wealth == '') {
        setWealthError(true);
        setHelperText('Please Select The Option');
      }
      if (climate == '') {
        setClimateError(true);
        setHelperText('Please Select The Option');
      }
      if (weather == '') {
        setWeatherError(true);
        setHelperText('Please Select The Option');
      }
      if (climatechangerating == '') {
        setClimatechangeratingError(true);
        setHelperText('Please Select The Option');
      }
      if (tackleclimatechange == '') {
        setTackleclimatechangeError(true);
        setHelperText('Please Select The Option');
      }
      if (somethingtackle == '') {
        setSomethingtackleError(true);
        setHelperText('Please Select The Option');
      }
      if (groundwaterstatement == '') {
        setGroundwaterstatementError(true);
        setHelperText('Please Select The Option');
      }
      if (waterquality == '') {
        setWaterqualityError(true);
        setHelperText('Please Select The Option');
      }
      if (wateraffect == '') {
        setWateraffectError(true);
        setHelperText('Please Select The Option');
      }
      if (waterconservation == '') {
        setWaterconservationError(true);
        setHelperText('Please Select The Option');
      }
      if (land == '') {
        setLandError(true);
        setHelperText('Please Select The Option');
      }
      if (trees == '') {
        setTreesError(true);
        setHelperText('Please Select The Option');
      }

      if (foodconnection == '') {
        setFoodconnectionError(true);
        setHelperText('Please Select The Option');
      }

      if (householdactivity == '') {
        setHouseholdactivityError(true);
        setHelperText('Please Select The Option');
      }
      if (checked['natural_resources'].length == 0) {
        setHouseholdactivityError(true);
        setHelperText('Please Select The Option');
      }
      if (checked['natural_resources_impacting_your_life'].length == 0) {
        setHouseholdactivityError(true);
        setHelperText('Please Select The Option');
      }
      if (checked['changes_happened_to_the_climate'].length == 0) {
        setHouseholdactivityError(true);
        setHelperText('Please Select The Option');
      }
      if (checked['main_source_of_water'].length == 0) {
        setHouseholdactivityError(true);
        setHelperText('Please Select The Option');
      }
      if (pollutioncause == '') {
        setPollutioncauseError(true);
        setHelperText('Please Select The Option');
      }
      if (paychemicals == '') {
        setPaychemicalsError(true);
        setHelperText('Please Select The Option');
      }
      if (products == '') {
        setProductsError(true);
        setHelperText('Please Select The Option');
      }
      if (climateffort == '') {
        setClimateffortError(true);
        setHelperText('Please Select The Option');
      }
      if (climateaction == '') {
        setClimateactionError(true);
        setHelperText('Please Select The Option');
      }
      if (initiativemeasures == '') {
        setInitiativemeasuresError(true);
        setHelperText('Please Select The Option');
      }
      if (environment == '') {
        setEnvironmentError(true);
        setHelperText('Please Select The Option');
      }
      if (communitytogether == '') {
        setCommunitytogetherError(true);
        setHelperText('Please Select The Option');
      }
      if (
        wealth != ' ' &&
        climate != '' &&
        weather != '' &&
        climatechangerating != '' &&
        tackleclimatechange != '' &&
        somethingtackle != '' &&
        groundwaterstatement != '' &&
        waterquality != '' &&
        wateraffect != '' &&
        waterconservation != '' &&
        land != '' &&
        trees != '' &&
        foodconnection != '' &&
        householdactivity != '' &&
        pollutioncause != '' &&
        paychemicals != '' &&
        products != '' &&
        climateffort != '' &&
        climateaction != '' &&
        initiativemeasures != '' &&
        environment != '' &&
        checked['natural_resources'] != 0 &&
        checked['natural_resources_impacting_your_life'] != 0 &&
        checked['changes_happened_to_the_climate'] != 0 &&
        checked['main_source_of_water'] != 0 &&
        communitytogether != ''
      ) {
       

        if (localStorage.getItem('green')) {
          data = setGreenForm(saveDataLocally('green', JSON.parse(data)));
          setGreenForm(data);
        } else {
          data = JSON.stringify({
            partcipantId: props?.itm?.id || props?.itm.gelathi_id,
            Email: sendData?.Email,
            Name_of_the_surveyor: sendData?.Name_of_the_surveyor,
            Name_of_the_respondent: sendData?.Name_of_the_respondent,
            Village_Name: sendData?.Village_Name,
            Phone_number: sendData?.Phone_number,
            natural_resources: checked['natural_resources'],
            natural_resources_impacting_your_life: checked['natural_resources_impacting_your_life'],
            Natural_Wealth: wealth,
            climate_change: climate,
            What_do_you_know_about_it: sendData?.What_do_you_know_about_it,
            change_in_the_weather_climate: weather,
            changes_happened_to_the_climate: checked['changes_happened_to_the_climate'],
            climate_change_threatens_personal_family_health_safety: climatechangerating,
            done_to_tackle_climate_change: tackleclimatechange,
            do_something_to_tackle_climate_change: somethingtackle,
            main_source_of_water: checked['main_source_of_water'],
            shown_below_do_you_agree_with: groundwaterstatement,
            How_concerned_local_water_quality: waterquality,
            personal_actions_can_affect_water_quality: wateraffect,
            take_water_conservation_measures: waterconservation,
            If_yes_what_kind_of_measures: sendData?.If_yes_what_kind_of_measures,
            list_down_impact_of_climate_change: sendData?.list_down_impact_of_climate_change,
            gifting_his_6_acres_land_to_children: land,
            Which_one_according_to_you_is_right: trees,
            believe_connection_between_the_food_health_climate: foodconnection,
            native_food_you_believe_is_envionmentally_friendly:
              sendData?.native_food_you_believe_is_envionmentally_friendly,
            household_activity_pollutes_natural_resources: householdactivity,
            alternatives_household_materials_cause_pollution: pollutioncause,
            If_yes_what_are_they: sendData?.If_yes_what_are_they,
            eco_friendly_products_and_activities: sendData?.eco_friendly_products_and_activities,
            little_more_than_what_you_pay_for_the_chemicals: paychemicals,
            this_switch_to_eco_friendly_products: products,
            climate_change_is_a_lot_of_effort: climateffort,
            action_out_of_concern_for_climate_change: climateaction,
            If_yes_what_did_you_do_are_you_doing: 'No',
            natural_resource_community_immediate_attention_measures: initiativemeasures,
            If_yes_what_is_that_resource: sendData?.If_yes_what_is_that_resource,
            achieve_with_regard_to_natural_resource_conservation:
              sendData?.achieve_with_regard_to_natural_resource_conservation,
            initiative_to_conserve_the_environment: environment,
            community_together_achieve_my_conservation_goal: communitytogether,
          });
        }

        var config = {
          method: 'post',
          url: 'https://bdms.buzzwomen.org/appTest/new/addGreenBaselineSurvey.php',
          headers: {
            'Content-Type': 'application/json',
          },
          data: data,
        };

        axios(config)
          .then(function (response) {
            props?.changeState();
            props?.mainDrawerReload();
            setgreensurveyform(response?.data);
            setMessage('Form saved successfully');
            localStorage.removeItem('green');
            setsuccessMessage(true);
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: response.data.message,
              confirmButtonText: 'Ok',
              timer: 3000,
            });
            handleClose();
            props.enrolledGreenMotivators();
            props?.changeState();
          })

          .catch(function (error) {
            // console.log(error);
            console.log('i am inside catch ');
            setGreenForm(saveDataLocally('green', data));
          });
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: response.data.message,
          confirmButtonText: 'Ok',
          timer: 2000,
        });
        handleClose();
      } else {
        alert('Please Fill All The Fields');
      }
    } else {
     
      console.log(data, "insideoffline")
      console.log('i AM IN ELSE PART AND SAVING LOCALLY');
      setGreenForm(saveDataLocally('green', JSON.parse(data)));
      handleClose();
    }
  };
  const wealthvalue = (event) => {
    setwealth(event.target.value);
    setWealthError(false);
  };
  const climatechangevalue = (event) => {
    setClimate(event.target.value);
    setClimateError(false);
    if (event.target.value == 'Yes') {
      setShowClimateDiscription(true);
    } else {
      setShowClimateDiscription(false);
    }
    // console.log(climate," value is climate")
  };
  const weathervalue = (event) => {
    setweather(event.target.value);
    setWeatherError(false);
  };
  const ratingvalue = (event) => {
    setclimatechangerating(event.target.value);
    setClimatechangeratingError(false);
  };
  const tacklevalue = (event) => {
    settackleclimatechange(event.target.value);
    setTackleclimatechangeError(false);
  };
  const handlesomethingtacklevalue = (event) => {
    setsomethingtackle(event.target.value);
    setSomethingtackleError(false);
  };
  const groundwatervalue = (event) => {
    setgroundwaterstatement(event.target.value);
    setGroundwaterstatementError(false);
  };
  const waterqualityvalue = (event) => {
    setwaterquality(event.target.value);
    setWaterqualityError(false);
  };
  const wateraffectvalue = (event) => {
    setwateraffect(event.target.value);
    setWateraffectError(false);
  };
  const conservationmeasures = (event) => {
    setwaterconservation(event.target.value);
    setWaterconservationError(false);
    if (event.target.value == 'Yes') {
      setShowWaterConsuDiscription(true);
    } else {
      setShowWaterConsuDiscription(false);
    }
  };
  const handleland = (event) => {
    setland(event.target.value);
    setLandError(false);
  };
  const conservenvironment = (event) => {
    setEnvironment(event.target.value);
    setEnvironmentError(false);
  };
  const communityvalue = (event) => {
    setcommunitytogether(event.target.value);
    setCommunitytogetherError(false);
  };
  const handleinitiativemeasures = (event) => {
    setinitiativemeasures(event.target.value);
    setInitiativemeasuresError(false);
    if (event.target.value == 'Yes') {
      setShowPark(true);
    } else {
      setShowPark(false);
    }
  };
  const handleclimateaction = (event) => {
    setclimateaction(event.target.value);
    setClimateactionError(false);
    if (event.target.value == 'Yes') {
      setShowClimateChangeDiscription(true);
    } else {
      setShowClimateChangeDiscription(false);
    }
  };
  const handleclimateffort = (event) => {
    setclimateffort(event.target.value);
    setClimateffortError(false);
  };
  const handlechemicals = (event) => {
    setpaychemicals(event.target.value);
    setPaychemicalsError(false);
    if (event.target.value == 'Yes') {
      setShowEcoFriendlyDiscription(true);
    } else {
      setShowEcoFriendlyDiscription(false);
    }
  };
  const handleproducts = (event) => {
    setproducts(event.target.value);
    setProductsError(false);
  };
  const handlepollutioncause = (event) => {
    setpollutioncause(event.target.value);
    setPollutioncauseError(false);
    if (event.target.value == 'Yes') {
      setShowHouseHoldDiscription(true);
    } else {
      setShowHouseHoldDiscription(false);
    }
  };
  const handlehouseholdactivity = (event) => {
    sethouseholdactivity(event.target.value);
    setHouseholdactivityError(false);
  };
  const handlefoodconnection = (event) => {
    setfoodconnection(event.target.value);
    setFoodconnectionError(false);
  };
  const handletrees = (event) => {
    settrees(event.target.value);
    setTreesError(false);
  };
  const handleform = () => {
    alert('Surevy was done');
  };
  const 
  handleresources = (label, event) => {
    var updatedList = [...checked[label]];
    if (event.target.checked) {
      updatedList = [...checked[label], event.target.value];
    } else {
      updatedList.splice(checked[label].indexOf(event.target.value), 1);
    }
    let tempData = { ...checked };
    tempData[label] = updatedList;
    setChecked(tempData);
  };


  return (
    <div>
      <Stack style={{ position: 'absolute', right: 0, float: 'right', margin: 2, padding: 2 }} mb={2}>
        {!props?.itm?.is_survey ? (
          <IconButton onClick={handleClickOpen}>
            <Icon icon="clarity:form-line" width={20} height={20} marginTop={20} color="#ff7424" />
          </IconButton>
        ) : (
          <IconButton onClick={handleform}>
            <Icon icon="charm:notes-tick" width={20} height={20} marginTop={20} color="green" />
          </IconButton>
        )}
      </Stack>

      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            greensurveyformdata();
          }}
        >
          <AppBar sx={{ position: 'fixed', bgcolor: '#ff7424' }}>
            <Toolbar sx={{ bgcolor: '#ff7424', color: 'white' }}>
              <IconButton style={{ color: 'white' }} onClick={handleClose}>
                <Iconify icon="material-symbols:arrow-back-rounded" />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1, color: 'inherit' }} variant="h6" component="div">
                Green Baseline Survey
              </Typography>
              <Button autoFocus edge="end" color="inherit" type="submit">
                <Iconify icon="material-symbols:save" width={30} height={30} />
              </Button>
            </Toolbar>
          </AppBar>

          <Grid>
            {/* <Card mt={1} style={{ borderRadius: 20}} >
        <CardContent>
       
            <Typography variant="subtitle2" style={{color:'white',backgroundColor:"#ff7424",padding:10,borderRadius:5}}>
           Green Baseline Survey
          </Typography>  
          <Typography variant="subtitle2" style={{color:'#ff7424',backgroundColor:"white",paddingTop:10}}>
            * 
          </Typography>  
          </CardContent>    
  </Card> */}
            <Card>
              <CardContent>
                <Card mt={1} style={{ backgroundColor: '#F6F8FB', marginTop: 50 }}>
                  <CardContent>
                    <Typography style={{ color: '#ff7424' }}>Email working*</Typography>
                    <Stack mt={2} mb={2}>
                      <TextField
                        id="Email"
                        label="Enter Email"
                        required
                        type="email"
                        variant="outlined"
                        color="common"
                        onChange={(e) => setSendData({ ...sendData, Email: e?.target?.value })}
                        value={sendData?.Email}
                      />
                    </Stack>
                    <Typography style={{ color: '#ff7424' }}>Name of surveyor *</Typography>
                    <Stack mt={2} mb={2}>
                      <TextField
                        id="Answer"
                        label="Your Answer"
                        required
                        variant="outlined"
                        color="common"
                        onChange={(e) => setSendData({ ...sendData, Name_of_the_surveyor: e?.target?.value })}
                        value={sendData?.Name_of_the_surveyor}
                      />
                    </Stack>

                    <Typography style={{ color: '#ff7424' }}>Name of respondent *</Typography>
                    <Stack mt={2} mb={2}>
                      <TextField
                        id="Answer"
                        label="Your Answer"
                        required
                        variant="outlined"
                        color="common"
                        onChange={(e) => setSendData({ ...sendData, Name_of_the_respondent: e?.target?.value })}
                        value={sendData?.Name_of_the_respondent}
                      />
                    </Stack>

                    <Typography style={{ color: '#ff7424' }}>Village Name *</Typography>
                    <Stack mt={2} mb={2}>
                      <TextField
                        id="Village"
                        label="Village Name"
                        required
                        variant="outlined"
                        color="common"
                        onChange={(e) => setSendData({ ...sendData, Village_Name: e?.target?.value })}
                        value={sendData?.Village_Name}
                      />
                    </Stack>

                    <Typography style={{ color: '#ff7424' }}>Phone Number *</Typography>
                    <Stack mt={2} mb={2}>
                      <TextField
                        id="Phone Number"
                        type="number"
                        required
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxLength: 10 }}
                        label="Phone Number"
                        variant="outlined"
                        color="common"
                        onChange={(e) => {
                          if (e.target.value.length <= 10) {
                            setSendData({ ...sendData, Phone_number: e?.target?.value });
                          }
                        }}
                        value={sendData?.Phone_number}
                      />
                    </Stack>
                  </CardContent>
                </Card>
                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Typography style={{ color: '#ff7424' }}>
                      Which of the following are natural resources? / ಕೆಳಗಿನವುಗಳಲ್ಲಿ ಯಾವುದು ನೈಸರ್ಗಿಕ ಸಂಪನ್ಮೂಲಗಳು? *
                    </Typography>
                   
               
                   
                    <Stack mt={2}>
                      <FormGroup>
                        <FormControlLabel
                          value="Soil/ಮಣ್ಣು"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Soil/ಮಣ್ಣು"
                          onChange={(event) => handleresources('natural_resources', event)}
                        />
                        <FormControlLabel
                          value="Water/ನೀರು"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Water/ನೀರು"
                          onChange={(event) => handleresources('natural_resources', event)}
                        />
                        <FormControlLabel
                          value="MotorCycle/ಮೋಟಾರ್ ಸೈಕಲ್"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="MotorCycle/ಮೋಟಾರ್ ಸೈಕಲ್"
                          onChange={(event) => handleresources('natural_resources', event)}
                        />
                        <FormControlLabel
                          value="Money/ಹಣ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Money/ಹಣ"
                          onChange={(event) => handleresources('natural_resources', event)}
                        />
                        <FormControlLabel
                          value="Trees/ಮರ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Trees/ಮರ"
                          onChange={(event) => handleresources('natural_resources', event)}
                        />
                        <FormControlLabel
                          value="Borewell/ಬೋರ್ವೆಲ್"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Borewell/ಬೋರ್ವೆಲ್"
                          onChange={(event) => handleresources('natural_resources', event)}
                        />
                        <FormControlLabel
                          value="House/ಮನೆ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="House/ಮನೆ"
                          onChange={(event) => handleresources('natural_resources', event)}
                        />
                      </FormGroup>
                    </Stack>
                  </CardContent>
                </Card>
                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Typography style={{ color: '#ff7424' }}>
                      How is change in state of natural resources impacting your life? / ನೈಸರ್ಗಿಕ ಸಂಪನ್ಮೂಲಗಳ
                      ಸ್ಥಿತಿಯಲ್ಲಿನ ಬದಲಾವಣೆಯು ನಿಮ್ಮ ಜೀವನದ ಮೇಲೆ ಹೇಗೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ *
                    </Typography>
                    <Stack mt={2}>
                      <FormGroup>
                        <FormControlLabel
                          value="Quality of food degrading / ಆಹಾರದ ಗುಣಮಟ್ಟ ಕುಸಿಯುತ್ತಿದೆ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Quality of food degrading / ಆಹಾರದ ಗುಣಮಟ್ಟ ಕುಸಿಯುತ್ತಿದೆ"
                          onChange={(event) => handleresources('natural_resources_impacting_your_life', event)}
                        />
                        <FormControlLabel
                          value="Negatively affecting agricultural income / ಕೃಷಿ ಆದಾಯದ ಮೇಲೆ ನಕಾರಾತ್ಮಕ ಪರಿಣಾಮ ಬೀರುತ್ತಿದೆ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Negatively affecting agricultural income / ಕೃಷಿ ಆದಾಯದ ಮೇಲೆ ನಕಾರಾತ್ಮಕ ಪರಿಣಾಮ ಬೀರುತ್ತಿದೆ"
                          onChange={(event) => handleresources('natural_resources_impacting_your_life', event)}
                        />
                        <FormControlLabel
                          value="Drinking water scarcity / ಕುಡಿಯುವ ನೀರಿನ ಅಭಾವ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Drinking water scarcity / ಕುಡಿಯುವ ನೀರಿನ ಅಭಾವ"
                          onChange={(event) => handleresources('natural_resources_impacting_your_life', event)}
                        />
                        <FormControlLabel
                          value="Frequent illness in children / ಮಕ್ಕಳಲ್ಲಿ ಆಗಾಗ್ಗೆ ಅನಾರೋಗ್ಯ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Frequent illness in children / ಮಕ್ಕಳಲ್ಲಿ ಆಗಾಗ್ಗೆ ಅನಾರೋಗ್ಯ"
                          onChange={(event) => handleresources('natural_resources_impacting_your_life', event)}
                        />
                        <FormControlLabel
                          value="Bodily discomfort / ದೈಹಿಕ ಅಸ್ವಸ್ಥತೆ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Bodily discomfort / ದೈಹಿಕ ಅಸ್ವಸ್ಥತೆ"
                          onChange={(event) => handleresources('natural_resources_impacting_your_life', event)}
                        />
                        <FormControlLabel
                          value="Loss of jobs/lack of work / ಉದ್ಯೋಗ ನಷ್ಟ/ಕೆಲಸದ ಕೊರತೆ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Loss of jobs/lack of work / ಉದ್ಯೋಗ ನಷ್ಟ/ಕೆಲಸದ ಕೊರತೆ"
                          onChange={(event) => handleresources('natural_resources_impacting_your_life', event)}
                        />
                        <FormControlLabel
                          value="There is no impact on my life / ನನ್ನ ಜೀವನದ ಮೇಲೆ ಯಾವುದೇ ಪರಿಣಾಮವಿಲ್ಲ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="There is no impact on my life / ನನ್ನ ಜೀವನದ ಮೇಲೆ ಯಾವುದೇ ಪರಿಣಾಮವಿಲ್ಲ"
                          onChange={(event) => handleresources('natural_resources_impacting_your_life', event)}
                        />
                      </FormGroup>
                    </Stack>
                  </CardContent>
                </Card>
                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography style={{ color: '#ff7424' }}>
                        Natural wealth for me is / ನನಗೆ ನೈಸರ್ಗಿಕ ಸಂಪತ್ತು *
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Natural Resource"
                        name="radio-buttons-group"
                        value={wealth}
                        onChange={wealthvalue}
                      >
                        <FormControlLabel
                          value="to enjoy natural resource as a human being without any limits / ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲದೆ ಮನುಷ್ಯನಂತೆ ನೈಸರ್ಗಿಕ ಸಂಪನ್ಮೂಲವನ್ನು ಆನಂದಿಸಲು"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="to enjoy natural resource as a human being without any limits / ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲದೆ ಮನುಷ್ಯನಂತೆ ನೈಸರ್ಗಿಕ ಸಂಪನ್ಮೂಲವನ್ನು ಆನಂದಿಸಲು"
                        />
                        <FormControlLabel
                          value="to enjoy natural resources while safeguarding it for the future generation / ಭವಿಷ್ಯದ ಪೀಳಿಗೆಗೆ ನೈಸರ್ಗಿಕ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಸಂರಕ್ಷಿಸುವ ಮೂಲಕ ಆನಂದಿಸಲು"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="to enjoy natural resources while safeguarding it for the future generation / ಭವಿಷ್ಯದ ಪೀಳಿಗೆಗೆ ನೈಸರ್ಗಿಕ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಸಂರಕ್ಷಿಸುವ ಮೂಲಕ ಆನಂದಿಸಲು "
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>
                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography style={{ color: '#ff7424' }}>
                        Have you heard of "Climate Change" ?/ ನೀವು "ಹವಾಮಾನ ಬದಲಾವಣೆ" ಬಗ್ಗೆ ಕೇಳಿದ್ದೀರಾ? *
                        {climateError ? <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText> : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Yes"
                        name="radio-buttons-group"
                        value={climate}
                        onChange={climatechangevalue}
                      >
                        <FormControlLabel value="Yes" control={<Radio style={{ color: '#595959' }} />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio style={{ color: '#595959' }} />} label="No" />
                        <FormControlLabel
                          value="Maybe"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Maybe"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>
                {showClimateDiscription ? (
                  <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                    <CardContent>
                      <Typography style={{ color: '#ff7424' }}>
                        What do you know about it? / ಅದರ ಬಗ್ಗೆ ನಿನಗೇನು ಗೊತ್ತು *
                      </Typography>
                      <Stack mt={2} mb={2}>
                        <TextField
                          id="Answe"
                          label="Your Answer"
                          variant="outlined"
                          color="common"
                          onChange={(e) => setSendData({ ...sendData, What_do_you_know_about_it: e?.target?.value })}
                          value={sendData?.What_do_you_know_about_it}
                        />
                      </Stack>
                    </CardContent>
                  </Card>
                ) : null}

                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography style={{ color: '#ff7424' }}>
                        Do you notice any change in the weather/climate in last 30 years? /ಕಳೆದ 30 ವರ್ಷಗಳಲ್ಲಿ
                        ಹವಾಮಾನ/ಹವಾಮಾನದಲ್ಲಿ ಯಾವುದೇ ಬದಲಾವಣೆಯನ್ನು ನೀವು ಗಮನಿಸಿದ್ದೀರಾ? *
                        {weatherError ? <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText> : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Natural Resource"
                        name="radio-buttons-group"
                        value={weather}
                        onChange={weathervalue}
                      >
                        <FormControlLabel value="Yes" control={<Radio style={{ color: '#595959' }} />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio style={{ color: '#595959' }} />} label="No" />
                        <FormControlLabel
                          value="Maybe"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Maybe"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>
                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Typography style={{ color: '#ff7424' }}>
                      What kind of changes happened to the climate? / ಹವಾಮಾನದಲ್ಲಿ ಯಾವ ರೀತಿಯ ಬದಲಾವಣೆಗಳು ಸಂಭವಿಸಿದವು? *
                    </Typography>
                    <Stack mt={2}>
                      <FormGroup>
                        <FormControlLabel
                          value="Excessive temperature / ಅತಿಯಾದ ತಾಪಮಾನ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Excessive temperature / ಅತಿಯಾದ ತಾಪಮಾನ"
                          onChange={(event) => handleresources('changes_happened_to_the_climate', event)}
                        />
                        <FormControlLabel
                          value="Excessive cold / ವಿಪರೀತ ಚಳಿ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Excessive cold / ವಿಪರೀತ ಚಳಿ"
                          onChange={(event) => handleresources('changes_happened_to_the_climate', event)}
                        />
                        <FormControlLabel
                          value="Frequent flood / ಆಗಾಗ್ಗೆ ಪ್ರವಾಹ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Frequent flood / ಆಗಾಗ್ಗೆ ಪ್ರವಾಹ"
                          onChange={(event) => handleresources('changes_happened_to_the_climate', event)}
                        />
                        <FormControlLabel
                          value="Unseasonal rainfall / ಅಕಾಲಿಕ ಮಳೆ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Unseasonal rainfall / ಅಕಾಲಿಕ ಮಳೆ"
                          onChange={(event) => handleresources('changes_happened_to_the_climate', event)}
                        />
                        <FormControlLabel
                          value="Water logging / ನೀರು ಲಾಗಿಂಗ್"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Water logging / ನೀರು ಲಾಗಿಂಗ್"
                          onChange={(event) => handleresources('changes_happened_to_the_climate', event)}
                        />
                        <FormControlLabel
                          value="Drying up of lakes,ponds and other water bodies / ಕೆರೆಗಳು, ಕೊಳಗಳು ಮತ್ತು ಇತರ ಜಲಮೂಲಗಳು ಒಣಗುತ್ತಿವೆ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Drying up of lakes,ponds and other water bodies / ಕೆರೆಗಳು, ಕೊಳಗಳು ಮತ್ತು ಇತರ ಜಲಮೂಲಗಳು ಒಣಗುತ್ತಿವೆ"
                          onChange={(event) => handleresources('changes_happened_to_the_climate', event)}
                        />
                        <FormControlLabel
                          value="I don't know / ನನಗೆ ಗೊತ್ತಿಲ್ಲ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="I don't know / ನನಗೆ ಗೊತ್ತಿಲ್ಲ "
                          onChange={(event) => handleresources('changes_happened_to_the_climate', event)}
                        />
                      </FormGroup>
                    </Stack>
                  </CardContent>
                </Card>
                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Typography style={{ color: '#ff7424' }}>
                      On a scale of 1 to 10 please rate,how much do you think climate change threatens your personal and
                      family health and safety? / 1 ರಿಂದ 10 ರ ಪ್ರಮಾಣದಲ್ಲಿ ದಯವಿಟ್ಟು ರೇಟ್ ಮಾಡಿ, ಹವಾಮಾನ ಬದಲಾವಣೆಯು ನಿಮ್ಮ
                      ವೈಯಕ್ತಿಕ ಮತ್ತು ಕುಟುಂಬದ ಆರೋಗ್ಯ ಮತ್ತು ಸುರಕ್ಷತೆಗೆ ಎಷ್ಟು ಅಪಾಯವನ್ನುಂಟುಮಾಡುತ್ತದೆ ಎಂದು ನೀವು ಭಾವಿಸುತ್ತೀರಿ
                      *
                      {climatechangeratingError ? (
                        <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                      ) : null}{' '}
                    </Typography>
                    <Stack mt={2}>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Natural Resource"
                        name="radio-buttons-group"
                        value={climatechangerating}
                        onChange={ratingvalue}
                      >
                        <FormControlLabel value="1" control={<Radio style={{ color: '#595959' }} />} label="1" />
                        <FormControlLabel value="2" control={<Radio style={{ color: '#595959' }} />} label="2" />
                        <FormControlLabel value="3" control={<Radio style={{ color: '#595959' }} />} label="3" />
                        <FormControlLabel value="4" control={<Radio style={{ color: '#595959' }} />} label="4" />
                        <FormControlLabel value="5" control={<Radio style={{ color: '#595959' }} />} label="5" />
                        <FormControlLabel value="6" control={<Radio style={{ color: '#595959' }} />} label="6" />
                        <FormControlLabel value="7" control={<Radio style={{ color: '#595959' }} />} label="7" />
                        <FormControlLabel value="8" control={<Radio style={{ color: '#595959' }} />} label="8" />
                        <FormControlLabel value="9" control={<Radio style={{ color: '#595959' }} />} label="9" />
                        <FormControlLabel value="10" control={<Radio style={{ color: '#595959' }} />} label="10" />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>

                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography style={{ color: '#ff7424' }}>
                        Do you think anything can be tackle climate change? / ಹವಾಮಾನ ಬದಲಾವಣೆಯನ್ನು ಏನಾದರೂ ನಿಭಾಯಿಸಬಹುದು
                        ಎಂದು ನೀವು ಭಾವಿಸುತ್ತೀರಾ?*
                        {tackleclimatechangeError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Natural Resource"
                        name="radio-buttons-group"
                        value={tackleclimatechange}
                        onChange={tacklevalue}
                      >
                        <FormControlLabel value="Yes" control={<Radio style={{ color: '#595959' }} />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio style={{ color: '#595959' }} />} label="No" />
                        <FormControlLabel
                          value="Maybe"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Maybe"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>

                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography style={{ color: '#ff7424' }}>
                        Do you think you would do something to tackle climate change? / ಹವಾಮಾನ ಬದಲಾವಣೆಯನ್ನು ನಿಭಾಯಿಸಲು
                        ನೀವು ಏನಾದರೂ ಮಾಡುತ್ತೀರಿ ಎಂದು ನೀವು ಭಾವಿಸುತ್ತೀರಾ *
                        {somethingtackleError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Natural Resource"
                        name="radio-buttons-group"
                        value={somethingtackle}
                        onChange={handlesomethingtacklevalue}
                      >
                        <FormControlLabel value="Yes" control={<Radio style={{ color: '#595959' }} />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio style={{ color: '#595959' }} />} label="No" />
                        <FormControlLabel
                          value="Maybe"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Maybe"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>
                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Typography style={{ color: '#ff7424' }}>
                      What is the main source of water used by your house-hold for other purposes,such as cooking and
                      hand washing? / ಅಡುಗೆ ಮತ್ತು ಕೈ ತೊಳೆಯುವಂತಹ ಇತರ ಉದ್ದೇಶಗಳಿಗಾಗಿ ನಿಮ್ಮ ಮನೆಯವರು ಬಳಸುವ ನೀರಿನ ಮುಖ್ಯ ಮೂಲ
                      ಯಾವುದು? *
                    </Typography>
                    <Stack mt={2}>
                      <FormGroup>
                        <FormControlLabel
                          value="Piped water to yard/plot / ಅಂಗಳ/ಪ್ಲಾಟ್‌ಗೆ ಪೈಪ್‌ಲೈನ್ ನೀರು"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Piped water to yard/plot / ಅಂಗಳ/ಪ್ಲಾಟ್‌ಗೆ ಪೈಪ್‌ಲೈನ್ ನೀರು"
                          onChange={(event) => handleresources('main_source_of_water', event)}
                        />
                        <FormControlLabel
                          value="Public tap/standpipe / ಸಾರ್ವಜನಿಕ ಟ್ಯಾಪ್/ಸ್ಟ್ಯಾಂಡ್ ಪೈಪ್"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Public tap/standpipe / ಸಾರ್ವಜನಿಕ ಟ್ಯಾಪ್/ಸ್ಟ್ಯಾಂಡ್ ಪೈಪ್"
                          onChange={(event) => handleresources('main_source_of_water', event)}
                        />
                        <FormControlLabel
                          value="Tubewell/borehole / ಕೊಳವೆಬಾವಿ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Tubewell/borehole / ಕೊಳವೆಬಾವಿ"
                          onChange={(event) => handleresources('main_source_of_water', event)}
                        />
                        <FormControlLabel
                          value="Protected dug well / ಚೆನ್ನಾಗಿ ಅಗೆದು ರಕ್ಷಿಸಲಾಗಿದೆ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Protected dug well / ಚೆನ್ನಾಗಿ ಅಗೆದು ರಕ್ಷಿಸಲಾಗಿದೆ"
                          onChange={(event) => handleresources('main_source_of_water', event)}
                        />
                        <FormControlLabel
                          value="Unprotected dug well / ರಕ್ಷಣೆಯಿಲ್ಲದ ಬಾವಿ ತೋಡಿದ್ದಾರೆ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Unprotected dug well / ರಕ್ಷಣೆಯಿಲ್ಲದ ಬಾವಿ ತೋಡಿದ್ದಾರೆ"
                          onChange={(event) => handleresources('main_source_of_water', event)}
                        />
                        <FormControlLabel
                          value="Protected spring / ಸಂರಕ್ಷಿತ ವಸಂತ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Protected spring / ಸಂರಕ್ಷಿತ ವಸಂತ "
                          onChange={(event) => handleresources('main_source_of_water', event)}
                        />
                        <FormControlLabel
                          value="Unprotected spring / ಅಸುರಕ್ಷಿತ ವಸಂತ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Unprotected spring / ಅಸುರಕ್ಷಿತ ವಸಂತ"
                          onChange={(event) => handleresources('main_source_of_water', event)}
                        />
                        <FormControlLabel
                          value="Rainwater collection / ಮಳೆನೀರು ಸಂಗ್ರಹಣೆ"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Rainwater collection / ಮಳೆನೀರು ಸಂಗ್ರಹಣೆ"
                          onChange={(event) => handleresources('main_source_of_water', event)}
                        />
                        <FormControlLabel
                          value="Tanker-truck / ಟ್ಯಾಂಕರ್-ಟ್ರಕ್"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Tanker-truck / ಟ್ಯಾಂಕರ್-ಟ್ರಕ್"
                          onChange={(event) => handleresources('main_source_of_water', event)}
                        />
                        <FormControlLabel
                          value="Surface water (river,dam,lake,pond,stream,canal,irrigation channels) / ಮೇಲ್ಮೈ ನೀರು (ನದಿ, ಅಣೆಕಟ್ಟು, ಸರೋವರ, ಕೊಳ, ಹೊಳೆ, ಕಾಲುವೆ, ನೀರಾವರಿ ಕಾಲುವೆಗಳು)"
                          control={
                            <Checkbox
                              style={{ color: '#595959' }}
                              onChange={(event) => handleresources('main_source_of_water', event)}
                            />
                          }
                          label="Surface water (river,dam,lake,pond,stream,canal,irrigation channels) / ಮೇಲ್ಮೈ ನೀರು (ನದಿ, ಅಣೆಕಟ್ಟು, ಸರೋವರ, ಕೊಳ, ಹೊಳೆ, ಕಾಲುವೆ, ನೀರಾವರಿ ಕಾಲುವೆಗಳು)"
                        />
                        <FormControlLabel
                          value="Others / ಇತರರು"
                          control={<Checkbox style={{ color: '#595959' }} />}
                          label="Others / ಇತರರು"
                          onChange={(event) => handleresources('main_source_of_water', event)}
                        />
                      </FormGroup>
                    </Stack>
                  </CardContent>
                </Card>
                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography style={{ color: '#ff7424' }}>
                        Which Statement shown below do you agree with? / ಕೆಳಗೆ ತೋರಿಸಿರುವ ಯಾವ ಹೇಳಿಕೆಯನ್ನು ನೀವು
                        ಒಪ್ಪುತ್ತೀರಿ? *
                        {groundwaterstatementError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Natural Resource"
                        name="radio-buttons-group"
                        value={groundwaterstatement}
                        onChange={groundwatervalue}
                      >
                        <FormControlLabel
                          value="Ground water can be drawn to how much ever extent we want to / ಅಂತರ್ಜಲವನ್ನು ನಾವು ಎಷ್ಟು ಪ್ರಮಾಣದಲ್ಲಿ ಬಯಸುತ್ತೇವೋ ಅಷ್ಟು ಪ್ರಮಾಣದಲ್ಲಿ ಎಳೆಯಬಹುದು"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Ground water can be drawn to how much ever extent we want to / ಅಂತರ್ಜಲವನ್ನು ನಾವು ಎಷ್ಟು ಪ್ರಮಾಣದಲ್ಲಿ ಬಯಸುತ್ತೇವೋ ಅಷ್ಟು ಪ್ರಮಾಣದಲ್ಲಿ ಎಳೆಯಬಹುದು"
                        />
                        <FormControlLabel
                          value="The groundwater below my land solely belongs to me / ನನ್ನ ಭೂಮಿಯ ಕೆಳಗಿನ ಅಂತರ್ಜಲ ನನಗೆ ಮಾತ್ರ ಸೇರಿದ್ದು"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="The groundwater below my land solely belongs to me / ನನ್ನ ಭೂಮಿಯ ಕೆಳಗಿನ ಅಂತರ್ಜಲ ನನಗೆ ಮಾತ್ರ ಸೇರಿದ್ದು"
                        />
                        <FormControlLabel
                          value="I should always consider the groundwater limit and other users around me before making decisions on its use / ಅದರ ಬಳಕೆಯ ಬಗ್ಗೆ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವ ಮೊದಲು ನಾನು ಯಾವಾಗಲೂ ಅಂತರ್ಜಲ ಮಿತಿ ಮತ್ತು ನನ್ನ ಸುತ್ತಲಿನ ಇತರ ಬಳಕೆದಾರರನ್ನು ಪರಿಗಣಿಸಬೇಕು"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="I should always consider the groundwater limit and other users around me before making decisions on its use / ಅದರ ಬಳಕೆಯ ಬಗ್ಗೆ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವ ಮೊದಲು ನಾನು ಯಾವಾಗಲೂ ಅಂತರ್ಜಲ ಮಿತಿ ಮತ್ತು ನನ್ನ ಸುತ್ತಲಿನ ಇತರ ಬಳಕೆದಾರರನ್ನು ಪರಿಗಣಿಸಬೇಕು"
                        />
                        <FormControlLabel
                          value="Groundwater is a shared resource / ಅಂತರ್ಜಲವು ಹಂಚಿಕೆಯ ಸಂಪನ್ಮೂಲವಾಗಿದೆ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Groundwater is a shared resource / ಅಂತರ್ಜಲವು ಹಂಚಿಕೆಯ ಸಂಪನ್ಮೂಲವಾಗಿದೆ"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>
                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography style={{ color: '#ff7424' }}>
                        How concerned are you about local water quality that you are consuming now in your village?/
                        ನಿಮ್ಮ ಗ್ರಾಮದಲ್ಲಿ ಈಗ ನೀವು ಸೇವಿಸುತ್ತಿರುವ ಸ್ಥಳೀಯ ನೀರಿನ ಗುಣಮಟ್ಟದ ಬಗ್ಗೆ ನಿಮಗೆ ಎಷ್ಟು ಕಾಳಜಿ ಇದೆ*
                        {waterqualityError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Natural Resource"
                        name="radio-buttons-group"
                        value={waterquality}
                        onChange={waterqualityvalue}
                      >
                        <FormControlLabel
                          value="Very Unconcerned / ತುಂಬಾ ಅನ್ಕನ್ಸರ್ನ್ಡ್"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Very Unconcerned / ತುಂಬಾ ಅನ್ಕನ್ಸರ್ನ್ಡ್"
                        />
                        <FormControlLabel
                          value="Unconcerned/ಕಾಳಜಿಯಿಲ್ಲದ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Unconcerned/ಕಾಳಜಿಯಿಲ್ಲದ"
                        />
                        <FormControlLabel
                          value="Neutral/ತಟಸ್ಥ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Neutral/ತಟಸ್ಥ"
                        />
                        <FormControlLabel
                          value="Concerned/ಕಳವಳ ವ್ಯಕ್ತಪಡಿಸಿದ್ದಾರೆ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Concerned/ಕಳವಳ ವ್ಯಕ್ತಪಡಿಸಿದ್ದಾರೆ"
                        />
                        <FormControlLabel
                          value="Very Concerned/ತುಂಬಾ ಕಾಳಜಿ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Very Concerned/ತುಂಬಾ ಕಾಳಜಿ"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>

                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography style={{ color: '#ff7424' }}>
                        My personal actions can affect water quality in my village? / ನನ್ನ ವೈಯಕ್ತಿಕ ಕ್ರಿಯೆಗಳು ನನ್ನ
                        ಹಳ್ಳಿಯಲ್ಲಿ ನೀರಿನ ಗುಣಮಟ್ಟದ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರಬಹುದೇ? *
                        {wateraffectError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Natural Resource"
                        name="radio-buttons-group"
                        value={wateraffect}
                        onChange={wateraffectvalue}
                      >
                        <FormControlLabel
                          value="Strongly disagree / ಖಂಡಿತವಾಗಿ ಒಪ್ಪುವುದಿಲ್ಲ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Strongly disagree / ಖಂಡಿತವಾಗಿ ಒಪ್ಪುವುದಿಲ್ಲ"
                        />
                        <FormControlLabel
                          value="Disagree / ಒಪ್ಪುವುದಿಲ್ಲ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Disagree / ಒಪ್ಪುವುದಿಲ್ಲ"
                        />
                        <FormControlLabel
                          value="Neutral / ತಟಸ್ಥ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Neutral / ತಟಸ್ಥ"
                        />
                        <FormControlLabel
                          value="Agreee / ಒಪ್ಪುತ್ತೇನೆ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Agreee / ಒಪ್ಪುತ್ತೇನೆ"
                        />
                        <FormControlLabel
                          value="Strongly agree / ಬಲವಾಗಿ ಒಪ್ಪುತ್ತೇನೆ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Strongly agree / ಬಲವಾಗಿ ಒಪ್ಪುತ್ತೇನೆ"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>

                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography style={{ color: '#ff7424' }}>
                        Do you think you take water conservation measures in your everyday life? / ನಿಮ್ಮ ದೈನಂದಿನ
                        ಜೀವನದಲ್ಲಿ ನೀವು ನೀರಿನ ಸಂರಕ್ಷಣೆ ಕ್ರಮಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುತ್ತೀರಿ ಎಂದು ನೀವು ಭಾವಿಸುತ್ತೀರಾ *
                        {waterconservationError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Natural Resource"
                        name="radio-buttons-group"
                        value={waterconservation}
                        onChange={conservationmeasures}
                      >
                        <FormControlLabel value="Yes" control={<Radio style={{ color: '#595959' }} />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio style={{ color: '#595959' }} />} label="No" />
                        <FormControlLabel
                          value="Maybe"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Maybe"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>
                {showWaterConsuDiscription ? (
                  <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                    <CardContent>
                      <Typography style={{ color: '#ff7424' }}>
                        If yes,what kind of measures have you taken in the past? / ಹೌದು ಎಂದಾದರೆ, ನೀವು ಹಿಂದೆ ಯಾವ ರೀತಿಯ
                        ಕ್ರಮಗಳನ್ನು ತೆಗೆದುಕೊಂಡಿದ್ದೀರಿ?*
                      </Typography>
                      <Stack mt={2} mb={2}>
                        <TextField
                          id="Ans"
                          label="Your Answer"
                          required
                          variant="outlined"
                          color="common"
                          onChange={(e) => setSendData({ ...sendData, If_yes_what_kind_of_measures: e?.target?.value })}
                          value={sendData?.If_yes_what_kind_of_measures}
                        />
                      </Stack>
                    </CardContent>
                  </Card>
                ) : null}

                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Typography style={{ color: '#ff7424' }}>
                      Can you list down impact of climate change on your land?/ನಿಮ್ಮ ಭೂಮಿಯ ಮೇಲೆ ಹವಾಮಾನ ಬದಲಾವಣೆಯ
                      ಪರಿಣಾಮವನ್ನು ನೀವು ಪಟ್ಟಿ ಮಾಡಬಹುದೇ? *
                    </Typography>
                    <Stack mt={2} mb={2}>
                      <TextField
                        id="Anse"
                        label="Your Answer"
                        required
                        variant="outlined"
                        color="common"
                        onChange={(e) =>
                          setSendData({ ...sendData, list_down_impact_of_climate_change: e?.target?.value })
                        }
                        value={sendData?.list_down_impact_of_climate_change}
                      />
                    </Stack>
                  </CardContent>
                </Card>

                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography style={{ color: '#ff7424' }}>
                        Bhasker is gifting his 6 acres land to children Meena and Keshav.Out of 6 acres, 3 acres is in
                        P.Halli and another 3 acres is in K.Halli which are closeby. The 2 plots are situated in the
                        borders of K.Halli and P.Halli. K.Halli and P.Halli is separated by a forest in between. Meena
                        and Keshav plans to expand their land by clearing parts of the forest. Meena wants to build a
                        school and keshav wants to build a shopping complex in the forest land. what do you think should
                        be done here? / ಭಾಸ್ಕರ್ ಅವರು ತಮ್ಮ 6 ಎಕರೆ ಜಮೀನನ್ನು ಮಕ್ಕಳಾದ ಮೀನಾ ಮತ್ತು ಕೇಶವ್ ಅವರಿಗೆ ಉಡುಗೊರೆಯಾಗಿ
                        ನೀಡುತ್ತಿದ್ದಾರೆ. 6 ಎಕರೆಯಲ್ಲಿ 3 ಎಕರೆ ಪಿ.ಹಳ್ಳಿಯಲ್ಲಿ ಮತ್ತು ಇನ್ನೊಂದು 3 ಎಕರೆ ಹತ್ತಿರವಿರುವ
                        ಕೆ.ಹಳ್ಳಿಯಲ್ಲಿದೆ. 2 ಪ್ಲಾಟ್‌ಗಳು ಕೆ.ಹಳ್ಳಿ ಮತ್ತು ಪಿ.ಹಳ್ಳಿಯ ಗಡಿಯಲ್ಲಿವೆ. ಕೆ.ಹಳ್ಳಿ ಮತ್ತು ಪಿ.ಹಳ್ಳಿ ನಡುವೆ
                        ಕಾಡಿನಿಂದ ಬೇರ್ಪಟ್ಟಿದೆ. ಮೀನಾ ಮತ್ತು ಕೇಶವ್ ಕಾಡಿನ ಭಾಗಗಳನ್ನು ತೆರವುಗೊಳಿಸುವ ಮೂಲಕ ತಮ್ಮ ಭೂಮಿಯನ್ನು
                        ವಿಸ್ತರಿಸಲು ಯೋಜಿಸಿದ್ದಾರೆ. ಮೀನಾ ಅವರು ಶಾಲೆಯನ್ನು ನಿರ್ಮಿಸಲು ಬಯಸುತ್ತಾರೆ ಮತ್ತು ಕೇಶವ್ ಅವರು ಅರಣ್ಯ
                        ಭೂಮಿಯಲ್ಲಿ ಶಾಪಿಂಗ್ ಕಾಂಪ್ಲೆಕ್ಸ್ ನಿರ್ಮಿಸಲು ಬಯಸುತ್ತಾರೆ. ಇಲ್ಲಿ ಏನು ಮಾಡಬೇಕು ಎಂದು ನೀವು ಯೋಚಿಸುತ್ತೀರಿ? *
                        {landError ? <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText> : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Natural Resource"
                        name="radio-buttons-group"
                        value={land}
                        onChange={handleland}
                      >
                        <FormControlLabel
                          value="I support Meena as she is helping society by building a school for children of tthe village/ ಹಳ್ಳಿಯ ಮಕ್ಕಳಿಗಾಗಿ ಶಾಲೆ ನಿರ್ಮಿಸುವ ಮೂಲಕ ಸಮಾಜಕ್ಕೆ ಸಹಾಯ ಮಾಡುತ್ತಿರುವ ಮೀನಾ ಅವರನ್ನು ನಾನು ಬೆಂಬಲಿಸುತ್ತೇನೆ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="I support Meena as she is helping society by building a school for children of tthe village/ ಹಳ್ಳಿಯ ಮಕ್ಕಳಿಗಾಗಿ ಶಾಲೆ ನಿರ್ಮಿಸುವ ಮೂಲಕ ಸಮಾಜಕ್ಕೆ ಸಹಾಯ ಮಾಡುತ್ತಿರುವ ಮೀನಾ ಅವರನ್ನು ನಾನು ಬೆಂಬಲಿಸುತ್ತೇನೆ"
                        />
                        <FormControlLabel
                          value="I support Keshav as he is opening shopping opportunities for villagers/ನಾನು ಕೇಶವ್ ಅವರನ್ನು ಬೆಂಬಲಿಸುತ್ತೇನೆ ಏಕೆಂದರೆ ಅವರು ಹಳ್ಳಿಗರಿಗೆ ಶಾಪಿಂಗ್ ಅವಕಾಶಗಳನ್ನು ತೆರೆಯುತ್ತಾರೆ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="I support Keshav as he is opening shopping opportunities for villagers/ನಾನು ಕೇಶವ್ ಅವರನ್ನು ಬೆಂಬಲಿಸುತ್ತೇನೆ ಏಕೆಂದರೆ ಅವರು ಹಳ್ಳಿಗರಿಗೆ ಶಾಪಿಂಗ್ ಅವಕಾಶಗಳನ್ನು ತೆರೆಯುತ್ತಾರೆ"
                        />
                        <FormControlLabel
                          value="I won't support both,as forest land does'nt belong to them,it belongs to people of both villages, animals and the trees/ ನಾನು ಎರಡನ್ನೂ ಬೆಂಬಲಿಸುವುದಿಲ್ಲ, ಏಕೆಂದರೆ ಅರಣ್ಯ ಭೂಮಿ ಅವರಿಗೆ ಸೇರಿಲ್ಲ, ಅದು ಎರಡೂ ಹಳ್ಳಿಗಳ ಜನರಿಗೆ, ಪ್ರಾಣಿಗಳು ಮತ್ತು ಮರಗಳಿಗೆ ಸೇರಿದೆ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="I won't support both,as forest land does'nt belong to them,it belongs to people of both villages, animals and the trees/ ನಾನು ಎರಡನ್ನೂ ಬೆಂಬಲಿಸುವುದಿಲ್ಲ, ಏಕೆಂದರೆ ಅರಣ್ಯ ಭೂಮಿ ಅವರಿಗೆ ಸೇರಿಲ್ಲ, ಅದು ಎರಡೂ ಹಳ್ಳಿಗಳ ಜನರಿಗೆ, ಪ್ರಾಣಿಗಳು ಮತ್ತು ಮರಗಳಿಗೆ ಸೇರಿದೆ."
                        />
                        <FormControlLabel
                          value="I don't know what to decide / ಏನು ನಿರ್ಧರಿಸಬೇಕೆಂದು ನನಗೆ ತಿಳಿದಿಲ್ಲ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="I don't know what to decide / ಏನು ನಿರ್ಧರಿಸಬೇಕೆಂದು ನನಗೆ ತಿಳಿದಿಲ್ಲ."
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>

                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography style={{ color: '#ff7424' }}>
                        Which one according to you is right? / ನಿಮ್ಮ ಪ್ರಕಾರ ಯಾವುದು ಸರಿ *
                        {treesError ? <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText> : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Natural Resource"
                        name="radio-buttons-group"
                        value={trees}
                        onChange={handletrees}
                      >
                        <FormControlLabel
                          value="Covering up a lake and constructing a building and earn more income/ಕೆರೆ ಒತ್ತುವರಿ ಮಾಡಿ ಕಟ್ಟಡ ನಿರ್ಮಿಸಿ ಹೆಚ್ಚಿನ ಆದಾಯ ಗಳಿಸುತ್ತಿದ್ದಾರೆ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Covering up a lake and constructing a building and earn more income/ಕೆರೆ ಒತ್ತುವರಿ ಮಾಡಿ ಕಟ್ಟಡ ನಿರ್ಮಿಸಿ ಹೆಚ್ಚಿನ ಆದಾಯ ಗಳಿಸುತ್ತಿದ್ದಾರೆ."
                        />
                        <FormControlLabel
                          value="Cutting trees to increase available land area for commercial activities improves standard of living / ವಾಣಿಜ್ಯ ಚಟುವಟಿಕೆಗಳಿಗಾಗಿ ಲಭ್ಯವಿರುವ ಭೂಪ್ರದೇಶವನ್ನು ಹೆಚ್ಚಿಸಲು ಮರಗಳನ್ನು ಕಡಿಯುವುದು ಜೀವನ ಮಟ್ಟವನ್ನು ಸುಧಾರಿಸುತ್ತದೆ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Cutting trees to increase available land area for commercial activities improves standard of living / ವಾಣಿಜ್ಯ ಚಟುವಟಿಕೆಗಳಿಗಾಗಿ ಲಭ್ಯವಿರುವ ಭೂಪ್ರದೇಶವನ್ನು ಹೆಚ್ಚಿಸಲು ಮರಗಳನ್ನು ಕಡಿಯುವುದು ಜೀವನ ಮಟ್ಟವನ್ನು ಸುಧಾರಿಸುತ್ತದೆ."
                        />
                        <FormControlLabel
                          value="Protect trees,lakes,reduce use of chemicals on land and protect your asset/ಮರಗಳು, ಸರೋವರಗಳನ್ನು ರಕ್ಷಿಸಿ, ಭೂಮಿಯಲ್ಲಿ ರಾಸಾಯನಿಕಗಳ ಬಳಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಿ ಮತ್ತು ನಿಮ್ಮ ಆಸ್ತಿಯನ್ನು ರಕ್ಷಿಸಿ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Protect trees,lakes,reduce use of chemicals on land and protect your asset/ಮರಗಳು, ಸರೋವರಗಳನ್ನು ರಕ್ಷಿಸಿ, ಭೂಮಿಯಲ್ಲಿ ರಾಸಾಯನಿಕಗಳ ಬಳಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಿ ಮತ್ತು ನಿಮ್ಮ ಆಸ್ತಿಯನ್ನು ರಕ್ಷಿಸಿ."
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>

                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography style={{ color: '#ff7424' }}>
                        Do you believe there is a connection between the food we eat,our health and climate change? /
                        ನಾವು ತಿನ್ನುವ ಆಹಾರ, ನಮ್ಮ ಆರೋಗ್ಯ ಮತ್ತು ಹವಾಮಾನ ಬದಲಾವಣೆಯ ನಡುವೆ ಸಂಬಂಧವಿದೆ ಎಂದು ನೀವು ನಂಬುತ್ತೀರಾ? *
                        {foodconnectionError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Natural Resource"
                        name="radio-buttons-group"
                        value={foodconnection}
                        onChange={handlefoodconnection}
                      >
                        <FormControlLabel
                          value="There is a connection between food and health/ಆಹಾರ ಮತ್ತು ಆರೋಗ್ಯದ ನಡುವೆ ಸಂಬಂಧವಿದೆ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="There is a connection between food and health/ಆಹಾರ ಮತ್ತು ಆರೋಗ್ಯದ ನಡುವೆ ಸಂಬಂಧವಿದೆ"
                        />
                        <FormControlLabel
                          value="There is a connection between all three/ಮೂರರ ನಡುವೆ ಸಂಬಂಧವಿದೆ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="There is a connection between all three/ಮೂರರ ನಡುವೆ ಸಂಬಂಧವಿದೆ."
                        />
                        <FormControlLabel
                          value="I do not see any connection between them/ಅವರ ನಡುವೆ ಯಾವುದೇ ಸಂಬಂಧವನ್ನು ನಾನು ನೋಡುತ್ತಿಲ್ಲ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="I do not see any connection between them/ಅವರ ನಡುವೆ ಯಾವುದೇ ಸಂಬಂಧವನ್ನು ನಾನು ನೋಡುತ್ತಿಲ್ಲ."
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>
                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Typography style={{ color: '#ff7424' }}>
                      Are there any native food you believe is environmentally friendly to plant and is good for
                      health?Name any two / ಸಸ್ಯಗಳಿಗೆ ಪರಿಸರ ಸ್ನೇಹಿ ಮತ್ತು ಆರೋಗ್ಯಕ್ಕೆ ಒಳ್ಳೆಯದು ಎಂದು ನೀವು ನಂಬುವ ಯಾವುದೇ
                      ಸ್ಥಳೀಯ ಆಹಾರವಿದೆಯೇ? ಯಾವುದಾದರೂ ಎರಡನ್ನು ಹೆಸರಿಸಿ *
                    </Typography>
                    <Stack mt={2} mb={2}>
                      <TextField
                        id="Answ"
                        label="Your Answer"
                        required
                        variant="outlined"
                        color="common"
                        onChange={(e) =>
                          setSendData({
                            ...sendData,
                            native_food_you_believe_is_envionmentally_friendly: e?.target?.value,
                          })
                        }
                        value={sendData?.native_food_you_believe_is_envionmentally_friendly}
                      />
                    </Stack>
                  </CardContent>
                </Card>

                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography style={{ color: '#ff7424' }}>
                        Which of the following household activity pollutes natural resources? / ಕೆಳಗಿನ ಯಾವ ಮನೆಯ
                        ಚಟುವಟಿಕೆಯು ನೈಸರ್ಗಿಕ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಕಲುಷಿತಗೊಳಿಸುತ್ತದೆ? *
                        {householdactivityError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Natural Resource"
                        name="radio-buttons-group"
                        value={householdactivity}
                        onChange={handlehouseholdactivity}
                      >
                        <FormControlLabel
                          value="Consuming plastic packed biscuits,chocolates and chips/ಪ್ಲಾಸ್ಟಿಕ್ ಪ್ಯಾಕ್ ಮಾಡಿದ ಬಿಸ್ಕತ್ತುಗಳು, ಚಾಕೊಲೇಟ್‌ಗಳು ಮತ್ತು ಚಿಪ್‌ಗಳನ್ನು ಸೇವಿಸುವುದು"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Consuming plastic packed biscuits,chocolates and chips/ಪ್ಲಾಸ್ಟಿಕ್ ಪ್ಯಾಕ್ ಮಾಡಿದ ಬಿಸ್ಕತ್ತುಗಳು, ಚಾಕೊಲೇಟ್‌ಗಳು ಮತ್ತು ಚಿಪ್‌ಗಳನ್ನು ಸೇವಿಸುವುದು."
                        />
                        <FormControlLabel
                          value="Body & hair cleansing liquids,soaps,tooth paste / ದೇಹ ಮತ್ತು ಕೂದಲು ಶುದ್ಧೀಕರಿಸುವ ದ್ರವಗಳು, ಸಾಬೂನುಗಳು, ಟೂತ್ ಪೇಸ್ಟ್"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Body & hair cleansing liquids,soaps,tooth paste / ದೇಹ ಮತ್ತು ಕೂದಲು ಶುದ್ಧೀಕರಿಸುವ ದ್ರವಗಳು, ಸಾಬೂನುಗಳು, ಟೂತ್ ಪೇಸ್ಟ್."
                        />
                        <FormControlLabel
                          value="Use of coal,firewood or gas for cooking / ಅಡುಗೆಗೆ ಕಲ್ಲಿದ್ದಲು, ಉರುವಲು ಅಥವಾ ಅನಿಲದ ಬಳಕೆ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Use of coal,firewood or gas for cooking / ಅಡುಗೆಗೆ ಕಲ್ಲಿದ್ದಲು, ಉರುವಲು ಅಥವಾ ಅನಿಲದ ಬಳಕೆ"
                        />
                        <FormControlLabel
                          value="All of the above / ಮೇಲಿನ ಎಲ್ಲವೂ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="All of the above / ಮೇಲಿನ ಎಲ್ಲವೂ"
                        />
                        <FormControlLabel
                          value="None of the above / ಮೇಲಿನ ಯಾವುದೂ ಅಲ್ಲ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="None of the above / ಮೇಲಿನ ಯಾವುದೂ ಅಲ್ಲ "
                        />
                        <FormControlLabel
                          value="I don't know/ನನಗೆ ಗೊತ್ತಿಲ್ಲ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="I don't know/ನನಗೆ ಗೊತ್ತಿಲ್ಲ"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>
                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography style={{ color: '#ff7424' }}>
                        Do you think there are alternatives in the household for materials that cause pollution? /
                        ಮಾಲಿನ್ಯವನ್ನು ಉಂಟುಮಾಡುವ ವಸ್ತುಗಳಿಗೆ ಮನೆಯಲ್ಲಿ ಪರ್ಯಾಯಗಳಿವೆ ಎಂದು ನೀವು ಭಾವಿಸುತ್ತೀರಾ?*
                        {pollutioncauseError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Natural Resource"
                        name="radio-buttons-group"
                        value={pollutioncause}
                        onChange={handlepollutioncause}
                      >
                        <FormControlLabel value="Yes" control={<Radio style={{ color: '#595959' }} />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio style={{ color: '#595959' }} />} label="No" />
                        <FormControlLabel
                          value="Maybe"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Maybe"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>
                {showHouseHoldDiscription ? (
                  <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                    <CardContent>
                      <Typography style={{ color: '#ff7424' }}>
                        If yes, what are they? / ಹೌದು ಎಂದಾದರೆ, ಅವು ಯಾವುವು? *
                      </Typography>
                      <Stack mt={2} mb={2}>
                        <TextField
                          id="Answ"
                          label="Your Answer"
                          required
                          variant="outlined"
                          color="common"
                          onChange={(e) => setSendData({ ...sendData, If_yes_what_are_they: e?.target?.value })}
                          value={sendData?.If_yes_what_are_they}
                        />
                      </Stack>
                    </CardContent>
                  </Card>
                ) : null}

                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography style={{ color: '#ff7424' }}>
                        Would you be willing to switch to these eco-friendly products and activities? / ಈ ಪರಿಸರ ಸ್ನೇಹಿ
                        ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಚಟುವಟಿಕೆಗಳಿಗೆ ಬದಲಾಯಿಸಲು ನೀವು ಸಿದ್ಧರಿದ್ದೀರಾ? *
                        {productsError ? <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText> : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Natural Resource"
                        name="radio-buttons-group"
                        value={products}
                        onChange={handleproducts}
                      >
                        <FormControlLabel value="Yes" control={<Radio style={{ color: '#595959' }} />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio style={{ color: '#595959' }} />} label="No" />
                        <FormControlLabel
                          value="Maybe"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Maybe"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>

                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography style={{ color: '#ff7424' }}>
                        Would you be willing to make this switch to eco-friendly even if you have a pay a little more
                        than what you pay for the chemicals? / ನೀವು ರಾಸಾಯನಿಕಗಳಿಗೆ ಪಾವತಿಸುವುದಕ್ಕಿಂತ ಸ್ವಲ್ಪ ಹೆಚ್ಚು
                        ವೇತನವನ್ನು ಹೊಂದಿದ್ದರೂ ಸಹ ಪರಿಸರ ಸ್ನೇಹಿಯಾಗಿ ಈ ಬದಲಾವಣೆಯನ್ನು ಮಾಡಲು ನೀವು ಸಿದ್ಧರಿದ್ದೀರಾ *
                        {paychemicalsError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Natural Resource"
                        name="radio-buttons-group"
                        value={paychemicals}
                        onChange={handlechemicals}
                      >
                        <FormControlLabel value="Yes" control={<Radio style={{ color: '#595959' }} />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio style={{ color: '#595959' }} />} label="No" />
                        <FormControlLabel
                          value="Maybe"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Maybe"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>
                {showEcoFriendlyDiscription ? (
                  <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                    <CardContent>
                      <Typography style={{ color: '#ff7424' }}>
                        What do you think we should make this switch to eco-friendlly products? / ಪರಿಸರ ಸ್ನೇಹಿ
                        ಉತ್ಪನ್ನಗಳಿಗೆ ನಾವು ಈ ಬದಲಾವಣೆಯನ್ನು ಮಾಡಬೇಕೆಂದು ನೀವು ಏನು ಯೋಚಿಸುತ್ತೀರಿ?*
                      </Typography>
                      <Stack mt={2} mb={2}>
                        <TextField
                          id="Answ"
                          label="Your Answer"
                          required
                          variant="outlined"
                          color="common"
                          onChange={(e) =>
                            setSendData({ ...sendData, this_switch_to_eco_friendly_products: e?.target?.value })
                          }
                          value={sendData?.this_switch_to_eco_friendly_products}
                        />
                      </Stack>
                    </CardContent>
                  </Card>
                ) : null}

                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography style={{ color: '#ff7424' }}>
                        Do you think developing simple-at-home solutions to climate change is a lot of effort? / ಹವಾಮಾನ
                        ಬದಲಾವಣೆಗೆ ಸರಳವಾದ ಮನೆಯಲ್ಲೇ ಪರಿಹಾರಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸುವುದು ಬಹಳಷ್ಟು ಪ್ರಯತ್ನ ಎಂದು ನೀವು ಭಾವಿಸುತ್ತೀರಾ
                        *
                        {climateffortError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Natural Resource"
                        name="radio-buttons-group"
                        value={climateffort}
                        onChange={handleclimateffort}
                      >
                        <FormControlLabel value="Yes" control={<Radio style={{ color: '#595959' }} />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio style={{ color: '#595959' }} />} label="No" />
                        <FormControlLabel
                          value="Maybe"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Maybe"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>

                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography style={{ color: '#ff7424' }}>
                        Have you ever taken, or do you regularly take,any action out of concern for climate change? /
                        ಹವಾಮಾನ ಬದಲಾವಣೆಯ ಕಾಳಜಿಯಿಂದ ನೀವು ಎಂದಾದರೂ ತೆಗೆದುಕೊಂಡಿದ್ದೀರಾ ಅಥವಾ ನಿಯಮಿತವಾಗಿ ತೆಗೆದುಕೊಳ್ಳುತ್ತೀರಾ? *
                        {climateactionError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Natural Resource"
                        name="radio-buttons-group"
                        value={climateaction}
                        // onClick={}
                        onChange={handleclimateaction}
                      >
                        <FormControlLabel value="Yes" control={<Radio style={{ color: '#595959' }} />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio style={{ color: '#595959' }} />} label="No" />
                        <FormControlLabel
                          value="Maybe"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Maybe"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>
                {showClimateChangeDiscription ? (
                  <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                    <CardContent>
                      <Typography style={{ color: '#ff7424' }}>
                        If yes,what did you do/are you doing?/ಹೌದು ಎಂದಾದರೆ, ನೀವು ಏನು ಮಾಡಿದ್ದೀರಿ/ನೀವು ಮಾಡುತ್ತಿದ್ದೀರಿ? *
                      </Typography>
                      <Stack mt={2} mb={2}>
                        <TextField
                          id="Answ"
                          label="Your Answer"
                          required
                          variant="outlined"
                          color="common"
                          onChange={(e) =>
                            setSendData({ ...sendData, If_yes_what_did_you_do_are_you_doing: e?.target?.value })
                          }
                          value={sendData?.If_yes_what_did_you_do_are_you_doing}
                        />
                      </Stack>
                    </CardContent>
                  </Card>
                ) : null}

                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography style={{ color: '#ff7424' }}>
                        Do you know what natural resource of your community needs immediate attention and measures of
                        conservation (forest,lake,pond,park etc)? / ನಿಮ್ಮ ಸಮುದಾಯದ ಯಾವ ನೈಸರ್ಗಿಕ ಸಂಪನ್ಮೂಲಕ್ಕೆ ತಕ್ಷಣದ ಗಮನ
                        ಮತ್ತು ಸಂರಕ್ಷಣೆಯ ಕ್ರಮಗಳ ಅಗತ್ಯವಿದೆ ಎಂದು ನಿಮಗೆ ತಿಳಿದಿದೆಯೇ (ಅರಣ್ಯ, ಸರೋವರ, ಕೊಳ, ಉದ್ಯಾನವನ ಇತ್ಯಾದಿ) *
                        {initiativemeasuresError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Natural Resource"
                        name="radio-buttons-group"
                        value={initiativemeasures}
                        onChange={handleinitiativemeasures}
                      >
                        <FormControlLabel value="Yes" control={<Radio style={{ color: '#595959' }} />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio style={{ color: '#595959' }} />} label="No" />
                        <FormControlLabel
                          value="Maybe"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Maybe"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>
                {showpark ? (
                  <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                    <CardContent>
                      <Typography style={{ color: '#ff7424' }}>
                        If yes,what is that resource? / ಹೌದು ಎಂದಾದರೆ, ಆ ಸಂಪನ್ಮೂಲ ಯಾವುದು?*
                      </Typography>
                      <Stack mt={2} mb={2}>
                        <TextField
                          id="Answ"
                          label="Your Answer"
                          variant="outlined"
                          color="common"
                          onChange={(e) => setSendData({ ...sendData, If_yes_what_is_that_resource: e?.target?.value })}
                          value={sendData?.If_yes_what_is_that_resource}
                        />
                      </Stack>
                    </CardContent>
                  </Card>
                ) : null}

                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Typography style={{ color: '#ff7424' }}>
                      What is your goal you want to achieve with regard to natural resource conservation in your
                      village? / ನಿಮ್ಮ ಗ್ರಾಮದಲ್ಲಿ ನೈಸರ್ಗಿಕ ಸಂಪನ್ಮೂಲ ಸಂರಕ್ಷಣೆಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ನೀವು ಸಾಧಿಸಲು ಬಯಸುವ ನಿಮ್ಮ
                      ಗುರಿ ಏನು? *
                    </Typography>
                    <Stack mt={2} mb={2}>
                      <TextField
                        id="Answ"
                        color="common"
                        label="Your Answer"
                        variant="outlined"
                        onChange={(e) =>
                          setSendData({
                            ...sendData,
                            achieve_with_regard_to_natural_resource_conservation: e?.target?.value,
                          })
                        }
                        value={sendData?.achieve_with_regard_to_natural_resource_conservation}
                      />
                    </Stack>
                  </CardContent>
                </Card>

                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography style={{ color: '#ff7424' }}>
                        Have you seen anyone in the village take a initiative to conserve the environment of your
                        village? / ನಿಮ್ಮ ಗ್ರಾಮದ ಪರಿಸರವನ್ನು ಸಂರಕ್ಷಿಸಲು ಗ್ರಾಮದಲ್ಲಿ ಯಾರಾದರೂ ಮುಂದಾಗಿರುವುದನ್ನು ನೀವು
                        ನೋಡಿದ್ದೀರಾ *
                        {environmentError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Natural Resource"
                        name="radio-buttons-group"
                        value={environment}
                        onChange={conservenvironment}
                      >
                        <FormControlLabel value="Yes" control={<Radio style={{ color: '#595959' }} />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio style={{ color: '#595959' }} />} label="No" />
                        <FormControlLabel
                          value="Maybe"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Maybe"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>
                <Card style={{ marginTop: 40, backgroundColor: '#F6F8FB', borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography style={{ color: '#ff7424' }}>
                        Have you seen anyone in the village take a initiative to conserve the environment of your
                        village? / ನಿಮ್ಮ ಗ್ರಾಮದ ಪರಿಸರವನ್ನು ಸಂರಕ್ಷಿಸಲು ಗ್ರಾಮದಲ್ಲಿ ಯಾರಾದರೂ ಮುಂದಾಗಿರುವುದನ್ನು ನೀವು
                        ನೋಡಿದ್ದೀರಾ? *
                        {communitytogetherError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="Natural Resource"
                        name="radio-buttons-group"
                        value={communitytogether}
                        onChange={communityvalue}
                      >
                        <FormControlLabel
                          value="Strongly Agree/ಬಲವಾಗಿ ಒಪ್ಪುತ್ತೇನೆ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Strongly Agree/ಬಲವಾಗಿ ಒಪ್ಪುತ್ತೇನೆ"
                        />
                        <FormControlLabel
                          value="Agree / ಒಪ್ಪುತ್ತೇನೆ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Agree / ಒಪ್ಪುತ್ತೇನೆ"
                        />
                        <FormControlLabel
                          value="Neutral / ತಟಸ್ಥ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Neutral / ತಟಸ್ಥ"
                        />
                        <FormControlLabel
                          value="Disagree / ಒಪ್ಪುವುದಿಲ್ಲ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Disagree / ಒಪ್ಪುವುದಿಲ್ಲ"
                        />
                        <FormControlLabel
                          value="Strongly Disagree / ಖಂಡಿತವಾಗಿ ಒಪ್ಪುವುದಿಲ್ಲ"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Strongly Disagree / ಖಂಡಿತವಾಗಿ ಒಪ್ಪುವುದಿಲ್ಲ"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>

                {/* -------------------------------- */}
              </CardContent>
            </Card>
          </Grid>
        </form>
      </Dialog>
    </div>
  );
}