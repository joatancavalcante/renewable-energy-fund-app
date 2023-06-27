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

export const InfoAndStatusContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 96%;
    padding: 16px 20px; 
    margin-top: 24px;
`;

export const InfoAndStatusTitle = styled.Text`
    font-family: ${props => props.theme.fonts.semiBold};
    font-size: 20px;
    color: ${props => props.theme.colors.black};    
`;

export const InfoAndStatusData = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    padding: 12px 0px;
    gap: 18px;
    margin-top: 12px;
`;

export const YourPortfolioContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 96%;
    padding: 16px 20px; 
    margin-top: 24px;
`;

export const YourPortfolioHeaderInfoContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 24px;
`;

export const YourPortfolioValueAndLastPurchaseContainer = styled.View`
    display: flex;
    flex-direction: column; 
    align-items: flex-end;
`;

export const LastPurchaseText = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: 16px;
    color: ${props => props.theme.colors.grayText};    
`;

export const BottomButtonsContainer = styled.View`
    display: flex;   
    flex-direction: row;
    justify-content: center;
    padding: 16px 20px; 
    gap: 12px;
`;

interface BottomButtonProps {
    callToAction: boolean;
}

export const BottomButton = styled.TouchableOpacity<BottomButtonProps>`
    display: flex;
    border: ${props => props.callToAction ? '0px': '0.5px'} solid ${props => props.theme.colors.grayText};
    width: 183px;
    height: 54px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: ${props => props.callToAction ? props.theme.colors.green : props.theme.colors.defaultBackground};
`;

export const TextSellButton = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: 18px;
    color: ${props => props.theme.colors.purple500};    
`;

export const TextRetireCreditsButton = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: 18px;
    color: ${props => props.theme.colors.defaultBackground};    
`;

export const BottomMessage = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: 13px;
    color: ${props => props.theme.colors.grayText};  
`;

export const BottomInfo = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: 14px;
    color: ${props => props.theme.colors.grayText};
    background-color: ${props => props.theme.colors.gray};
    margin-vertical: 28px;  
    padding: 8px;
`;

export const BuyButton = styled.TouchableOpacity`
    display: flex;
    border: none;
    width: 100%;
    height: 64px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.purple500};
`;

export const TextBuyButton = styled.Text`
    font-family: ${props => props.theme.fonts.semiBold};
    font-size: 22px;
    color: ${props => props.theme.colors.defaultBackground};    
`;