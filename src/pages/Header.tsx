import React from 'react';
import { settings, menu } from "ionicons/icons";
import { IonButtons, IonHeader, IonToolbar, IonTitle, IonIcon, IonButton } from '@ionic/react';

const Header: React.FC = () => (
  <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton>
            <IonIcon slot="icon-only" size="large" icon={menu}></IonIcon>
          </IonButton>
        </IonButtons>
        <IonTitle style={{textAlign: "center"}}>LOGO</IonTitle>
        <IonButtons slot="end">
          <IonButton>
            <IonIcon slot="icon-only" size="large" icon={settings}></IonIcon>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
);

export default Header;
