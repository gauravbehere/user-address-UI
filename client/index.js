import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/reducer';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware,)
  );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app-root')
);
