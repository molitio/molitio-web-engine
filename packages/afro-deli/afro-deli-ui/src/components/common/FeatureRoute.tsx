import React from 'react';
import { Route } from 'react-router-dom';
import { FeatureRouteProps } from './interface/FeatureRouteProps';

export function FeatureRoute({ siteFeature, siteComponent }: FeatureRouteProps): JSX.Element {
    return (
        <Route key={siteFeature.id} exact path={siteFeature.path}>
            {siteComponent}
        </Route>
    );
}
