import React, { useContext } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonListHeader,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonCheckbox,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonFabButton,
  IonMenuButton,
} from '@ionic/react';

import { listContext } from '../App';

import { close } from 'ionicons/icons';

import './style.css';

const Home: React.FC = () => {
  const { list } = useContext(listContext);
  console.log(list, 'LIST');
  return (
    <>
      <IonHeader translucent>
        <IonToolbar>
          <IonMenuButton slot='start' />
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonListHeader>Список задач</IonListHeader>
          {list.length && list.map(item => <ListBody item={item} />)}
        </IonList>
      </IonContent>
    </>
  );
};

interface Item {
  item: {
    username: string;
    task: string;
    checked: boolean;
  };
}

const ListBody: React.SFC<Item> = ({ item }) => {
  let { username, task, checked } = item;
  const { dispatch } = useContext(listContext);

  const checkClick = (item: { username: string; task: string; checked: boolean }) => (e: any) => {
    dispatch({ type: 'done', payload: item });
  };

  const removeItem = (item: { username: string; task: string; checked: boolean }) => (e: any) => {
    dispatch({ type: 'remove', payload: item });
  };

  return (
    <IonItemSliding>
      <IonItem>
        <IonButton fill='clear' onClick={checkClick(item)}>
          <IonCheckbox checked={checked} />
        </IonButton>
        <IonLabel>
          <h3>{username}</h3>
          <p>{task}</p>
        </IonLabel>
        <IonButton fill='clear' color='danger' onClick={removeItem(item)}>
          <IonIcon icon={close} />
        </IonButton>
      </IonItem>
      <IonItemOptions side='start'>
        <IonItemOption color='primary' onClick={checkClick(item)}>
          Done
				</IonItemOption>
        <IonItemOption color='danger' onClick={removeItem(item)}>
          Delete
				</IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default Home;
