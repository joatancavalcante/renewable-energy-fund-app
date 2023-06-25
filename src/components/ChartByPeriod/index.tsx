import { useState } from "react";
import { theme } from "../../styles/theme";
import { chartDataPerPeriod, chartData } from "../../utils/mockData";
import { Container, SelectPeriodButton, SelectPeriodContainer, TextButton, TextPeriodButton } from "./styles";
import { Chart, Line } from 'react-native-responsive-linechart'

export function ChartByPeriod(){

    const [selectedPeriod, setSelectedPeriod] = useState<string>('1h');
    const [selectedChartData, setSelectedChartData] = useState<{}[]>(chartData);

    function handleSelectPeriod(period: string){
        setSelectedPeriod(period);

        const newChartPeriod = chartDataPerPeriod.find(item => item.period == period);
        setSelectedChartData(newChartPeriod?.data);
    }

    return (
        <Container>
            
                <Chart
                    style={{ height: 164, width: '100%' }}
                    data={selectedChartData}
                    padding={{ left: 0, bottom: 8, right: 0, top: 8 }}                
                >                
                    <Line theme={{ stroke: { color: theme.colors.green, width: 3 } }} />
                </Chart>
                <SelectPeriodContainer>
                    {chartDataPerPeriod.map(item => (
                        <SelectPeriodButton onPress={() => handleSelectPeriod(item.period)} key={item.period} selected={item.period === selectedPeriod}>
                            <TextPeriodButton selected={item.period === selectedPeriod}>
                                {item.period}
                            </TextPeriodButton>
                        </SelectPeriodButton>
                    ))}
                </SelectPeriodContainer>
        </Container>
    )
}