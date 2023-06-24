import { Feather } from '@expo/vector-icons';
import { Container } from './styles';

export function BellButton(){

    function handleLogout(){
        console.log('bell')
    }

    return (
        <Container onPress={handleLogout}>
            <Feather name="bell" size={32} color="black" />
        </Container>    
    )
}