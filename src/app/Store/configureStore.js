import {createStore} from 'redux';
import testReducer from '../../Components/testarea/testReducer';


export  const configureStore =() =>{
  
  const store = createStore(testReducer);

  return store; 
}