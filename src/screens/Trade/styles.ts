import { styled } from "styled-components/native";

export const Container = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.theme.colors.defaultBackground};
`;

export const CustomText = styled.Text`
    
`;