//React
import React from 'react';
import ReactDOM from 'react-dom';
//Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
//CSS
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
//Components
import ReceiptsScreen from './containers/ReceiptsScreen';

const store = configureStore();

ReactDOM.render(
    <Provider store={store} >
        <ReceiptsScreen />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
