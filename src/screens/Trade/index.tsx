import { useNavigation } from "@react-navigation/native";
import { ChartByPeriod } from "../../components/ChartByPeriod";
import { InfoAndStatus } from "../../components/InfoAndStatus";
import { infoAndStatusData } from "../../utils/mockData";
import { Container, 
    TradeHeaderContainer, 
    TradeHeaderPercentage, 
    TradeHeaderValueAndYear, 
    TradeHeaderValuesContainer,
    InfoAndStatusContainer,
    InfoAndStatusTitle, 
    InfoAndStatusData,
    YourPortfolioContainer,
    YourPortfolioHeaderInfoContainer,
    YourPortfolioValueAndLastPurchaseContainer,
    LastPurchaseText,
    BottomButtonsContainer,
    BottomButton,
    TextSellButton,
    TextRetireCreditsButton,
    BottomMessage,
    BottomInfo,
    BuyButton,
    TextBuyButton} from "./styles";
import Toast from 'react-native-toast-message';    

export function Trade(){

    const navigation = useNavigation();

    function handleButton(message: string){
        Toast.show({
            type: 'success',
            text1: 'Uhuuu!',
            text2: message
        });        
        navigation.goBack();        
    }

    return (
        <Container contentContainerStyle={{alignItems: 'center'}}>
            <TradeHeaderContainer>
                <TradeHeaderValuesContainer>
                    <TradeHeaderValueAndYear>$18.23</TradeHeaderValueAndYear>
                    <TradeHeaderPercentage>3.51% ($1.21)</TradeHeaderPercentage>
                </TradeHeaderValuesContainer>
                <TradeHeaderValueAndYear>2022</TradeHeaderValueAndYear>
            </TradeHeaderContainer>
            <ChartByPeriod />
            <InfoAndStatusContainer>
                <InfoAndStatusTitle>Info & Status</InfoAndStatusTitle>
                <InfoAndStatusData>
                    {infoAndStatusData.map(item => (
                        <InfoAndStatus key={item.key} info={item.key} status={item.value} />
                    ))}
                </InfoAndStatusData>
            </InfoAndStatusContainer>
            <YourPortfolioContainer>
                <InfoAndStatusTitle>Your Portfolio</InfoAndStatusTitle>
                <YourPortfolioHeaderInfoContainer>
                    <TradeHeaderValuesContainer>
                        <TradeHeaderValueAndYear>18 credits</TradeHeaderValueAndYear>
                        <TradeHeaderPercentage>8.41%</TradeHeaderPercentage>
                    </TradeHeaderValuesContainer>
                    <YourPortfolioValueAndLastPurchaseContainer>
                        <TradeHeaderValueAndYear>$ 328.14</TradeHeaderValueAndYear>
                        <LastPurchaseText>Last purchase 28d ago</LastPurchaseText>
                    </YourPortfolioValueAndLastPurchaseContainer>
                </YourPortfolioHeaderInfoContainer>
                <BottomButtonsContainer>
                    <BottomButton onPress={() => handleButton('Congratulations for your sell')} callToAction={false}>
                        <TextSellButton>Sell</TextSellButton>
                    </BottomButton>
                    <BottomButton callToAction={true}>
                        <TextRetireCreditsButton>Retire Credits</TextRetireCreditsButton>
                    </BottomButton>
                </BottomButtonsContainer>
                <BottomMessage>
                    You’ve previously retired 28 credits of this asset
                </BottomMessage>
                <BottomInfo>
                    Please note that prices are for reference only and may vary at the time of excecuting a buy or sell order. {'\n'} 
                    The information provided is not investment advice, and should not be used as a recommendation to buy or sell assets.
                </BottomInfo>
                <BuyButton onPress={() => handleButton('Congratulations for your buy')}>
                    <TextBuyButton>
                        Buy
                    </TextBuyButton>
                </BuyButton>
            </YourPortfolioContainer>            
        </Container>
    )
}