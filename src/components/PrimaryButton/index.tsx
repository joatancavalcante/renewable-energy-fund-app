import { Container, TextButton } from "./styles";

interface PrimaryButtonProps {
    text: string;
}

export function PrimaryButton({ text  }: PrimaryButtonProps){
    return (
        <Container>
            <TextButton>
                {text}
            </TextButton>
        </Container>    
    )
}