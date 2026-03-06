import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { ModalProvider } from './components/Modal/ModalContext';
import { PersistGate } from 'redux-persist/integration/react';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}></Provider>
//     <BrowserRouter>
//       <ModalProvider>
//         <App />
//       </ModalProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ModalProvider>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </ModalProvider>
    </BrowserRouter>
    </Provider>
    
  </React.StrictMode>
);


reportWebVitals();
