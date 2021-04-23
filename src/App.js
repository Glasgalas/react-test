import './App.css';
import Menu from './components/Menu';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './components/redux/rootReducer';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

function App() {
  return (
    <Provider store={store}>
      <div className="body">
        <Menu />
      </div>
    </Provider>
  );
}

export default App;
