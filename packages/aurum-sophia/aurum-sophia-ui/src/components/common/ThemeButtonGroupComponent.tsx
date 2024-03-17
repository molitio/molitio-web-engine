import React from 'react';
import { AppContext } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { ThemeButton } from './ThemeButton';

export const ThemeButtonGroupComponent: React.FC = () => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const componentStyle = createSiteStyle({
        themeIcons: {
            display: 'flex',
            '& span': {
                color: theme.palette.text.primary,
            },
        },
    });

    return (
        <>
            <div className={componentStyle.themeIcons}>
                {Array.from([...context.themeCollection.entries()])
                    .filter((theme) => theme[1].isEnabled)
                    .map((theme) => (
                        <ThemeButton key={theme[0]} themeName={theme[0]} />
                    ))}
            </div>
        </>
    );
};
