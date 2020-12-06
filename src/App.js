import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import TodoContainer from './TodoContainer';
// import SaveMetadataButton from './components/SaveMetadataButton';
import GetMetadataProfile from './components/GetMetadataProfile'
// import useGetMetadata from './components/hooks/useGetMetadata';
import Profile from './components/Profile'
import NavBar from './components/nav-bar';
import Loading from './components/Loading';
import { Container } from 'semantic-ui-react';
import PrivateRoute from './components/private-route';
import TodoContainer from './TodoContainer';
import MetadataContext from './context/metadataContext';
import "./App.css";

const App = () => {
  // const { userMetadata, isLoading } = useGetMetadata();
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar/>
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route 
            path="/" 
            exact
            // render={(props) => (
            //   <TodoContainer {...props} userMetadata={userMetadata} />
            // )}
            component={TodoContainer}
            />
          <PrivateRoute path="/profile" component={GetMetadataProfile} />
          {/* <PrivateRoute path="/savemetadata" component={SaveMetadataButton} /> */}
        </Switch>
      </Container>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
