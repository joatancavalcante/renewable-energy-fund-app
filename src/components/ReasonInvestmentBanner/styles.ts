import { styled } from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    width: 170px;
    height: 235px;
    background-color: ${props => props.theme.colors.gray};
    border-radius: 10px;
    padding: 10px;
`;

export const Title = styled.Text`
    font-family: ${props => props.theme.fonts.semiBold};
    font-size: 16px;
    color: ${props => props.theme.colors.black};
`;