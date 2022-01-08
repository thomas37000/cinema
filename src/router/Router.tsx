import React from 'react';
import { BrowserRouter as Router, Switch, Route, RouteComponentProps } from 'react-router-dom';
import Navbar from '../components/Nav/Nav';
import routes from '../interfaces/routes';

const Routter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
      {routes.map((route, index) => {
                        return (
                            <Route 
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                render={(props: RouteComponentProps<any>) => (
                                    <route.component
                                        name={route.name} 
                                        {...props}
                                        {...route.props}
                                    />
                                )}
                            />
                        );
                    })}
      </Switch>
    </Router>
  );
};

export default Routter;
