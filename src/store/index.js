import { createStore } from 'redux';

// reduces
import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);

export default store;
