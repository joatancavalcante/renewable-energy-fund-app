import { Container, Input, Label } from "./styles";
import { TextInputProps } from 'react-native'

interface TextInputWithLabelProps extends TextInputProps {
    label: string;
}

export function TextInputWithLabel({ label, ...rest }: TextInputWithLabelProps){
    return (
        <Container>
            <Label>
                {label}
            </Label>
            <Input {...rest}/>
        </Container>    
    )
}