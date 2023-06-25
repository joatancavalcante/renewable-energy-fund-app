import { useState } from "react";
import { Container, Title, SignupMessage, ClickableSignupMessage, CheckboxContainer } from "./styles";
import { TextInputWithLabel } from "../../components/TextInputWithLabel";
import { PrimaryButton } from "../../components/PrimaryButton";
import Checkbox from 'expo-checkbox';
import {useNavigation} from '@react-navigation/native';
import { KeyboardAvoidingView, Platform } from "react-native";

export function SignUp(){

    const navigation = useNavigation();

    const [boxChecked, setBoxChecked] = useState(false);

    function handleBackToSignin(){
        navigation.goBack();     
    }

    return (
        <KeyboardAvoidingView  style={{ flex: 1}} behavior={(Platform.OS === 'ios') ? "padding" : null}>
            <Container contentContainerStyle={{alignItems: 'center'}}>
                <Title>
                    Create your account
                </Title>
                <TextInputWithLabel label="First Name" placeholder="Joe" />
                <TextInputWithLabel label="Last Name" placeholder="Smith" />
                <TextInputWithLabel 
                    label="Email" 
                    placeholder="joe.smith@crb" 
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TextInputWithLabel label="Password" secureTextEntry={true} placeholder="Minimum 8 characters" />

                <CheckboxContainer>
                    <Checkbox value={boxChecked} onValueChange={setBoxChecked} />
                    <SignupMessage>
                        I am over 18 years of age and I have read and agree to the 
                        Terms of Service and Privacy policy.
                    </SignupMessage>
                </CheckboxContainer>

                <PrimaryButton disabled={!boxChecked} onPress={handleBackToSignin} text="Create Account" />
                <SignupMessage>
                    Already have an account? <ClickableSignupMessage onPress={handleBackToSignin}>Log in Here</ClickableSignupMessage> here
                </SignupMessage>
            </Container>
        </KeyboardAvoidingView>
    )
}