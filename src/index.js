import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>  
        <App />
    </PersistGate>
  </Provider>
);