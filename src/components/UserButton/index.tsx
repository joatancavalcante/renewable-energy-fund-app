import { AntDesign } from '@expo/vector-icons';
import { Container } from './styles';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/actions/authAction';

export function UserButton(){

    const dispatch = useDispatch();

    function handleLogout(){
        dispatch(logoutAction());
    }

    return (
        <Container onPress={handleLogout}>
            <AntDesign name="user" size={32} color="black" />
        </Container>    
    )
}