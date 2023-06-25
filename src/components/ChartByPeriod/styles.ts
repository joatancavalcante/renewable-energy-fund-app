import { styled } from "styled-components/native";

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.defaultBackground};
    width: 100%;
`;

export const SelectPeriodContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 16px 8px;
`;

interface SelectPeriodButtonProps {
    selected: boolean;
}

export const SelectPeriodButton = styled.TouchableOpacity<SelectPeriodButtonProps>`
    padding: 12px 16px;
    margin: 0 8px;
    border-radius: 4px;
    background-color: ${props => props.selected ? props.theme.colors.purple100 : props.theme.colors.defaultBackground };
`;

export const TextPeriodButton = styled.Text<SelectPeriodButtonProps>`
    font-family: ${props => props.theme.fonts.regular};
    font-size: 18px;
    color: ${props => props.selected ? props.theme.colors.purple500 : props.theme.colors.grayText}
`;
