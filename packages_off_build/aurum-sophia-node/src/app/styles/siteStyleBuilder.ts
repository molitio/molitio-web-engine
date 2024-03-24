import { createStyles, makeStyles } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/styles';

export const createSiteStyle = (styleObject: any): ClassNameMap<string> => {
    const buildStyle = makeStyles(() => createStyles({ ...styleObject }));
    const style = buildStyle();
    return style;
};
