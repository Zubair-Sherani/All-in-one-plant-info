
import { Text, View, Dimensions, StyleSheet, TextInput, Pressable, TouchableOpacity } from 'react-native';
import Svg, { Image } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// import { SocialIcon } from 'react-native-elements'

export default function Signup() {
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
                    <Text style={styles.title}>Sign Up</Text>
                </View>
                <View style={styles.flexItem}>
                    <View style={styles.inputBox}>
                        <Icon name="user" size={30} color="black" />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Full Name"
                            placeholderTextColor="black"
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <MatIcon name="email" size={30} color="black" />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Email"
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
                    <View style={styles.inputBox}>
                        <Icon name="key" size={30} color="black" />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            placeholderTextColor="black"
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <Pressable style={styles.button} >
                            <Text style={styles.text}>Sign Up</Text>
                        </Pressable>
                    </View>
                    <TouchableOpacity>
                        <Pressable >
                            <Text style={styles.signup}>Already have an account?</Text>
                        </Pressable>
                    </TouchableOpacity>
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


