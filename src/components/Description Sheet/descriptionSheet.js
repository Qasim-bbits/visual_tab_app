import React from 'react';
import {IonAvatar, IonButton, IonContent, IonImg, IonItem, IonLabel, IonList, IonModal} from "@ionic/react";
import ItemName from '../../resources/SVGs/item-name-01.svg';
import ItemType from '../../resources/SVGs/item-type-01.svg';
import UPC from '../../resources/SVGs/upc-code-01.svg';
import Acquired from '../../resources/SVGs/acquired-01.svg';
import Location from '../../resources/SVGs/loc-as-01.svg';
import './descriptionSheet.css';

function DescriptionSheet(props) {
  const {
    showModal,
    setShowModal,
  } = props;
  return (
    <IonModal isOpen={showModal} initialBreakpoint={0.25} breakpoints={[0, 0.25, 0.5, 0.75]} onDidDismiss={() => setShowModal(!showModal)} >
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonAvatar slot="start">
              <IonImg src={ItemName} />
            </IonAvatar>
            <IonLabel>
              <h2>Item Name</h2>
              <p>Hammer</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <IonImg src={ItemType} />
            </IonAvatar>
            <IonLabel>
              <h2>Item Type</h2>
              <p>Construction Tool</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <IonImg src={UPC} />
            </IonAvatar>
            <IonLabel>
              <h2>UPC/Bar Code</h2>
              <p>6956966899865</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <IonImg src={Acquired} />
            </IonAvatar>
            <IonLabel>
              <h2>Acquired On</h2>
              <p>12-12-2022 05:20 PM</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <IonImg src={Location} />
            </IonAvatar>
            <IonLabel>
              <h2>Location</h2>
              <p>STANFORD KING CENTER ON GLOBAL DEVELOPMENT</p>
            </IonLabel>
          </IonItem>
            <IonButton className="checked-out" expand="block" size='large'>Checked Out</IonButton>
        </IonList>
      </IonContent>
    </IonModal>
  );
}

export default DescriptionSheet;