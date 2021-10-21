import React from "react";
import "../styles/global.css";
import Layout from "../containers/Layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RecoveryPassword from "../containers/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../containers/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {/*  si pongo el Layout dentro como tiene un children produce un efecto no deseado y se muestra todos los 
          componentes, por eso saco el Layout fuera del switch */}
          {/* <Layout> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route path="*" component={NotFound} />
          {/* </Layout> */}
        </Switch>
      </Layout>
    </BrowserRouter>
    // <Layout>
    //   <Login />
    //   <RecoveryPassword />
    // </Layout>
  );
};

export default App;
