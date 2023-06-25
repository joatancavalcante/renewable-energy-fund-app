import { styled } from "styled-components/native";

export const Container = styled.View`
    display: flex;
    height: 42px;
    width: 118px;
    gap: 6px;
    margin-right: 12px;
`;

export const Info = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: 16px;
    color: ${props => props.theme.colors.grayText};    
`;

export const Status = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: 16px;
    color: ${props => props.theme.colors.black};    
`;
