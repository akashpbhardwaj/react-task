import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducer from "./AllReducers.js";
import { getCategories } from './Actions';
import TopNav from "./TopNav";
import Cats from "./Cats";
const startState = {};


const dateStore = createStore(
  allReducer,
  startState,
  applyMiddleware(...[thunk])
);

dateStore.dispatch(getCategories())

function App() {
  return (
    <Provider store={dateStore}>
      <div>
      <TopNav></TopNav>
       <Cats></Cats>
      </div>
    </Provider>
  );
}

export default App;
