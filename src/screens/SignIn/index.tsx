import { Container, Title, SignupMessage, ClickableSigninMessage } from "./styles";
import { TextInputWithLabel } from "../../components/TextInputWithLabel";
import { PrimaryButton } from "../../components/PrimaryButton";
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/actions/authAction';
import { useState } from "react";
import { Alert } from "react-native";

export function SignIn(){

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function handleSignin(){
        dispatch(loginAction(username, password));
    }

    function handleSignup(){
        navigation.navigate('signUp');
    }

    return (
        <Container>
            <Title>
                Login
            </Title>
            <TextInputWithLabel 
                label="E-mail" 
                placeholder="john@doe.com" 
                onChangeText={newText => setUsername(newText)}
                value={username}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TextInputWithLabel 
                label="Password" 
                secureTextEntry={true}
                placeholder="Minumum 8 characters" 
                onChangeText={newText => setPassword(newText)}
                value={password}
            />
            <PrimaryButton disabled={(username == '') || (password == '')} text="Login" onPress={handleSignin}/>
            <SignupMessage>
                Don't have an account? <ClickableSigninMessage onPress={handleSignup}>Sign up</ClickableSigninMessage> here
            </SignupMessage>
        </Container>
    )
}