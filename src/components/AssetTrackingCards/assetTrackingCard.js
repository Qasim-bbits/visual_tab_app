import React from 'react';
import {Typography} from "@mui/material";
import {IonCard} from "@ionic/react";
import './assetTrackingCard.css';
import {useHistory} from "react-router";

function AssetTrackingCard(props) {
  const {
    cardSvg,
    cardText,
    imgHeight,
    imgWidth,
    route,
  } = props;
  const history = useHistory();

  return (
    <IonCard className="asset-cards" style={{cursor: 'pointer'}} onClick={() => {history.push(route)}}>
      <img src={cardSvg} height={imgHeight} width={imgWidth}/>
      <Typography variant='body2' sx={{color: '#2E2E2E', fontWeight: 'bolder'}}>
        {cardText}
      </Typography>
    </IonCard>
  );
}

export default AssetTrackingCard;