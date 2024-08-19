import styled from 'styled-components';
import Image from 'next/image';

export const StyledContactInfoLogoContainer = styled.div`
    position: relative;
    height: 12em;
    width: 12em;
    margin: auto;
`;

export const StyledContactInfoLogoImage = styled(Image)`
    object-fit: cover;
`;
