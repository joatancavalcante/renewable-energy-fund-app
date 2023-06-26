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
    TextRetireCreditsButton} from "./styles";
import Toast from 'react-native-toast-message';    

export function Trade(){

    const navigation = useNavigation();

    function handleSell(){
        Toast.show({
            type: 'success',
            text1: 'Uhuuu!',
            text2: 'Congratulations for your sell!'
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
                    <BottomButton onPress={handleSell} callToAction={false}>
                        <TextSellButton>Sell</TextSellButton>
                    </BottomButton>
                    <BottomButton callToAction={true}>
                        <TextRetireCreditsButton>Retire Credits</TextRetireCreditsButton>
                    </BottomButton>
                </BottomButtonsContainer>
            </YourPortfolioContainer>            
        </Container>
    )
}