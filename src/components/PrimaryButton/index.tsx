import { Container, TextButton } from "./styles";
import { TouchableOpacityProps } from 'react-native'

interface PrimaryButtonProps extends TouchableOpacityProps {
    text: string;
}

export function PrimaryButton({ text, ...rest  }: PrimaryButtonProps){
    return (
        <Container {...rest}>
            <TextButton>
                {text}
            </TextButton>
        </Container>    
    )
}