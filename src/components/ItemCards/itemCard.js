import React, {useEffect} from 'react';
import {Typography} from "@mui/material";
import {IonButton, IonCard} from "@ionic/react";
import './itemCard.css';
import DescriptionSheet from "../Description Sheet/descriptionSheet";

function ItemCard(props) {
  const {
    cardSvg,
    cardText,
    imgHeight,
    imgWidth,
    button,
    setShowModal,
    showModal,
  } = props;

  return (
    <>
      <IonCard className="item-cards" onClick={() => setShowModal(!showModal)} style={{cursor: 'pointer'}}>
        <img src={cardSvg} height={imgHeight} width={imgWidth}/>
        <Typography variant='body2' sx={{color: '#2E2E2E', fontWeight: 'bolder'}}>
          {cardText}
        </Typography>
        {button? <IonButton className="checked-out-button" expand="block" size='small'>Checked Out</IonButton> : null}
      </IonCard>
    </>
  );
}

export default ItemCard;