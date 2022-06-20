import React from 'react';
import {Divider, Typography} from "@mui/material";
import {IonButton, IonCol, IonGrid, IonIcon, IonRow} from "@ionic/react";
import AssetTrackingCard from "../../../components/Asset Tracking Cards/assetTrackingCard";
import Hammer from "../../../resources/Images/photo-1586864387967-d02ef85d93e8.jpeg";
import Tape from "../../../resources/Images/DSC_6438-5c1a4549c9e77c0001d4bdae.jpeg";
import Drill from "../../../resources/Images/GettyImages-713840367-99d913591a6b45eba4111eefc0dbac7e.jpeg";
import Shovel from "../../../resources/Images/images.jpeg";
import {listOutline} from "ionicons/icons";

function NoOfItems(props) {
  return (
    <>
    <div className="asset-text">
      <IonCol style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Typography variant="h3" sx={{color: '#0581fc', fontSize: '20px', fontWeight: 'bolder', paddingLeft: '10%'}}>
          No. of Items
        </Typography>
        <IonIcon src={listOutline} size='large' style={{paddingRight: '10%'}}/>
      </IonCol>
    </div>
  <Divider sx={{margin:'3% 0 3% 0', padding:'0 3% 0 3%'}}/>
  <IonGrid className='asset-grid'>
    <IonRow>
      <IonCol>
        <AssetTrackingCard cardSvg={Hammer} cardText='Hammer' button={true} imgHeight='100px' imgWidth='100px'/>
      </IonCol>
      <IonCol>
        <AssetTrackingCard cardSvg={Tape} cardText='Tape' button={true} imgHeight='100px' imgWidth='100px'/>
      </IonCol>
    </IonRow>
    <IonRow>
      <IonCol>
        <AssetTrackingCard cardSvg={Drill} cardText='Electric Drill' button={true} imgHeight='100px' imgWidth='100px'/>
      </IonCol>
      <IonCol>
        <AssetTrackingCard cardSvg={Shovel} cardText='Wooden Shovel' button={true} imgHeight='100px' imgWidth='100px'/>
      </IonCol>
    </IonRow>
  </IonGrid>
</>
  );
}

export default NoOfItems;