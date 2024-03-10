import styled from 'styled-components';

export const StyledServicesPage = styled.div`
    background-color: ${(props) => props?.theme?.palette?.background?.inverse};
    min-height: ${(props) => props?.theme?.dimensions?.page.height};
`;
