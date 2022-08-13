import React, { useState } from 'react';

import { Image, View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import * as Fonts from 'expo-font';
import AppLoading from 'expo-app-loading';

const getFonts = () => {
    return Fonts.loadAsync({
        'Space-Grotesk Regular': require('../assets/fonts/spacegrotesk/SpaceGrotesk-Regular.otf'),
        'Space-Grotesk Medium': require('../assets/fonts/spacegrotesk/SpaceGrotesk-Medium.otf'),
        'Space-Grotesk Bold': require('../assets/fonts/spacegrotesk/SpaceGrotesk-Bold.otf'),
        'Space-Grotesk Light': require('../assets/fonts/spacegrotesk/SpaceGrotesk-Light.otf'),
    })
}

const Splash = props => {
    const [fontLoading, setFontLoading] = useState(false);
    if (fontLoading) {
        return (
            <View style={styles.mainTab}>
                <View style={styles.contain}>
                    <Text style={styles.borderDiv}></Text>
                    <Text style={styles.splashMainText}>Hello there</Text>
                    <Text style={styles.splashText}>We make life easy for everyone with cash discount to pay for household and monthly bills. No
                        longer would you struggle. When users shop on konnect.</Text>
                    <TextInput
                    placeholder="Enter email address"
                    style={styles.textInput} />
                </View>
                <View style={styles.actionBar}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Homepage')}>
                        <Text style={styles.actionButton}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontLoading(true)}
                onError={() => console.log('an error occurred')}
            />
        )
    }
}

const styles = StyleSheet.create({
    mainTab: {
        position: 'relative',
        flex: 1
    },
    contain: {
        paddingHorizontal: 5
    },
    borderDiv: {
        borderStyle: 'solid',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'red',
        height: 80,
        width: 80,
        marginTop: 100
    },
    splashMainText: {
        fontSize: 30,
        width: '50%',
        fontFamily: 'Space-Grotesk Bold',
        marginBottom: 5
    },
    splashText: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Space-Grotesk Regular',
        marginBottom: 20
    },
    actionBar: {
        position: 'absolute',
        bottom: 10,
        paddingHorizontal: 10,
        width: '100%'
    },
    actionButton: {
        backgroundColor: '#1A1A1A',
        paddingVertical: 20,
        fontFamily: 'Space-Grotesk Regular',
        width: '100%',
        color: '#fff',
        borderRadius: 50,
        textAlign: 'center',
        marginTop: 15,
    },
    textInput: {
        borderColor: '#CFD9E0',
        borderWidth: 1,
        borderRadius: 50,
        borderStyle: 'solid',
        height: 55,
        paddingHorizontal: 10,
        fontFamily: 'Space-Grotesk Regular',
    }
})

export default Splash;