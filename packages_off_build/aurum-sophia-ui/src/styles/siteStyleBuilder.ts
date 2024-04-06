import { createStyles, makeStyles, StyleRules } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/styles';

export const createSiteStyle = (styleObject: StyleRules<string>): ClassNameMap<string> => {
    const buildStyle = makeStyles(() => createStyles({ ...styleObject }));
    const style = buildStyle();

    return style;
};
