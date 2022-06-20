import React from 'react';
import {Typography} from "@mui/material";
import {IonButton, IonCard} from "@ionic/react";
import './assetTrackingCard.css';

function AssetTrackingCard(props) {
  const {
    cardSvg,
    cardText,
    imgHeight,
    imgWidth,
    button,
  } = props;

  return (
    <IonCard className="asset-cards">
      <img src={cardSvg} height={imgHeight} width={imgWidth}/>
      <Typography variant='body2' sx={{color: '#2E2E2E', fontWeight: 'bolder'}}>
        {cardText}
      </Typography>
      {button? <IonButton className="checked-out-button" expand="block" size='small'>Checked Out</IonButton> : null}
    </IonCard>
  );
}

export default AssetTrackingCard;