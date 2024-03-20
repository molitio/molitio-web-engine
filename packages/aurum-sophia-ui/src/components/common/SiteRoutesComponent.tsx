import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ErrorPage } from '../../pages/ErrorPage';
import { ActualsPage } from '../../pages/ActualsPage';
import { AppContext } from '../../services/siteDefaultsService';

export const SiteRoutesComponent: React.FC = () => {
    const context = React.useContext(AppContext);

    return (
        <main>
            <Switch>
                {Array.from([...context.featureCollection]).map((route) => (
                    <Route
                        component={context.componentCollection.get(route[0])}
                        path={route[1].isRedirect ? '/' : route[1].path}
                        exact
                        key={route[0]}
                    />
                ))}
                {Array.from([...context.errorCollection]).map((errorData) => (
                    <Route key={errorData[0]} exact path={`/error/${errorData[0]}`}>
                        <ErrorPage error={{ ...errorData[1] }} />
                    </Route>
                ))}
                <Route path="/">
                    <ActualsPage />
                </Route>
                <Redirect to="/error/404" />
            </Switch>
        </main>
    );
};
