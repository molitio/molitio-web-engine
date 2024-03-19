import React from 'react';
import { useTheme, Button, Icon, createStyles, makeStyles } from '@material-ui/core';
import { siteIconCollection } from '../../services/siteIconService';
import { siteThemeCollection } from '../../services/siteThemeService';
import { useContext } from 'react';
import { Context } from '../../App';

export function ThemeButtonsComponent(): JSX.Element {
    const theme = useTheme();
    const useStyles = makeStyles(() =>
        createStyles({
            themeIcons: {
                display: 'flex',
                '& span': {
                    color: theme.palette.text.primary,
                },
            },
        }),
    );

    const componentStyle = useStyles();

    const context = useContext(Context);

    return (
        <>
            <div className={componentStyle.themeIcons}>
                <Button
                    onClick={() =>
                        context.themeContext.setSelectedTheme(
                            siteThemeCollection.themes.get('cloudsSiteTheme') || theme,
                        )
                    }
                >
                    <Icon>
                        {siteIconCollection.icons.get('cloudQueue')?.fontIcon ||
                            siteIconCollection.defaultIcon.fontIcon}
                    </Icon>
                </Button>
                <Button
                    onClick={() =>
                        context.themeContext.setSelectedTheme(siteThemeCollection.themes.get('waterSiteTheme') || theme)
                    }
                >
                    <Icon>
                        {siteIconCollection.icons.get('water')?.fontIcon || siteIconCollection.defaultIcon.fontIcon}
                    </Icon>
                </Button>
                <Button
                    onClick={() =>
                        context.themeContext.setSelectedTheme(siteThemeCollection.themes.get('sunSiteTheme') || theme)
                    }
                >
                    <Icon>
                        {siteIconCollection.icons.get('wbSunny')?.fontIcon || siteIconCollection.defaultIcon.fontIcon}
                    </Icon>
                </Button>
            </div>
        </>
    );
}
