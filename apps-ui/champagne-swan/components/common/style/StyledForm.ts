import styled from 'styled-components';
import { Form } from 'formik';

type StyledFormProps = {
    position?: string;
    margin?: string;
};

export const StyledForm = styled(Form)<StyledFormProps>`
    position: ${(props) => props.position || 'relative'};
    margin: ${(props) => props.margin || '0 0 0 0'};
    display: flex;
    flex-direction: column;
`;
export const StyledSelectForm = styled.form<StyledFormProps>`
    position: ${(props) => props.position || 'relative'};
    margin: ${(props) => props.margin || '0 0 0 0'};
    display: flex;
    flex-direction: column;
`;
