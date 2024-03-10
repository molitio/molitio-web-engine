import { useContext } from 'react';
import styled, { css } from 'styled-components';
import { SystemContext } from '../../ui-common';
import { Dimensions } from '../../ui-common/types';

type StyledPageProps = {
    dimensions?: Dimensions;
};

export const StyledPage = styled.section<StyledPageProps>((props) => {
    const context = useContext(SystemContext);

    return props?.dimensions?.minHeight
        ? css`
              min-height: ${props?.dimensions?.minHeight};
          `
        : css`
              min-height: calc(
                  100vh - ${context?.theme?.dimensions?.header?.height} - ${context?.theme?.dimensions?.footer?.height}
              );
          `;
});
