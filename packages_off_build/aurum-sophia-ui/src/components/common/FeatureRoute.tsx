import React from 'react';
import { Route } from 'react-router-dom';
import { AppContext } from '../../services/siteDefaultsService';
import { IFeatureRouteProps } from './interface/IFeatureRouteProps';

export const FeatureRoute: React.FC<IFeatureRouteProps> = ({ siteFeature, siteComponent }: IFeatureRouteProps) => {
    const context = React.useContext(AppContext);

    /*
    context.routeEnabled(siteFeature) ?

    context.getComponentForFeature(siteFeature)
    */

    return (
        <Route key={siteFeature.id} exact path={siteFeature.path}>
            {siteComponent}
        </Route>
    );
};
