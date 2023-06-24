import { styled } from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 140px;
    height: 165px;
    border-radius: 4px;
    gap: 8px;
    border: 1px solid ${props => props.theme.colors.cardBorder};
    padding: 12px;
    margin-right: 18px;
    border-radius: 6px;
`;

export const Title = styled.Text`
    font-family: ${props => props.theme.fonts.semiBold};
    font-size: 14px;
`;

export const ChartContent = styled.View`

`;

export const ValuesContainer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 6px;
`;

export const Value = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: 14px;
    color: ${props => props.theme.colors.black};
`;

interface PercentProps {
    positive: boolean
}

export const Percent = styled.Text<PercentProps>`
    font-family: ${props => props.theme.fonts.regular};
    font-size: 14px;
    color: ${props => props.positive ? props.theme.colors.green : props.theme.colors.red}
`;