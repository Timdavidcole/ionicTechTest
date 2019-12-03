import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Missions from "./pages/Missions";
import Notes from "./pages/Notes";
import Requests from "./pages/Requests";
import Details from "./pages/Details";
import Header from "./pages/Header";
import { IonContent } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <Header />
    <IonContent>
      <IonReactRouter>
        <IonTabs>
          <IonTabBar slot="top">
            <IonTabButton tab="missions" href="/missions">
              <IonLabel>Missions</IonLabel>
            </IonTabButton>
            <IonTabButton tab="notes" href="/notes">
              <IonLabel>Notes</IonLabel>
            </IonTabButton>
            <IonTabButton tab="notes" href="/requests">
              <IonLabel>Requests</IonLabel>
            </IonTabButton>
          </IonTabBar>
          <IonRouterOutlet>
            <Route path="/menu" component={Header} exact={true} />
            <Route path="/missions" component={Missions} exact={true} />
            <Route path="/notes" component={Notes} exact={true} />
            <Route path="/notes/details" component={Details} />
            <Route path="/requests" component={Requests} />
            <Route
              path="/"
              render={() => <Redirect to="/missions" />}
              exact={true}
            />
          </IonRouterOutlet>
        </IonTabs>
      </IonReactRouter>
    </IonContent>
  </IonApp>
);

export default App;
