import { styled } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin: 2px 16px;
    background-color: ${props => props.theme.colors.defaultBackground};
`;