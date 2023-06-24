import { Container, Title, SignupMessage, ClickableSigninMessage } from "./styles";
import { TextInputWithLabel } from "../../components/TextInputWithLabel";
import { PrimaryButton } from "../../components/PrimaryButton";
import {useNavigation} from '@react-navigation/native';

export function SignIn(){

    const navigation = useNavigation();

    function handleSignup(){
        navigation.navigate('signUp');
    }

    return (
        <Container>
            <Title>
                Login
            </Title>
            <TextInputWithLabel label="E-mail" placeholder="john@doe.com" />
            <TextInputWithLabel label="Password" placeholder="Minumum 8 characters" />
            <PrimaryButton text="Login" />
            <SignupMessage>
                Don't have an account? <ClickableSigninMessage onPress={handleSignup}>Sign up</ClickableSigninMessage> here
            </SignupMessage>
        </Container>
    )
}