import React from 'react';
import {Divider, Typography} from "@mui/material";
import './assetTracking.css';
import {IonCol, IonGrid, IonRow} from "@ionic/react";
import NoItems from '../../resources/SVGs/no-items-01.svg';
import Scan from '../../resources/SVGs/scan-01.svg';
import Return from '../../resources/SVGs/refund-s-01-01.svg';
import Other from '../../resources/SVGs/other-s-01.svg';
import AssetTrackingCard from "../../components/Asset Tracking Cards/assetTrackingCard";

function AssetTracking(props) {
  return (
    <>
      <div className="asset-text">
        <Typography variant="h3" sx={{color: '#0581fc', fontSize: '20px', fontWeight: 'bolder'}}>
          Asset Tracking System
        </Typography>
        <Typography variant="caption" align="center">
          This is the place where you can track <br />item, check-in and check-out
        </Typography>
      </div>
      <Divider sx={{margin:'3% 0 3% 0', padding:'0 3% 0 3%'}}/>
      <IonGrid className='asset-grid'>
        <IonRow>
          <IonCol>
            <AssetTrackingCard cardSvg={NoItems} cardText='No. of Items' imgHeight='50px' imgWidth='50px'/>
          </IonCol>
          <IonCol>
            <AssetTrackingCard cardSvg={Scan} cardText='Scan It' imgHeight='50px' imgWidth='50px'/>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <AssetTrackingCard cardSvg={Return} cardText='Return Items' imgHeight='50px' imgWidth='50px'/>
          </IonCol>
          <IonCol>
            <AssetTrackingCard cardSvg={Other} cardText='Other' imgHeight='50px' imgWidth='50px'/>
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}

export default AssetTracking;