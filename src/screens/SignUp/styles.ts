import { styled } from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    flex-direction: column;
    background-color: ${props => props.theme.colors.defaultBackground};    
    padding-top: 36px;
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

export const ClickableSignupMessage = styled.Text`
    color: ${props => props.theme.colors.grayText};
    font-size: 12px;
    font-family: ${props => props.theme.fonts.regular};
    text-decoration-line: underline;
`;

export const CheckboxContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 310px;  
    margin-vertical: 12px;  
`;