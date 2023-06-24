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
import { Text } from "react-native";    

export function Home(){
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
            </FundsContainer>
        </Container>
    )
}