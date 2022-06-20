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
    IonMenu,
    IonList,
    IonContent,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, personOutline, ellipsisHorizontalOutline, cameraOutline, diamondOutline } from 'ionicons/icons';
import Home from './pages/Home/Home';
import Login from './pages/Login/login';
import AssetTracking from './pages/Asset Tracking/assetTracking';
import Wrapper from './components/Wrapper/wrapper';
import NoOfItems from './pages/Asset Tracking/No of Items/noOfItems';

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

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonMenu contentId="main">
                <IonContent>
                    <IonList>
                        // here you can put your side menu items with router links
                    </IonList>
                </IonContent>
            </IonMenu>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/" component={Login} exact={true} />
                        <Wrapper>
                            <Route path="/home" component={Home} exact={true} />
                            <Route path="/myAssets" component={AssetTracking} exact={true} />
                            <Route path="/noOfItems" component={NoOfItems} exact={true} />
                        </Wrapper>
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
                        <IonAvatar className='camera-icon' style={{backgroundColor:'rgba(19,121,219,1)'}}>
                            <IonIcon icon={cameraOutline} size='large' style={{color:'white'}}/>
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
        </IonReactRouter>
    </IonApp>
);

export default App;
