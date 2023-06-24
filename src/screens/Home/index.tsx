import { FundCard } from "../../components/FundCard";
import { 
    ButtonEarnRewards, 
    Container, 
    PortfolioContainer, 
    PortfolioContainerContent, 
    PortfolioPrincipalValue, 
    PortfolioSecondaryValue, 
    PortfolioContainerTitle, 
    PortfolioContainerValues,
    TextButtonEarnRewards, 
    FundsContainer,
    FundsContainerTitle} from "./styles";
import { FlatList } from "react-native";    
import WindFundImg from '../../assets/wind-fund.png';
import SolarFundImg from '../../assets/solar-fund.png';
import NaturalFundImg from '../../assets/natural-fund.png';

export function Home(){

    const dataFunds = [
        {
            name: "Wind Fund",
            icon: WindFundImg,
            value: "$1032.23",
            percentage: 3.51
        },
        {
            name: "Solar Fund",
            icon: SolarFundImg,
            value: "$986.61",
            percentage: -0.13
        },
        {
            name: "Natural Fund",
            icon: NaturalFundImg,
            value: "$1122.56",
            percentage: 3.99
        },
    ]

    return (
        <Container>
            <PortfolioContainer>
                <PortfolioContainerTitle>
                    Portfolio
                </PortfolioContainerTitle>
                <PortfolioContainerContent>
                    <PortfolioContainerValues>
                        <PortfolioPrincipalValue>
                            $1,245.23
                        </PortfolioPrincipalValue>
                        <PortfolioSecondaryValue>
                            31.82%
                        </PortfolioSecondaryValue>
                    </PortfolioContainerValues>
                    <ButtonEarnRewards>
                        <TextButtonEarnRewards>
                            Earn Rewards
                        </TextButtonEarnRewards>
                    </ButtonEarnRewards>
                </PortfolioContainerContent>
            </PortfolioContainer>
            <FundsContainer>
                <FundsContainerTitle>
                    Funds
                </FundsContainerTitle>
                <FlatList 
                    data={dataFunds}
                    keyExtractor={(item) => String(item.name)}
                    renderItem={({ item }) => (
                        <FundCard 
                            data={item}                  
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    //contentContainerStyle={styles.companieList}
                />   
            </FundsContainer>
        </Container>
    )
}