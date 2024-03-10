import styled from 'styled-components';

type GroupSVGProps = {
    isVisible?: boolean;
};

export const GroupSVG = styled.g<GroupSVGProps>`
    visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
`;
