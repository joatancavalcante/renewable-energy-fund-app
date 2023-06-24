import { ChartContent, Container, Percent, Title, Value, ValuesContainer } from './styles';
import { Image } from 'react-native';

interface FundCardProps {
    data: {
        name: string,
        icon: string,
        value: string,
        percentage: number
    }
}

export function FundCard({data}: FundCardProps) {

    return (
        <Container>
            <Image source={data.icon} style={{width: 16, height: 16}}/>
            <Title>{data.name}</Title>
            <ChartContent>

            </ChartContent>
            <ValuesContainer>
                <Value>{data.value}</Value>
                <Percent positive={data.percentage > 0}>{data.percentage.toFixed(2).toString()}%</Percent>
            </ValuesContainer>
        </Container>    
    )
}