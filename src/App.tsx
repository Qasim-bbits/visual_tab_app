import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import {
    IonApp,
    IonRouterOutlet,
    setupIonicReact,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonAvatar,
    IonSplitPane,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, personOutline, ellipsisHorizontalOutline, cameraOutline, diamondOutline } from 'ionicons/icons';
import Home from './pages/Home/Home';
import Login from './pages/Login/login';
import AssetTracking from './pages/AssetTracking/assetTracking';
import Wrapper from './components/Wrapper/wrapper';
import NoOfItems from './pages/AssetTracking/NoOfItems/noOfItems';
import Menu from './components/Menu/Menu';
import QrScanner from './components/QRScanner/qrScanner';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
    return(
    <IonApp>
        <IonReactRouter>
            <IonSplitPane contentId="main">
                <Menu
                />
            <IonTabs>
                <IonRouterOutlet id="main">
                    <Route path="/" component={Login} exact={true} />
                        <Wrapper
                        >
                            <Route path="/home" component={Home} exact={true} />
                            <Route path="/myAssets" component={AssetTracking} exact={true} />
                            <Route path="/noOfItems" component={NoOfItems} exact={true} />
                        </Wrapper>
                    <Route path="/camera" component={QrScanner} exact={true} />
                </IonRouterOutlet>
                <IonTabBar slot="bottom" style={{overflow: 'visible'}}>
                    <IonTabButton tab="tab1" href="/home">
                        <IonIcon icon={homeOutline} />
                        <IonLabel>Home</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab2" href="/myAssets">
                        <IonIcon icon={diamondOutline} />
                        <IonLabel>My Assets</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab3" href="/camera">
                        <IonAvatar
                            className='camera-icon'
                            style={{
                                background:'linear-gradient(90deg, rgba(5,129,252,1) 0%, rgba(113,183,251,1) 100%)',
                                height: '50px',
                                width: '50px'
                            }}
                        >
                            <IonIcon icon={cameraOutline} size='large' style={{color:'white', marginTop: '5px'}}/>
                        </IonAvatar>
                    </IonTabButton>
                    <IonTabButton tab="tab4" href="/myProfile">
                        <IonIcon icon={personOutline} />
                        <IonLabel>My Profile</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab5" href="/more">
                        <IonIcon icon={ellipsisHorizontalOutline} />
                        <IonLabel>More</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
            </IonSplitPane>
        </IonReactRouter>
    </IonApp>
)
};

export default App;
