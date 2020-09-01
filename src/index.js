import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import  {Provider} from 'react-redux';
import App from './app/layout/App';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './app/Store/configureStore';



const store = configureStore();

// console.log(store.getState())
  const rootEl = document.getElementById('root');

let render = () => {
ReactDOM.render(
  <Provider store={store} >
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>
 , rootEl);

}

if(module.hot){
  module.hot.accept('./app/layout/App' , () => {
    setTimeout(render)
  })

}

render();

