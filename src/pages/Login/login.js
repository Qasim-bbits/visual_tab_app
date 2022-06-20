import React from 'react';
import {
  IonAvatar,
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonLabel,
  IonRow,
} from "@ionic/react";
import {useLoginFields} from "../../data/fields";
import {validateForm} from "../../data/utils";
import Logo from '../../resources/app-icon.jpeg';
import './login.css';
import {InputAdornment, Link, TextField, Typography} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { useHistory } from "react-router";

function Login() {

  const history = useHistory();
  const fields = useLoginFields();

  const handleLogin = () => {
    const errors = validateForm(fields);
    history.push('/home')

  }
  return (
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol size="6" offset="5">
            <IonAvatar className='login-logo'>
              <img src={Logo} width='10%' height='10%' />
            </IonAvatar>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="6" offset="4">
            <Typography sx={{color: '#2E2E2E', fontWeight: 'bold', fontSize: '25px'}}>
              Visual Tab
            </Typography>
          </IonCol>
          <IonCol size="8" offset="2.5">
            <IonRow>
              <Typography sx={{color: '#2E2E2E', fontSize: '20px'}}>
                Powered By&nbsp;
              </Typography>
              <Typography sx={{color: '#8f0707', fontSize: '20px'}}>
                Ventra Cloud
              </Typography>
            </IonRow>
          </IonCol>
          <IonCol size="5" offset="5">
            <Typography sx={{color: '#2E2E2E', fontWeight: 'bolder', fontSize: '13px', marginLeft: 1}}>
              Login
            </Typography>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="10" offset="1">
            <TextField
              fullWidth
              label="Username"
              margin="normal"
              name="username"
              type="username"
              variant="outlined"
              size='small'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </IonCol>
          <IonCol size="10" offset="1">
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              variant="outlined"
              size='small'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="6" size-lg offset="1">
              <IonLabel>Remember me</IonLabel>
              <IonCheckbox defaultChecked={true} slot="start" />
          </IonCol>
          <IonCol size="4" size-lg>
            <Typography align='right' sx={{fontSize: '13px'}}>
              <Link href="#" >
                Forgot password ?
              </Link>
            </Typography>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="10" offset="1">
            <IonButton className="login-button" expand="block" size='medium' onClick={handleLogin}>Login</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
}

export default Login;