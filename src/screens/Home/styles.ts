import { styled } from "styled-components/native";

export const Container = styled.ScrollView`
    display: flex;
    flex: 1;
    height: 100%;
    
    flex-direction: column;
    background-color: ${props => props.theme.colors.defaultBackground};
`;

export const PortfolioContainer = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 116px;
    padding: 16px 20px;
    gap: 8px;
    border-bottom-style: solid;
    border-bottom-color: ${props => props.theme.colors.gray};
    border-bottom-width: 1px;
`;

export const PortfolioContainerTitle = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: 16px;
    color: black;
`;

export const PortfolioContainerContent = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const PortfolioContainerValues = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 8px;
`;

export const PortfolioPrincipalValue = styled.Text`
    font-family: ${props => props.theme.fonts.semiBold};
    font-size: 24px;
    color: black;    
`;

export const PortfolioSecondaryValue = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: 14px;
    color: ${props => props.theme.colors.green};
    padding-bottom: 2px;
`;

export const ButtonEarnRewards = styled.TouchableOpacity`
    padding: 8px 12px;
    background-color: ${props => props.theme.colors.purple100}; 
    border-radius: 4px; 
`;

export const TextButtonEarnRewards = styled.Text`
    font-family: ${props => props.theme.fonts.semiBold};
    color: ${props => props.theme.colors.purple500};
    font-size: 12px;
`;

export const FundsContainer = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 16px 0px 16px 20px;
    gap: 8px;
`;

export const FundsContainerTitle = styled.Text`
    font-family: ${props => props.theme.fonts.semiBold};
    font-size: 20px;
    color: black;
    margin-bottom: 12px;
`;

export const BannerContent = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 125px;
    width: 354px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.purple500};
    padding: 22px;    
`;

export const TextBannerContainer = styled.View`
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 190px;
    gap: 12px
`

export const TitleBanner = styled.Text`
    font-family: ${props => props.theme.fonts.semiBold};
    font-size: 20px;
    color: ${props => props.theme.colors.defaultBackground};
`

export const SubtitleBanner = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: 16px;
    color: ${props => props.theme.colors.defaultBackground};
`

export const InvestmentReasonsContent = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 190px;
    gap: 12px;
    margin-vertical: 18px;
`;