
import { Text, View, Dimensions, StyleSheet, TextInput, Pressable } from 'react-native';
import Svg, { Image } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { SocialIcon } from 'react-native-elements'

export default function Login() {
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
                    <Text style={styles.title}>Login</Text>
                </View>
                <View style={styles.flexItem}>
                    <View style={styles.inputBox}>
                        <Icon name="user" size={30} color="black" />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Username"
                            placeholderTextColor="black"
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <Icon name="key" size={30} color="black" />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Password"
                            placeholderTextColor="black"
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <Pressable style={styles.button} >
                            <Text style={styles.text}>Login</Text>
                        </Pressable>
                    </View>

                    <Pressable >
                        <Text style={styles.signup}>Don't have an account?</Text>
                    </Pressable>
                </View>
                {/* <View style={styles.flexItem}>
                    <SocialIcon
                        title='Sign In With Facebook'
                        button
                        type='facebook'
                    />
                </View> */}
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
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 6,
        borderRadius: 10,
        backgroundColor: '#004F44',
    },
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: '600',
        letterSpacing: 0.25,
        color: 'white',
    },
    buttonView: {
        marginTop: 20
    },
    title: {
        fontSize: '40px',
        fontWeight: '600',
        color: 'white',
        marginHorizontal: '19%',
        textAlign: 'center'
    },

    inputBox: {
        flexDirection: 'row',
        backgroundColor: "white",
        padding: 8,
        borderRadius: 6,
        marginVertical: 10
    },
    input: {
        color: 'black',
        paddingLeft: 10,
        width: 223
    },
    signup: {
        color: "white",
        fontSize: 17,
        textAlign: "center",
        marginTop: 19
    }
});


