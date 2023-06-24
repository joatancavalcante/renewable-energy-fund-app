import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { BackButton } from '../components/BackButton';

const Stack = createStackNavigator();

export function AuthRoutes() {

  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="signIn"
        component={SignIn}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen 
        name="signUp"
        component={SignUp}
        options={{
          title: '',
          headerShown: true,
          headerLeft: () => (
            <BackButton />
          ),
        }}
      />
    </Stack.Navigator>
  )
}