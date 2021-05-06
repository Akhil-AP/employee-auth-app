import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Error from "./Components/Error";
import authdata from "./data/authdata";
import employeedata from "./data/employeedata";

import { createStore } from "redux";
import { Provider } from "react-redux";

function App() {
  const initialStore = {
    authuser: authdata,
    employeejson: employeedata,
    islogin: false,
  };

  const reducer = (state, action) => {
    if (action.type === "signin") {
      if (
        state.authuser.username === action.payload.useremail &&
        state.authuser.password === action.payload.userpassword
      ) {
        return { ...state, islogin: true };
      } else {
        alert("Username or Password is incorrect");
      }
    }

    return state;
  };
  const store = createStore(reducer, initialStore);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
