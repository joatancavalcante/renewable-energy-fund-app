import { styled } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 344px;
    height: 60px;
    border-radius: 4px;
    padding: 4px;
    background-color: ${props => props.theme.colors.purple500};
    margin-top: 28px;
    margin-bottom: 12px;
`;

export const TextButton = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: 16px;
    color: ${props => props.theme.colors.defaultBackground};
    font-family: ${props => props.theme.fonts.regular};
`;