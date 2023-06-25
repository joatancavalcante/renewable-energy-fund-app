import 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles/theme';
import { useFonts, Sora_400Regular, Sora_600SemiBold } from '@expo-google-fonts/sora';
import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({ Sora_400Regular, Sora_600SemiBold });

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <View style={styles.container}>
          {fontsLoaded ? <Routes /> : <ActivityIndicator />}
          <StatusBar style="auto" />
        </View>
      </Provider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.defaultBackground,
  },
});
