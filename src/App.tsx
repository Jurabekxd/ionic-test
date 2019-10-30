import React, { createContext, useReducer, Dispatch } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Home from './pages/Home';

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
export interface listInitInterface {
	username: string;
	task: string;
	checked: boolean;
}

const listInit: listInitInterface[] = [
	{
		username: 'First',
		task: 'Take kids to kindergarden',
		checked: false,
	},
	{
		username: 'Second',
		task: 'Buy groceries at Wallmart',
		checked: false,
	},
	{
		username: 'Last',
		task: 'Learn the fucking IONIC',
		checked: false,
	},
];

type Action = { type: 'add'; payload: listInitInterface } | { type: 'remove'; payload: listInitInterface } | { type: 'done'; payload: listInitInterface };

interface listContextInterface {
	list: listInitInterface[];
	dispatch: Dispatch<Action>;
}

export const listContext = createContext<Partial<listContextInterface>>({});

const listReducer = (state: listInitInterface[], action: Action) => {
	switch (action.type) {
		case 'add': {
			console.log('add');
			return [...state, action.payload];
		}
		case 'remove': {
			console.log('remove');
			let index = state.indexOf(action.payload);
			console.log(index);
			state.slice(index, 1);
			return state;
		}
		case 'done': {
			console.log('done');
			let index = state.indexOf(action.payload);
			state[index].checked = true;
			return state;
		}
		default:
			return state;
	}
};

const App: React.FC = () => {
	const [list, dispatch] = useReducer(listReducer, listInit);
	return (
		<IonApp>
			<IonReactRouter>
				<listContext.Provider value={{ list, dispatch }}>
					<IonRouterOutlet>
						<Route path='/home' component={Home} />
						<Route exact path='/' render={() => <Redirect to='/home' />} />
					</IonRouterOutlet>
				</listContext.Provider>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;
