import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CenterDisplay } from '@molitio/ui-core__deprecated';

const AppReleasesApp: React.FC = () => {
    return (
        <CenterDisplay>
            <iframe
                width="640"
                height="360"
                src="https://vclock.com/embed/timer/#date=2023-02-23T09:00:00&title=escape+velocity&theme=1&ampm=1&sound=happy"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </CenterDisplay>
    );
};

export default {
    title: 'molitio-core/Apps/App Releases',
    args: { pageTitle: 'Landing Page' },
    component: AppReleasesApp,
} as ComponentMeta<typeof AppReleasesApp>;

export const AppReleases: ComponentStory<typeof AppReleasesApp> = () => {
    return <AppReleasesApp />;
};

AppReleases.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/mTsfvR8TrmINWvBHHsycKb/Molitio-Design?node-id=19%3A36',
    },
    controls: { hideNoControlsWarning: true },
};
