import { styled } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: ${props => props.theme.colors.defaultBackground};
    align-items: center;
    padding-top: 136px;
`;

export const Title = styled.Text`
    color: ${props => props.theme.colors.black};
    font-size: 24px;
    font-family: ${props => props.theme.fonts.semiBold};
    margin-bottom: 48px;
`;

export const SignupMessage = styled.Text`
    color: ${props => props.theme.colors.grayText};
    font-size: 12px;
    font-family: ${props => props.theme.fonts.regular};
`;

export const ClickableSigninMessage = styled.Text`
    color: ${props => props.theme.colors.grayText};
    font-size: 12px;
    font-family: ${props => props.theme.fonts.regular};
    text-decoration-line: underline;
`;

