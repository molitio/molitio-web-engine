import styled, { css } from 'styled-components';
import { ComponentCollectionTags } from '../../ui-style-service';
import { ComponentGroupingOptions } from '../types';

type StyledComponentGroupProps = {
    groupingType?: ComponentCollectionTags;
    groupingOptions?: ComponentGroupingOptions;
};

export const StyledComponentGroup = styled.div<StyledComponentGroupProps>`
    height: ${(props) => props?.groupingOptions?.dimensions?.height};
    width: ${(props) => props?.groupingOptions?.dimensions?.width};
    gap: ${(props) => props?.groupingOptions?.itemGap};
    color: ${(props) => props?.groupingOptions?.fontColor};
    font-size: ${(props) => props?.groupingOptions?.fontSize};
    padding: ${(props) => props?.groupingOptions?.itemPadding};
    margin: ${(props) => props?.groupingOptions?.margin};
    margin-top: ${(props) => props?.groupingOptions?.marginTop};
    margin-right: ${(props) => props?.groupingOptions?.marginRight};
    margin-bottom: ${(props) => props?.groupingOptions?.marginBottom};
    margin-left: ${(props) => props?.groupingOptions?.marginLeft};
    background-color: 'rgba(0, 0, 0, 0.0)',
        ${(props) => {
            switch (props?.groupingType) {
                case ComponentCollectionTags.GRID:
                    return css``;
                case ComponentCollectionTags.VERTICAL_FLEX:
                    return css`
                        height: 100%;
                        justify-content: ${props?.groupingOptions?.justifyContent};
                        align-content: center;
                        & > *: {
                            width: ${props?.groupingOptions?.dimensions?.width};
                            padding: ${props?.groupingOptions?.itemPadding};
                        }
                    `;
                case ComponentCollectionTags.HORIZONTAL_FLEX:
                    return css`
                    width: 100%;
                    justify-content: ${props?.groupingOptions?.justifyContent};
                    align-content: center;
                    text-align: center;
                    & > *: {
                        align-items: center;
                    },
                `;
                default:
                    return css``;
            }
        }};
`;
