import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/button';
import Game from './src/components/game';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.vertical}> 
        <Game/>
      </View>    
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
  vertical: {

  },
  horizontal: {
    flexDirection: 'row'
  }
});
