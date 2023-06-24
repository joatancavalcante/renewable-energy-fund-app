import { Container, Input, Label } from "./styles";

interface TextInputWithLabelProps {
    label: string;
    placeholder: string;
}

export function TextInputWithLabel({ label, placeholder  }: TextInputWithLabelProps){
    return (
        <Container>
            <Label>
                {label}
            </Label>
            <Input
                placeholder={placeholder}
            />
        </Container>    
    )
}