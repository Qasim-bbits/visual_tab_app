import React from 'react';
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonRow,
  IonSearchbar, IonTitle,
  IonToggle,
  IonToolbar
} from "@ionic/react";
import './wrapper.css';
import Logo from "../../resources/Logos/only-V-01.svg";
import {Typography} from "@mui/material";

function Wrapper(props) {
  const {children} = props;
  return (
    <IonPage className='app-page'>
      <IonHeader>
        <IonToolbar>
          <IonRow className='app-toolbar' >
            <IonAvatar className='header-logo' t>
              <img src={Logo}/>
            </IonAvatar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRow className='welcome-greetings'>
          <Typography sx={{color: '#fff', fontSize: '15px', fontWeight: 'bold'}}>
            Hello, Calvin
          </Typography>
          <IonToggle color="light" />
        </IonRow>
        <IonCard className='content-modal'>
          <IonSearchbar showCancelButton="never" className='search-bar'/>
          {children}
        </IonCard>
      </IonContent>
      <IonMenu side="start" menuId="first">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Start Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </IonPage>
  );
}

export default Wrapper;