import { ChartContent, Container, Percent, Title, Value, ValuesContainer } from './styles';
import { Image } from 'react-native';
import { theme } from '../../styles/theme';
import { Chart, Line } from 'react-native-responsive-linechart'
import { charData } from '../../utils/mockData';

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
                <Chart
                    style={{ height: 60, width: 120 }}
                    data={charData}
                    padding={{ left: 0, bottom: 0, right: 4, top: 0 }}                
                >                
                    <Line theme={{ stroke: { color: data.percentage > 0 ? theme.colors.green : theme.colors.red, width: 3 } }} />
                </Chart>
            </ChartContent>
            <ValuesContainer>
                <Value>{data.value}</Value>
                <Percent positive={data.percentage > 0}>{data.percentage.toFixed(2).toString()}%</Percent>
            </ValuesContainer>
        </Container>    
    )
}