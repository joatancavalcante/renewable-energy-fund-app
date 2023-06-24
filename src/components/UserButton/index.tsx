import { AntDesign } from '@expo/vector-icons';
import { Container } from './styles';

export function UserButton(){

    function handleLogout(){
        console.log('logout')
    }

    return (
        <Container onPress={handleLogout}>
            <AntDesign name="user" size={32} color="black" />
        </Container>    
    )
}