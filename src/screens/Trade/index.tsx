import { ChartByPeriod } from "../../components/ChartByPeriod";
import { Container, TradeHeaderContainer, TradeHeaderPercentage, TradeHeaderValueAndYear, TradeHeaderValuesContainer } from "./styles";

export function Trade(){
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
        </Container>
    )
}