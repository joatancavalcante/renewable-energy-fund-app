import { Ionicons } from '@expo/vector-icons';
import { Container } from './style';
import { useNavigation } from '@react-navigation/native';

export function BackButton(){

    const navigation = useNavigation();

    function handleBackButton(){
        navigation.goBack();
    }

    return (
        <Container onPress={handleBackButton}>
            <Ionicons name="arrow-back-outline" size={32} color="black" />
        </Container>    
    )
}