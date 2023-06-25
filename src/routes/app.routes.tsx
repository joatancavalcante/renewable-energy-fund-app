import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BackButton } from '../components/BackButton';
import { Home } from '../screens/Home';
import { Trade } from '../screens/Trade';
import { Portfolio } from '../screens/Portfolio';
import { UserButton } from '../components/UserButton';
import { BellButton } from '../components/BellButton';
import { Entypo, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { theme } from '../styles/theme';


const Tab = createBottomTabNavigator();

export function AppRoutes() {

  return (
    <Tab.Navigator screenOptions={
      { 
        headerShown: true, 
        tabBarActiveTintColor: theme.colors.purple500, 
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {height: 100},
        headerStyle: {height: 124},
        headerTitleStyle: {fontFamily: 'Sora_600SemiBold', fontSize: 16},
        tabBarLabelStyle: {fontFamily: 'Sora_400Regular', fontSize: 12}
      }
    }>
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerLeft: () => (
            <UserButton />
          ),
          headerRight: () => (
            <BellButton />
          ),
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={32} color={color} />
          )
        }}
      />

      <Tab.Screen 
        name="Trade"
        component={Trade}
        options={({ route }) => ({          
          headerShown: true,
          headerTitle: route.params?.headerTitleParam,
          headerLeft: () => (
            <BackButton />
          ),
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="arrow-left-right" size={32} color={color} />
          )
        })}
      />

      <Tab.Screen 
        name="Portfolio"
        component={Portfolio}
        options={{
          headerShown: true,
          tabBarIcon: ({color}) => (
            <SimpleLineIcons name="pie-chart" size={32} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}