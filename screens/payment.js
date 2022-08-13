import React, { useState } from 'react';

import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import * as Fonts from 'expo-font';
import AppLoading from 'expo-app-loading';

import { Ionicons, AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';

const getFonts = () => {
    return Fonts.loadAsync({
        'Space-Grotesk Regular': require('../assets/fonts/spacegrotesk/SpaceGrotesk-Regular.otf'),
        'Space-Grotesk Medium': require('../assets/fonts/spacegrotesk/SpaceGrotesk-Medium.otf'),
        'Space-Grotesk Bold': require('../assets/fonts/spacegrotesk/SpaceGrotesk-Bold.otf'),
        'Space-Grotesk Light': require('../assets/fonts/spacegrotesk/SpaceGrotesk-Light.otf'),
    })
}

const Payment = props => {
    const [fontLoading, setFontLoading] = useState(false);
    if (fontLoading) {
        return (
            <View style={styles.mainTab}>
                <View style={{ flex: 1, backgroundColor: '#e4e4e4', position: 'relative' }}>
                    <View style={[styles.header, styles.contain, styles.grid_flex]}>
                        <View style={styles.grid_flex}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Homepage')}>
                                <AntDesign name="arrowleft" size={24} color="black" />
                            </TouchableOpacity>
                            <Text style={styles.pageTitle}>New Transaction</Text>
                        </View>
                        <Entypo name="bell" size={24} color="black" />
                    </View>
                    <View style={[styles.contain]}>
                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.categoryTitle}>Select payment category</Text>
                            <View style={styles.tagBox}>
                                <Text style={styles.tag}>religious</Text>
                                <Text style={styles.tag}>fashion</Text>
                                <Text style={styles.tag}>education</Text>
                                <Text style={styles.tag}>money</Text>
                                <Text style={styles.tag}>technology</Text>
                                <Text style={styles.tag}>finance</Text>
                                <Text style={styles.tag}>religious</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.textArea}>
                        <Text style={styles.label}>Enter your amount</Text>
                        <Text style={styles.formAmount}>NGN 6,000.00</Text>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <VirtualKeyboard
                        pressMode='string' onPress={(val) => (
                            // this.changeText(val)
                            console.log(val)
                        )} />
                    <View style={styles.contain}>
                        <TouchableOpacity>
                            <Text style={styles.actionButton}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottomSheet}>
                    <View>
                        <View style={[styles.contain, styles.sheetMessage]}>
                            <AntDesign name="checkcircleo" size={24} style={styles.sheetIcon} color="black" />
                            <Text style={styles.sheetMainText}>Transfer Successful</Text>
                            <Text style={styles.sheetDesc}>We make life easy for everyone with cash discount to pay for household and monthly bills. No
                                longer would you struggle. When users shop on konnect.</Text>
                            <Text style={styles.actionButton}>Print Receipt</Text>
                        </View>
                    </View>
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
        flex: 1,
        // position: 'relative'
    },
    pageTitle: {
        fontFamily: 'Space-Grotesk Bold',
        fontSize: 18
    },
    categoryTitle: {
        fontFamily: 'Space-Grotesk Medium',
        marginBottom: 5,
        fontSize: 16
    },
    tagBox: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    tag: {
        borderWidth: 1,
        borderColor: '#D0D0D0',
        backgroundColor: '#D0D0D0',
        marginRight: 5,
        marginBottom: 10,
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 50,
        fontFamily: 'Space-Grotesk Regular',
        fontSize: 15
    },
    header: {
        marginTop: 40
    },
    contain: {
        paddingHorizontal: 5
    },
    grid_flex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textArea: {
        paddingBottom: 30,
        position: 'absolute',
        left: '25%',
        bottom: '10%',
        textAlign: 'center'
    },
    label: {
        textAlign: 'center',
        marginBottom: 15,
        fontFamily: 'Space-Grotesk Regular',
    },
    formAmount: {
        fontSize: 40,
        fontFamily: 'Space-Grotesk Bold'
    },
    actionButton: {
        backgroundColor: '#1A1A1A',
        paddingVertical: 20,
        fontFamily: 'Space-Grotesk Regular',
        width: '100%',
        color: '#fff',
        borderRadius: 50,
        textAlign: 'center',
        marginTop: 30,
    },
    bottomSheet: {
        position: 'absolute',
        backgroundColor: '#fff',
        height: 400,
        bottom: 0,
        width: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    sheetMessage: {
        alignItems: 'center',
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    sheetIcon: {
        fontSize: 50,
        marginBottom: 15
    },
    sheetMainText: {
        fontFamily: 'Space-Grotesk Bold',
        fontSize: 25,
        marginBottom: 5
    },
    sheetDesc: {
        fontFamily: 'Space-Grotesk Regular',
        fontSize: 18,
        lineHeight: 25,
        textAlign: 'center'
    }
})

export default Payment;