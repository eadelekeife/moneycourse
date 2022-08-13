import React, { useState } from 'react';

import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
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
            <View>
                <Image style={styles.image} source={require('../assets/other/cards.png')} />
                <View style={styles.contain}>
                    <Text style={styles.splashMainText}>Easy banking, easy life</Text>
                    <Text style={styles.splashText}>We make life easy for everyone with cash discount to pay for household and monthly bills. No
                        longer would you struggle. When users shop on konnect.</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('LogIn')}>
                        <Text style={styles.actionButton}>Get Started</Text>
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
        flex: 1
    },
    contain: {
        paddingHorizontal: 5
    },
    image: {
        width: '100%',
        height: 650
    },
    splashMainText: {
        fontSize: 35,
        width: '50%',
        fontFamily: 'Space-Grotesk Bold',
        marginBottom: 5
    },
    splashText: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Space-Grotesk Regular',
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
})

export default Splash;