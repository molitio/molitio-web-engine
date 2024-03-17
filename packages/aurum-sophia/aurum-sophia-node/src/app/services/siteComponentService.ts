import { AboutPage } from '../pages/AboutPage';
import { ActualsPage } from '../pages/ActualsPage';
import { ContactPage } from '../pages/ContactPage';
import { ConnectPage } from '../pages/ConnectPage';
import { EventsPage } from '../pages/EventsPage';
import { TPageContent } from 'components/common/type/TPageContent';
import React from 'react';

// consider dynamic module loading from library

export const getSiteFeatureComponents = (): Map<string, React.FC<{ componentParameter: TPageContent }>> =>
    new Map<string, React.FC<{ componentParameter: TPageContent }>>([
        ['actuals', ActualsPage],
        ['about', AboutPage],
        ['events', EventsPage],
        ['connect', ConnectPage],
        ['contact', ContactPage],
    ]);
