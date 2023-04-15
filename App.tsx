
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootRoutes } from './src/routes/index';
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <RootRoutes/>
      </NavigationContainer>
      <Text>Open up App.tsx to start </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
