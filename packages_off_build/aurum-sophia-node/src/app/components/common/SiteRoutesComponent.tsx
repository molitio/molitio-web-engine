import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { ErrorPage } from 'pages/ErrorPage';
import { ActualsPage } from 'pages/ActualsPage';
import { AppContext } from 'services/siteDefaultsService';

export const SiteRoutesComponent: React.FC = () => {
    const context = React.useContext(AppContext);

    return (
        <Switch>
            <Route exact path="/">
                <ActualsPage />
            </Route>
            {Array.from([...context.featureCollection]).map((route) => (
                <Route component={context.componentCollection.get(route[0])} path={route[1].path} exact key={route[0]} />
            ))}
            {Array.from([...context.errorCollection]).map((errorData) => (
                <Route key={errorData[0]} exact path={`/error/${errorData[0]}`}>
                    <ErrorPage error={{ ...errorData[1] }} />
                </Route>
            ))}
            <Redirect to="/error/404" />
        </Switch>
    );
};
