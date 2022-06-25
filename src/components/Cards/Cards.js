import React from 'react';
import {
  IonCard, IonCol,
  IonContent,
  IonRow,
} from '@ionic/react';
import {Typography} from "@mui/material";
import './Cards.css';

function Cards(props) {
  const {
    cardTextTop,
    cardTextBottom,
    cardSvg,
    cardColor,
  } = props;
  return (
    <IonCard className='home-cards' style={{borderColor: `#ffffff #ffffff #ffffff ${cardColor}`}}>
      <IonContent>
        <IonRow>
          <IonCol className='card-text'>
            <Typography sx={{color: cardColor, fontSize: '15px', fontWeight: 'bold'}}>
              {cardTextTop}
            </Typography>
            <Typography sx={{color: cardColor, fontSize: '12px', fontWeight: 'bold'}}>
              {cardTextBottom}
            </Typography>
          </IonCol>
          <IonCol className='card-svg'>
            <img src={cardSvg} width='50vh' height='50vw'/>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonCard>
  );
}

export default Cards;