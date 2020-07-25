import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import index from '../src/React-Redux/Redux/Reducer/index';
// import { fetchAllData } from '../src/React-Redux/Redux/Actions/index';
// import { fetchAllCountry } from '../src/React-Redux/Redux/Actions/index';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-notifications/lib/notifications.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';

const store = createStore(index, applyMiddleware(thunk));
// store.dispatch(fetchAllData());
// store.dispatch(fetchAllCountry());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
