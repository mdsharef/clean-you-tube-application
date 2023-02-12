import { StoreProvider } from 'easy-peasy';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import store from './store';

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <StoreProvider>
//             <App />
//         </StoreProvider>
//      </React.StrictMode>,
// );

ReactDOM.createRoot(document.getElementById('root')).render(
    <StoreProvider store={store}>
        <App />
    </StoreProvider>
);