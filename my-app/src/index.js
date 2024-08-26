import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const F = {
    contactsF: [""],
};
// const L = {
//     contactsL: ["Capella"],
// };

function reducer(stateF = F, action) {
    switch (action.type) {
        case 'ADD_FIRSTNAME':
            return {
                ...stateF,
                contactsF: [...stateF.contactsF, action.firstName]
            }
        default:
            return stateF;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// const rootReducers = combineReducers({
//     reducer
// })
// const store = createStore(rootReducers);

const store = createStore(reducer);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

reportWebVitals();