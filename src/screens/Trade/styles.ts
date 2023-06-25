import { styled } from "styled-components/native";

export const Container = styled.ScrollView`
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: ${props => props.theme.colors.defaultBackground};
`;

export const TradeHeaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    padding: 16px 20px;    
`;

export const TradeHeaderValuesContainer = styled.View`
    display: flex;
    flex: 1;
    flex-direction: column; 
`;

export const TradeHeaderValueAndYear = styled.Text`
    font-family: ${props => props.theme.fonts.semiBold};
    font-size: 28px;
    color: ${props => props.theme.colors.black};    
`;

export const TradeHeaderPercentage = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: 16px;
    color: ${props => props.theme.colors.green};    
`;