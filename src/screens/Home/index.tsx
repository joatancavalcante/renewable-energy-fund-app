import { FundCard } from "../../components/FundCard";
import { fundData } from "../../utils/mockData";
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
    FundsContainerTitle,
    BannerContent,
    TextBannerContainer,
    TitleBanner,
    SubtitleBanner,
    InvestmentReasonsContent} from "./styles";
import { FlatList, Image, View } from "react-native";  
import BannerImg from '../../assets/banner-image.png';  
import { InvestmentReasonsBanner } from "../../components/ReasonInvestmentBanner";

export function Home(){

    const dataFunds = fundData;

    return (
        <Container contentContainerStyle={{alignItems: 'center'}}>
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
                />   
            </FundsContainer>
            <BannerContent>
                <TextBannerContainer>
                    <TitleBanner>Learn more about carbon credits</TitleBanner>
                    <SubtitleBanner>Check out our top tips!</SubtitleBanner>
                </TextBannerContainer>
                <Image source={BannerImg} style={{width: 94, height: 87}}/>
            </BannerContent>
            <InvestmentReasonsContent>
                <InvestmentReasonsBanner />
                <InvestmentReasonsBanner />
            </InvestmentReasonsContent>
        </Container>
    )
}