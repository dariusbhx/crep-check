import React from 'react';
import ReactDOM from 'react-dom';
import {AppProvider} from './context'
import App from './App';
import './index.css'
import thunk from 'redux-thunk'
import reducers from './reducers'
import {createStore, applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import 'semantic-ui-css/semantic.min.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)))
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Provider store = {store}>
        <App />
      </Provider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

