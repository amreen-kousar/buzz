import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Button,
  Grid,
  Stack,
  TextField,
  Select,
  Radio,
  RadioGroup,
  MenuItem,
  FormControlLabel,
  Card,
  CardContent,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import { Icon } from '@iconify/react';
import Dialog from '@mui/material/Dialog';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { useLocation } from 'react-router-dom';
import FormHelperText from '@mui/material/FormHelperText';
import Iconify from '../../../components/Iconify';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GelathiCircleForm({
  gelathiDrawerReloder,
  setShowForm,
  index,
  circleData,
  reloadmethod,
  clcikData,
  singleCircleData,
  id,
}) {
  const { state } = useLocation();

  const [open, setOpen] = React.useState(true);
  const [vyaapar, setVyaapar] = useState('');
  const [circleform, setcircleform] = useState('');
  const [selectedValue, setSelectedValue] = React.useState('');
  const [skillValue, setSkillValue] = React.useState('');
  const [listenpara, setListenpara] = React.useState('');
  const [community, setCommunity] = React.useState('');
  const [age, setAge] = React.useState('');
  const [communitymem, setCommunitymem] = React.useState('');
  const [bringtogether, setbringTogether] = React.useState('');
  const [conflicts, setConflicts] = React.useState('');
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [sendData, setSendData] = useState({
    email_address: '',
    GelathiId: '',
    Spoorthi_Session_Number: '',
    list_down_your_skills: '',
    skills_to_overcome_my_challenges: '',
    used_skills_resources_combat_challenge: '',
    listen_paragraph: '',
    summarize_main_points_paragraph: '',
    ask_two_questions_help_you_understand: '',
    three_infrastructure_of_your_village: '',
    know_the_need_of_my_community: '',
    together_community_members_community_infrastructure: '',
    with_other_community_infrastructure: '',
    bring_someone_together: '',
    brought_people_together_incident: '',
    conflict_with_anyone_ask_position: '',
    conflict_matters_interest_mine: '',
    There_puja_at_my_house: '',
  });
  const [helperText, setHelperText] = React.useState('Please Select The Option.');
  const [sessionValueError, setSessionValueError] = useState(false);
  const [skillError, setSkillError] = useState(false);
  const [listenparaError, setListenParaError] = useState(false);
  const [communityError, setcommunityError] = useState(false);
  const [communitymemError, setcommunitymemError] = useState(false);
  const [bringtogetherError, setbringtogetherError] = useState(false);
  const [conflictsError, setconflictsError] = useState(false);
  const handleChangeSelect = (event) => {
    setAge(event.target.value);
  };
  const sessionValue = (event) => {
    setSelectedValue(event.target.value);
    setSessionValueError(false);
  };
  const skillsoption = (event) => {
    setSkillValue(event.target.value);
    setSkillError(false);
  };

  const paravalue = (event) => {
    setListenpara(event.target.value);
    setListenParaError(false);
  };

  const communityvalue = (event) => {
    setCommunity(event.target.value);
    setcommunityError(false);
  };

  const communitymemvalue = (event) => {
    setCommunitymem(event.target.value);
    setcommunitymemError(false);
  };
  const bringtogethervalue = (event) => {
    setbringTogether(event.target.value);
    setbringtogetherError(false);
  };

  const Conflictvalue = (event) => {
    setConflicts(event.target.value);
    setconflictsError(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
    setShowForm(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowForm(false);
  };

  useEffect(() => {
    gelathinamelist();

   
  }, []);

  const gelathinamelist = (async) => {
    var data = JSON.stringify({
      partcipantId: id,
    });

    var config = {
      method: 'post',
      url: 'https://bdms.buzzwomen.org/appTest/getGelathiList.php',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setVyaapar(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const gelathicircleformdata = async () => {
    if (selectedValue == '') {
      setSessionValueError(true);
    }

    if (skillValue == '') {
      setSkillError(true);
    }
    if (listenpara == '') {
      setListenParaError(true);
    }
    if (community == '') {
      setcommunityError(true);
    }
    if (communitymem == '') {
      setcommunitymemError(true);
    }
    if (bringtogether == '') {
      setbringtogetherError(true);
    }
    if (conflicts == '') {
      setconflictsError(true);
    }

    if (
      conflicts != '' &&
      bringtogether != '' &&
      communitymem != ' ' &&
      community != '' &&
      listenpara != '' &&
      skillValue != '' &&
      selectedValue != ''
    ) {
      var data = JSON.stringify({
        partcipantId: id,
        email_address: sendData?.email_address,
        GelathiId: sendData?.GelathiId,
        Spoorthi_Session_Number: selectedValue,
        list_down_your_skills: sendData?.list_down_your_skills,
        skills_to_overcome_my_challenges: skillValue,
        used_skills_resources_combat_challenge: sendData?.used_skills_resources_combat_challenge,
        listen_paragraph: listenpara,
        summarize_main_points_paragraph: sendData?.summarize_main_points_paragraph,
        ask_two_questions_help_you_understand: sendData?.ask_two_questions_help_you_understand,
        three_infrastructure_of_your_village: sendData?.three_infrastructure_of_your_village,
        know_the_need_of_my_community: community,
        together_community_members_community_infrastructure: communitymem,
        with_other_community_infrastructure: sendData?.with_other_community_infrastructure,
        bring_someone_together: bringtogether,
        brought_people_together_incident: sendData?.brought_people_together_incident,
        conflict_with_anyone_ask_position: sendData?.conflict_with_anyone_ask_position,
        conflict_matters_interest_mine: conflicts,
        There_puja_at_my_house: sendData?.There_puja_at_my_house,
      });

      var config = {
        method: 'post',
        url: 'https://bdms.buzzwomen.org/appTest/new/addSpoorthiBaselineQuestionnaire.php',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          if (response.data.success) {
            setcircleform(response?.data);
            alert('Spoorthi Form Submitted Successfully.');

            reloadmethod();
            gelathiDrawerReloder();
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      handleClose();
    } else {
      alert('Please Select The Option. ');
    }
  };

  return (
    <div>
      <Stack style={{ flexDirection: 'row', float: 'right' }} mb={2}>
      
        <IconButton onClick={handleClickOpen}>
          <Icon icon="clarity:form-line" width={20} height={20} marginTop={20} color="#ff7424" />
        </IconButton>
      </Stack>

      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            gelathicircleformdata();
          }}
        >
          <Toolbar sx={{ bgcolor: '#ff7424', color: 'white' }}>
            <IconButton style={{ float: 'right', color: 'white' }} onClick={handleClose}>
              <Iconify icon="material-symbols:arrow-back-rounded" />
            </IconButton>

            <Typography sx={{ ml: 2, flex: 1, color: 'inherit' }} variant="h6" component="div">
              Spoorthi Baseline Questionnaire
            </Typography>

            <Button
              edge="end"
              type="submit"
              onClick={() => {
                console.log('save');
              }}
              color="inherit"
            >
              <Iconify icon="material-symbols:save" width={30} height={30} />
            </Button>
          </Toolbar>
          <DialogContent dividers={scroll === 'paper'} sx={{ background: '#f9fafb' }}>
            <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
              <Grid style={{ margin: 10 }}>
                <Card mt={1} style={{ marginTop: 10, borderRadius: 20 }}>
                  <CardContent>
                    <Typography variant="subtitle2" style={{ color: '#ff7424' }}>
                      Surveyor's email address *
                    </Typography>
                    <Stack mt={2} mb={2}>
                      <TextField
                        id="Email"
                        required
                        label="Enter Email"
                        onChange={(e) => {
                          setSendData({ ...sendData, email_address: e?.target?.value });
                        }}
                        variant="outlined"
                        color="common"
                      />
                    </Stack>
                  </CardContent>
                </Card>
                <Card mt={1} style={{ marginTop: 10, borderRadius: 20 }}>
                  <CardContent>
                    <Typography variant="subtitle2" style={{ color: '#ff7424' }}>
                      Name of the Gelathi Facilitator/  /ಗೆಳತಿ ಆಯೋಜಕನ ಹೆಸರು*
                    </Typography>
                    <Stack mt={2} mb={2}>
                      <Select
                        color="common"
                        label="Choose Gelathi Facilitator"
                        variant="standard"
                        required
                        onChange={(e) => setSendData({ ...sendData, GelathiId: e?.target?.value })}
                        value={sendData?.GelathiId}
                      >
                        {vyaapar?.list?.map((itm) => {
                          return <MenuItem value={itm?.id}>{itm?.first_name}</MenuItem>;
                        })}
                      </Select>
                    </Stack>
                  </CardContent>
                </Card>
                 <Card style={{ marginTop: 10, borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography variant="subtitle2" style={{ color: '#ff7424' }}>
                        Spoorthi Session Number/ಸ್ಪೂರ್ತಿ ಸೆಷನ್ಸಂಖ್ಯೆ * (Tick the Spoorthi in which you are collecting
                        the data)
                        {sessionValueError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={selectedValue}
                        onChange={sessionValue}
                       >
                        <FormControlLabel
                          value="Session 1"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Session 1"
                        />
                        <FormControlLabel
                          value="Session 2"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Session 2"
                        />
                        <FormControlLabel
                          value="Session 3"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Session 3"
                        />
                        <FormControlLabel
                          value="Session 4"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Session 4"
                        />
                        <FormControlLabel
                          value="Session 5"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Session 5"
                        />
                        <FormControlLabel
                          value="Session 6"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Session 6"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>
                <Card style={{ marginTop: 10, borderRadius: 20 }}>
                  <CardContent>
                    <Typography variant="subtitle2" style={{ color: '#ff7424' }}>
                      Can you list down three of your skills/ ನಿಮ್ಮ ಮೂರು ಕೌಶಲ್ಯಗಳನ್ನು ನೀವು ಪಟ್ಟಿ ಮಾಡಬಹುದು?
                    </Typography>
                    <Stack mt={2} mb={2}>
                      <TextField
                        id="skillslist"
                        label="Your Answer"
                        required
                        onChange={(e) => {
                          setSendData({ ...sendData, list_down_your_skills: e?.target?.value });
                        }}
                        variant="outlined"
                        color="common"
                      />
                    </Stack>
                  </CardContent>
                </Card>
                <Card style={{ marginTop: 10, borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography variant="subtitle2" style={{ color: '#ff7424' }}>
                        I have used my skills to overcome my challenges/ನನ್ನ ಸವಾಲುಗಳನ್ನು ಜಯಿಸಲು ನಾನು ನನ್ನ ಕೌಶಲ್ಯವನ್ನು
                        ಬಳಸಿದ್ದೇನೆ
                        {skillError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={skillValue}
                        onChange={skillsoption}
                      >
                        <FormControlLabel
                          value="Strongly Agree"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Strongly Agree"
                        />
                        <FormControlLabel
                          value="Agree"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Agree"
                        />
                        <FormControlLabel
                          value="Neutral"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Neutral"
                        />
                        <FormControlLabel
                          value="Strongly Disagree"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Strongly Disagree"
                        />
                        <FormControlLabel
                          value="Disagree"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Disagree"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>
                 <Card style={{ marginTop: 10, borderRadius: 20 }}>
                  <CardContent>
                    <Typography variant="subtitle2" style={{ color: '#ff7424' }}>
                      State one instance of when you used your skills and resources to combat your challenge/ನಿಮ್ಮ
                      ಸವಾಲನ್ನು ಎದುರಿಸಲು ನಿಮ್ಮ ಕೌಶಲ್ಯ ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳನ್ನು ನೀವು ಬಳಸಿದಾಗ ಒಂದು ಉದಾಹರಣೆಯನ್ನು ತಿಳಿಸಿ
                    </Typography>
                    <Stack mt={2} mb={2}>
                      <TextField
                        id="skillsresources"
                        label="Your Answer"
                        onChange={(e) => {
                          setSendData({ ...sendData, used_skills_resources_combat_challenge: e?.target?.value });
                        }}
                        variant="outlined"
                        color="common"
                      />
                    </Stack>
                  </CardContent>
                </Card>
                 <Card style={{ marginTop: 10, borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography variant="subtitle2" style={{ color: '#ff7424' }}>
                        ನಮ್ಮ ಹಳ್ಳಿಯಲ್ಲಿರುವ ಕಸದ ಗುಡ್ಡೆ ಹಾದುಹೋಗುವಾಗ ನನಗೆ ಸದಾ ಬೇಸರವಾಗುತ್ತಿತ್ತು . ಈ ಪ್ರದೇಶವು, ನಮ್ಮಿಂ ದಲೇ
                        ತುಂಬಾ ಕೆಟ್ಟ ದಾಗಿ ದುರ್ವಾಸನೆ ಬೀರುತ್ತಿದೆ ಎಂದು ನನಗೆ ತಿಳಿದಿತ್ತು . ಆದರೆ, ಅದರ ಬಗ್ಗೆ ನನಗೆ ಏನುಮಾಡಬೇಕೆಂ ದು
                        ತಿಳಿದಿರಲಿಲ್ಲ . ಕಸವು ಪರಿಸರಕ್ಕೆ ದೊಡ್ಡ ಅಪಾಯವಾಗಿದೆ. ಇವು ಬಳಸಿದ ಪೇಪರ್, ಟಿಫಿನ್ ಪ್ಯಾ ಕಿಂ ಗಳು, ಪ್ಲಾಸ್ಟಿ
                        ಕ್ ಚೀಲಗಳು, ಐಸ್ ಕ್ರೀ ಮೊದಿಕೆಗಳು, ಬಾಟಲ್ ಕ್ಯಾ ನ್ಗಳು,ಮರಗಳಿಂದ ಬಿದ್ದ ಎಲೆಗಳು ಮತ್ತು ಇನ್ನೂ ವಿವಿಧಮೂಲಗಳಿಂದ
                        ಬರುತ್ತದೆ. ಕಸವು ಆವರಣವನ್ನು ಕೊಳಕು, ಅಶುದ್ಧ ಗೊಳಿಸುತ್ತದೆ ಮತ್ತು ರೋಗಗಳನ್ನು ಹುಟ್ಟು ಹಾಕುತ್ತದೆ ಎಂದು ನನಗೆ
                        ತಿಳಿದಿದೆ. ಎಸೆಯಲ್ಪಟ್ಟ ಬಹಳಷ್ಟು ಕಸವು ನವೀಕರಿಸಬಹುದಾದ ಮತ್ತು ಮರುಬಳಕೆಮಾಡಬಹುದಾದ ಕಾಗದ,ಲೋಹಗಳು ಮತ್ತು
                        ಗಾಜಿನಂತಹ ವಸ್ತುಗಳನ್ನು ಒಳಗೊಂಡಿರುತ್ತದೆ, ಅದನ್ನು ಹತ್ತಿರದ ಮರುಬಳಕೆ ಕೇಂದ್ರ ಕ್ಕೆ ಕಳುಹಿಸಬಹುದು ಅಥವಾ
                        ಜಂಕೀಲರ್ಗೆ ವಿಲೇವಾರಿಮಾಡಬಹುದು. ಇಂದಿನಿಂದ, ನಾನು ನನಗೆ ತಿಳಿದಿರುವ ವಸ್ತುಗಳನ್ನು ಮರುಬಳಕೆಮಾಡಲು ಪ್ರಯತ್ನಿ
                        ಸುತ್ತೇ ನೆ.Did you listen to the paragraph
                        {listenparaError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={listenpara}
                        onChange={paravalue}
                      >
                        <FormControlLabel value="Yes" control={<Radio style={{ color: '#595959' }} />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio style={{ color: '#595959' }} />} label="No" />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>

                <Card style={{ marginTop: 10, borderRadius: 20 }}>
                  <CardContent>
                    <Typography variant="subtitle2" style={{ color: '#ff7424' }}>
                      Please summarize the main points of the paragraph?/ಮೇಲಿನ ಪರಿಚ್ಚೇ ದದ ಮುಖ್ಯ ಅಂಶಗಳನ್ನು
                      ನೀವುಸಂಕ್ಷಿಪ್ತವಾಗಿ ತಿಳಿಸಿ. (ಸತ್ಯ ತೆ ಮತ್ತು ಭಾವನೆಗಳೆರಡನ್ನೂ ವಿಶ್ಲೇ ಷಿಸುವುದು)
                    </Typography>
                    <Stack mt={2} mb={2}>
                      <TextField
                        id="parapoints"
                        label="Your Answer"
                        onChange={(e) => {
                          setSendData({ ...sendData, summarize_main_points_paragraph: e?.target?.value });
                        }}
                        variant="outlined"
                        color="common"
                      />
                    </Stack>
                  </CardContent>
                </Card>

                <Card style={{ marginTop: 10, borderRadius: 20 }}>
                  <CardContent>
                    <Typography variant="subtitle2" style={{ color: '#ff7424' }}>
                      Please ask two questions that can help you understand the previous paragraph better?/ಹಿಂದಿನ
                      ಪರಿಚ್ಛೇ ದವನ್ನು ಚೆನ್ನಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುವ ಎರಡು ಪ್ರಶ್ನೆ ನೀವು ಕೇಳಿ.
                    </Typography>
                    <Stack mt={2} mb={2}>
                      <TextField
                        id="twoquestions"
                        label="Your Answer"
                        onChange={(e) => {
                          setSendData({ ...sendData, ask_two_questions_help_you_understand: e?.target?.value });
                        }}
                        variant="outlined"
                        color="common"
                      />
                    </Stack>
                  </CardContent>
                </Card>

                <Card style={{ marginTop: 10, borderRadius: 20 }}>
                  <CardContent>
                    <Typography variant="subtitle2" style={{ color: '#ff7424' }}>
                      Please name three infrastructure of your village?/ಗ್ರಾಮದಲ್ಲಿ ಇರುವ ಮೂರುಮೂಲಸೌಕರ್ಯಗಳನ್ನು ಹೆಸರಿಸಿ.
                    </Typography>
                    <Stack mt={2} mb={2}>
                      <TextField
                        id="twoquestions"
                        label="Your Answer"
                        onChange={(e) => {
                          setSendData({ ...sendData, three_infrastructure_of_your_village: e?.target?.value });
                        }}
                        variant="outlined"
                        color="common"
                      />
                    </Stack>
                  </CardContent>
                </Card>

                <Card style={{ marginTop: 10, borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography variant="subtitle2" style={{ color: '#ff7424' }}>
                        I Know the need of my community/ನನ್ನ ಸಮುದಾಯದ ಅವಶ್ಯಕತೆ ನನಗೆ ತಿಳಿದಿದೆ
                        {communityError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={community}
                        onChange={communityvalue}
                      >
                        <FormControlLabel
                          value="Strongly Agree"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Strongly Agree"
                        />
                        <FormControlLabel
                          value="Agree"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Agree"
                        />
                        <FormControlLabel
                          value="Neutral"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Neutral"
                        />
                        <FormControlLabel
                          value="Strongly Disagree"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Strongly Disagree"
                        />
                        <FormControlLabel
                          value="Disagree"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Disagree"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>

                <Card style={{ marginTop: 10, borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography variant="subtitle2" style={{ color: '#ff7424' }}>
                        I have come together with other community members to make a change in our community
                        infrastructure/ನಮ್ಮ ಸಮುದಾಯದ ಮೂಲಸೌಕರ್ಯದಲ್ಲಿ ಬದಲಾವಣೆ ಮಾಡಲು ನಾನು ಇತರ ಸಮುದಾಯದ ಸದಸ್ಯರೊಂದಿಗೆ
                        ಸೇರಿಕೊಂಡಿದ್ದೇನೆ
                        {communitymemError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={communitymem}
                        onChange={communitymemvalue}
                      >
                        <FormControlLabel
                          value="Strongly Agree"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Strongly Agree"
                        />
                        <FormControlLabel
                          value="Agree"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Agree"
                        />
                        <FormControlLabel
                          value="Neutral"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Neutral"
                        />
                        <FormControlLabel
                          value="Strongly Disagree"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Strongly Disagree"
                        />
                        <FormControlLabel
                          value="Disagree"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Disagree"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>

                <Card style={{ marginTop: 10, borderRadius: 20 }}>
                  <CardContent>
                    <Typography variant="subtitle2" style={{ color: '#ff7424' }}>
                      Tell us about one instance when you came together with other community members to make a change in
                      the community infrastructure/ಸಮುದಾಯದ ಮೂಲಸೌಕರ್ಯದಲ್ಲಿ ಬದಲಾವಣೆಯನ್ನು ಮಾಡಲು ನೀವು ಇತರ ಸಮುದಾಯದ
                      ಸದಸ್ಯರೊಂದಿಗೆ ಸೇರಿಕೊಂಡಾಗ ಒಂದು ಉದಾಹರಣೆಯ ಕುರಿತು ನಮಗೆ ತಿಳಿಸಿ
                    </Typography>
                    <Stack mt={2} mb={2}>
                      <TextField
                        id="instance"
                        label="Your Answer"
                        onChange={(e) => {
                          setSendData({ ...sendData, with_other_community_infrastructure: e?.target?.value });
                        }}
                        variant="outlined"
                        color="common"
                      />
                    </Stack>
                  </CardContent>
                </Card>

                <Card style={{ marginTop: 10, borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography variant="subtitle2" style={{ color: '#ff7424' }}>
                        When you want to bring someone together and want to get an action done/ನೀವು ಯಾರನ್ನಾದರೂ ಒಟ್ಟಿಗೆ
                        ಸೇರಿಸಲು ಬಯಸಿದಾಗ ಮತ್ತು ಕ್ರಿಯೆಯನ್ನು ಮಾಡಲು ಬಯಸಿದಾಗ
                        {bringtogetherError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={bringtogether}
                        onChange={bringtogethervalue}
                      >
                        <FormControlLabel
                          value="Most often I am successful"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Most often I am successful"
                        />
                        <FormControlLabel
                          value="I am successful at doing this"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="I am successful at doing this"
                        />
                        <FormControlLabel
                          value="I struggle to bring women together"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="I struggle to bring women together"
                        />
                        <FormControlLabel
                          value="I am successful at getting women together but not getting an action done"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="I am successful at getting women together but not getting an action done"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>

                <Card style={{ marginTop: 10, borderRadius: 20 }}>
                  <CardContent>
                    <Stack mt={2}>
                      <Typography variant="subtitle2" style={{ color: '#ff7424' }}>
                        At the end of a conflict it matters to me that the other person's interest/need has been met as
                        well as mine / ಘರ್ಷಣೆಯ ಕೊನೆಯಲ್ಲಿ ಇನ್ನೊಬ್ಬರ ಆಸಕ್ತಿ/ಅವಶ್ಯಕತೆ ನನ್ನ ಜೊತೆಗೆ ಪೂರೈಸಲ್ಪಟ್ಟಿದೆ ಎಂಬುದು
                        ನನಗೆ ಮುಖ್ಯವಾಗಿದೆ
                        {conflictsError ? (
                          <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>
                        ) : null}{' '}
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={conflicts}
                        onChange={Conflictvalue}
                      >
                        <FormControlLabel
                          value="Strongly Agree"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Strongly Agree"
                        />
                        <FormControlLabel
                          value="Agree"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Agree"
                        />
                        <FormControlLabel
                          value="Neutral"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Neutral"
                        />
                        <FormControlLabel
                          value="Strongly Disagree"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Strongly Disagree"
                        />
                        <FormControlLabel
                          value="Disagree"
                          control={<Radio style={{ color: '#595959' }} />}
                          label="Disagree"
                        />
                      </RadioGroup>
                    </Stack>
                  </CardContent>
                </Card>

                <Card style={{ marginTop: 10, borderRadius: 20 }}>
                  <CardContent>
                    <Typography variant="subtitle2" style={{ color: '#ff7424' }}>
                      There is a puja at my house and I am sitting for it. Suddenly, my neighbour plays loud and
                      inappropriate music which disturbs the puja. How will you talk to your neighbour on the grivance
                      you have with them?/ನನ್ನ ಮನೆಯಲ್ಲಿ ಪೂಜೆ ಇದೆ ಅದಕ್ಕಾಗಿ ಕುಳಿತಿದ್ದೇನೆ. ಇದ್ದಕ್ಕಿದ್ದಂತೆ, ನನ್ನ
                      ನೆರೆಹೊರೆಯವರು ಜೋರಾಗಿ ಮತ್ತು ಅನುಚಿತವಾದ ಸಂಗೀತವನ್ನು ನುಡಿಸುತ್ತಾರೆ ಅದು ಪೂಜೆಗೆ ಅಡ್ಡಿಪಡಿಸುತ್ತದೆ. ನಿಮ್ಮ
                      ನೆರೆಹೊರೆಯವರೊಂದಿಗೆ ನೀವು ಹೊಂದಿರುವ ಕುಂದುಕೊರತೆಯ ಬಗ್ಗೆ ನೀವು ಹೇಗೆ ಮಾತನಾಡುತ್ತೀರಿ?
                    </Typography>
                    <Stack mt={2} mb={2}>
                      <TextField
                        id="instance"
                        label="Your Answer"
                        onChange={(e) => {
                          setSendData({ ...sendData, There_puja_at_my_house: e?.target?.value });
                        }}
                        variant="outlined"
                        color="common"
                      />
                    </Stack>
                  </CardContent>
                </Card>
                <br />
              </Grid>
            </DialogContentText>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
