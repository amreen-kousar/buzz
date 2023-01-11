
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// @mui
import { styled } from '@mui/material/styles';
import { Card, Link, Container, Typography, Button } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
import Logo from '../components/Logo';
// sections
import { LoginForm } from '../sections/auth/login';
import { auth, provider } from "../Firebase"
//import Firebase from '../Firebase'
import AuthSocial from '../sections/auth/AuthSocial';




// ----------------------------------------------------------------------

export default function Login() {

  const RootStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  }));

  const apiHit = async (itm) => {
    console.log(itm, "<--sadsa")
    var data = JSON.stringify({
      "email": itm?.user?.email
    });

    var config = {
      method: 'post',
      url: 'http://3.7.7.138/appTest/signIn.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data, "response")
        localStorage?.setItem('user', JSON?.stringify(itm?.user))
        localStorage?.setItem('userId', response?.data?.role)
        if (response?.data?.code == 404) {
          alert("email id not found")
        }
        else {
          localStorage.setItem('userDetails', JSON.stringify(response.data))
          if (localStorage?.userDetails) {
            if (
              response.data.role == 2
            ) {
              navigate('/dashboard/buslist',)
            } else {
              navigate('/dashboard/app')
            }

          }
        }
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const HeaderStyle = styled('header')(({ theme }) => ({
    top: 0,
    zIndex: 9,
    lineHeight: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    padding: theme.spacing(3),
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      padding: theme.spacing(7, 5, 0, 7),
    },
  }));

  const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2),
  }));

  const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
  }));
  const smUp = useResponsive('up', 'sm');
  const navigate = useNavigate();

  const mdUp = useResponsive('up', 'md');
  // console.log(Firebase,'<--jkbjhbj')
  const googleLogin = async () => {
    auth.signInWithPopup(provider)
      .then(itm => { apiHit(itm) })

      .catch((error) => alert(error.message));
  }
  return (
    <Page title="Login">
      <RootStyle>
        <HeaderStyle>
          <Logo />

          {smUp && (
            <Typography variant="body2" sx={{ mt: { md: -2 } }}>
              Don’t have an account? {''}
              <Link variant="subtitle2" component={RouterLink} to="/register">
                Get started
              </Link>
            </Typography>
          )}
        </HeaderStyle>

        {mdUp && (
          <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <img src="/static/illustrations/illustration_login.png" alt="login" />
          </SectionStyle>
        )}

        <Container maxWidth="sm">
          <ContentStyle>
            <Typography variant="h4" gutterBottom>
              Sign in to Buzz Staff For Women
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 5 }}>Enter your details below.</Typography>
            <Button onClick={googleLogin}>
              Login google
            </Button>

            {/* <AuthSocial /> */}

            <LoginForm />

            {!smUp && (
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Don’t have an account?{' '}
                <Link variant="subtitle2" component={RouterLink} to="/register">
                  Get started
                </Link>
              </Typography>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
