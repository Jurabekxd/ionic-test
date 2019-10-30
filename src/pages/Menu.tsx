import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { IonMenu, IonContent, IonMenuToggle, IonItem, IonList, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

interface MenuInterface {
  history: History[];
}

const Menu: React.SFC<RouteComponentProps> = ({ history }) => {
  return (
    <IonMenu side="start" contentId='main'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Menu
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle>
            <IonItem onClick={() => history.push('/home')}>List of tasks</IonItem>
            <IonItem onClick={() => history.push('/add')}>Add a task</IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default withRouter(Menu);
