import { Dispatch, SetStateAction } from 'react';
import { TMolitioId } from '../../common/type/TMolitioId';
import { Theme } from '@material-ui/core';
import { TFeature } from '../../common/type/TFeature';
import { TPageContent } from '../../common/type/TPageContent';
import { TError } from '../../common/type/TError';
import { TIcon } from '../../common/type/TIcon';

export type TAppContext = {
    contentCollection: Map<string, TPageContent>;
    featureCollection: Map<string, TFeature>;
    componentCollection: Map<string, React.FC<{ componentParameter: TPageContent }>>;
    errorCollection: Map<string, TError>;
    siteIconCollection: Map<string, TIcon>;
    featureIconCollection: Map<string, TIcon>;
    themeCollection: Map<string, Theme>;
};

export interface IThemeContext {
    isImageBackgroundEnabled: boolean;
    setIsImageBackgroundEnabled: Dispatch<SetStateAction<boolean>>;
    selectedTheme: Theme;
    setSelectedTheme: Dispatch<SetStateAction<Theme>>;
}

export interface ISiteContext extends TAppContext, IThemeContext {
    molitioId: TMolitioId;
}
