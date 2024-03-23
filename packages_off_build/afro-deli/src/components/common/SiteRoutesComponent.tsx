import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ErrorPage } from '../../pages/ErrorPage';
import { LandingPage } from '../../pages/LandingPage';
import { Context } from '../../App';

export function SiteRoutesComponent(): JSX.Element {
    const context = useContext(Context);

    return (
        <Switch>
            <Route exact path="/">
                <LandingPage />
            </Route>
            {Array.from([...context.featureContext.features]).map((route) => (
                <Route
                    key={route[0]}
                    exact
                    path={route[1].path}
                    component={context.componentContext.components.get(route[0])}
                />
            ))}
            {Array.from([...context.errorContext.errors]).map((errorType) => (
                <Route key={errorType[0]} exact path={`/error/${errorType[1].errorData.code}`}>
                    <ErrorPage errorData={errorType[1].errorData} />
                </Route>
            ))}
            <Redirect to="/error/404" />
        </Switch>
    );
}
