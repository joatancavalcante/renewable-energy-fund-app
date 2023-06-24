import { styled } from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    margin-bottom: 12px;
`;

export const Label = styled.Text`
    font-family: ${props => props.theme.fonts.semiBold};
    font-size: 14px;
    color: ${props => props.theme.colors.grayText};
    font-family: ${props => props.theme.fonts.regular};
    margin-bottom: 4px;
`;

export const Input = styled.TextInput`
    border-radius: 4px;
    background-color: ${props => props.theme.colors.gray};
    padding: 12px 8px;
    width: 344px;
    height: 60px;
    font-family: ${props => props.theme.fonts.regular};
    font-size: 16px;
`;