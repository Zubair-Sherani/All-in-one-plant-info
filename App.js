import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import styles from './Style';
import Svg, { Image } from 'react-native-svg';
import Home from './Screens/Home';

export default function App() {
  const { width, height } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}