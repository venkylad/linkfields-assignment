import Layout, { Content } from "antd/lib/layout/layout";
import axios from "axios";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import CardContainer from "./components/CardContainer";
import DetailPage from "./components/DetailPage";

const App = () => {
  return (
    <>
      <Layout>
        <Content>
          <Switch>
            <Route exact path="/">
              <CardContainer />
            </Route>
            <Route exact path="/:pokemon">
              <DetailPage />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </>
  );
};

export default App;
