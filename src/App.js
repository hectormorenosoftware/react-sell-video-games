import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";

import IndexPage from "./components/IndexPage";
import Scheduler from "./components/Scheduler";
import ConfirmationPage from "./components/ConfirmationPage";
import Orders from "./components/Orders";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <IndexPage />} />
      <Route exact path="/scheduler" render={() => <Scheduler />} />
      <Route
        exact
        path="/confirmation-order"
        render={() => <ConfirmationPage />}
      />
      <Route exact path="/orders" render={() => <Orders />} />
    </Switch>
  );
}

export default withRouter(App);
