import React from 'react';
import { Provider} from 'react-redux';
import './App.css';
import Posts from './component/view/posts/posts';
import  store from './store';

const App = () => {
  return (
    <Provider store = { store }>
    <div className="App">
      <header className="App-header">
      </header>
      <Posts />
    </div>
    </Provider>
  );
}

export default App;
