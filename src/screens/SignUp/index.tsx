import { useState } from "react";
import { Container, Title, SignupMessage, ClickableSignupMessage, CheckboxContainer } from "./styles";
import { TextInputWithLabel } from "../../components/TextInputWithLabel";
import { PrimaryButton } from "../../components/PrimaryButton";
import Checkbox from 'expo-checkbox';
import {useNavigation} from '@react-navigation/native';

export function SignUp(){

    const [boxChecked, setBoxChecked] = useState(false);

    return (
        <Container>
            <Title>
                Create your account
            </Title>
            <TextInputWithLabel label="First Name" placeholder="Joe" />
            <TextInputWithLabel label="Last Name" placeholder="Smith" />
            <TextInputWithLabel label="Email" placeholder="joe.smith@crb" />
            <TextInputWithLabel label="Password" placeholder="Minimum 8 characters" />

            <CheckboxContainer>
                <Checkbox value={boxChecked} onValueChange={setBoxChecked} />
                <SignupMessage>
                    I am over 18 years of age and I have read and agree to the 
                    Terms of Service and Privacy policy.
                </SignupMessage>
            </CheckboxContainer>

            <PrimaryButton text="Create Account" />
            <SignupMessage>
                Already have an account? <ClickableSignupMessage>Log in Here</ClickableSignupMessage> here
            </SignupMessage>
        </Container>
    )
}