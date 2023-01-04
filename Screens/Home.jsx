import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import Svg, { Image } from 'react-native-svg';

export default function Home() {
  const { width, height } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Svg height={height} width={width}>
          <Image href={require('../assets/login-background.jpg')} width={width} height={height} preserveAspectRatio="xMidYMid slice" />
        </Svg>
      </View>
      <View style={styles.homeContent}>
        <View style={styles.flexItem}>
          <Text style={styles.buttonText}>Get Started</Text>
        </View>
        <View style={styles.flexItem}>
          <Text style={styles.title}>All in One Plant info</Text>
        </View>
        <View style={styles.flexItem}>
          <Text style={styles.quoteText}>Find your favorite plants and
            use Image Processing tools </Text>
        </View>
        <View style={styles.flexItem}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    homeContent: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    flexItem: {
      marginVertical: '18%',
    }, 
    button: {
      backgroundColor: '#004F44',
      height: 55,
      paddingHorizontal: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginHorizontal: 20,
      marginVertical: 10,
      borderWidth: 1,
      borderColor: "white", 
    },
    buttonText: {
      fontSize: '20px',
      fontWeight: '600',
      color: 'white',
  
    },
    quoteText: {
      fontSize: '20px',
      fontWeight: '600',
      color: 'white',
      marginHorizontal: '19%',
      textAlign: 'center'
    },
    title: {
      fontSize: '40px',
      fontWeight: '600',
      color: 'white',
      marginHorizontal: '19%',
      textAlign: 'center'
    }
  });
  

