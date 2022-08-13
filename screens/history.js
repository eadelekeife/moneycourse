import React, { useState } from 'react';

import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
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
                <View style={{ flex: 1, backgroundColor: '#e4e4e4', position: 'relative', paddingBottom: 80 }}>
                    <View style={[styles.header, styles.contain, styles.grid_flex]}>
                        <View style={styles.grid_flex}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Homepage')}>
                                <AntDesign name="arrowleft" size={24} color="black" />
                            </TouchableOpacity>
                            <Text style={styles.pageTitle}>Transaction History</Text>
                        </View>
                        <Entypo name="bell" size={24} color="black" />
                    </View>
                    <View style={[styles.contain]}>
                        <View style={styles.totalAmountCover}>
                            <Text style={styles.totalAmount}>NGN 50,000,000.00</Text>
                            <Text style={styles.totalAmountDesc}>Total amount transacted</Text>
                        </View>
                        <View style={styles.flex_2}>
                            <View style={styles.block_1}>
                                <Text style={styles.blockAmount}>NGN50,000.00</Text>
                                <Text style={styles.blockDesc}>This month</Text>
                            </View>
                            <View style={styles.block_2}>
                                <Text style={styles.blockAmount}>NGN50,000.00</Text>
                                <Text style={styles.blockDesc}>This month</Text>
                            </View>
                        </View>
                        <View style={styles.flex_2}>
                            <View style={styles.block_3}>
                                <Text style={styles.blockAmount}>NGN50,000.00</Text>
                                <Text style={styles.blockDesc}>This month</Text>
                            </View>
                            <View style={styles.block_4}>
                                <Text style={styles.blockAmount}>NGN50,000.00</Text>
                                <Text style={styles.blockDesc}>This month</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.actionButton}>New Transaction</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.contain}>
                        <View style={[styles.grid_flex, { marginBottom: 10, marginTop: 10 }]}>
                            <Text style={styles.tileHeader}>Transactions</Text>
                        </View>
                        <View style={styles.grid_block}>
                            <View style={styles.grid_flex}>
                                <View style={styles.historyGrid}>
                                    <View style={styles.avatar}>

                                    </View>
                                    <View>
                                        <Text style={styles.boldFont}>Sitty Maymunah</Text>
                                        <View style={styles.historyGrid}>
                                            <Text style={styles.pheripheral}>08: 23 AM</Text>
                                            <Text style={[styles.pheripheral, { marginLeft: 10 }]}>&bull; Payment Received</Text>
                                        </View>
                                    </View>
                                </View>
                                <Text style={styles.amount}>+NGN 5,000.00</Text>
                            </View>
                        </View>
                        <View style={styles.grid_block}>
                            <View style={styles.grid_flex}>
                                <View style={styles.historyGrid}>
                                    <View style={styles.avatar}>

                                    </View>
                                    <View>
                                        <Text style={styles.boldFont}>Sitty Maymunah</Text>
                                        <View style={styles.historyGrid}>
                                            <Text style={styles.pheripheral}>08: 23 AM</Text>
                                            <Text style={[styles.pheripheral, { marginLeft: 10 }]}>&bull; Payment Received</Text>
                                        </View>
                                    </View>
                                </View>
                                <Text style={styles.amount}>+NGN 5,000.00</Text>
                            </View>
                        </View>
                        <View style={styles.grid_block}>
                            <View style={styles.grid_flex}>
                                <View style={styles.historyGrid}>
                                    <View style={styles.avatar}>

                                    </View>
                                    <View>
                                        <Text style={styles.boldFont}>Sitty Maymunah</Text>
                                        <View style={styles.historyGrid}>
                                            <Text style={styles.pheripheral}>08: 23 AM</Text>
                                            <Text style={[styles.pheripheral, { marginLeft: 10 }]}>&bull; Payment Received</Text>
                                        </View>
                                    </View>
                                </View>
                                <Text style={styles.amount}>+NGN 5,000.00</Text>
                            </View>
                        </View>
                        <View style={styles.grid_block}>
                            <View style={styles.grid_flex}>
                                <View style={styles.historyGrid}>
                                    <View style={styles.avatar}>

                                    </View>
                                    <View>
                                        <Text style={styles.boldFont}>Sitty Maymunah</Text>
                                        <View style={styles.historyGrid}>
                                            <Text style={styles.pheripheral}>08: 23 AM</Text>
                                            <Text style={[styles.pheripheral, { marginLeft: 10 }]}>&bull; Payment Received</Text>
                                        </View>
                                    </View>
                                </View>
                                <Text style={styles.amount}>+NGN 5,000.00</Text>
                            </View>
                        </View>
                        <View style={styles.grid_block}>
                            <View style={styles.grid_flex}>
                                <View style={styles.historyGrid}>
                                    <View style={styles.avatar}>

                                    </View>
                                    <View>
                                        <Text style={styles.boldFont}>Sitty Maymunah</Text>
                                        <View style={styles.historyGrid}>
                                            <Text style={styles.pheripheral}>08: 23 AM</Text>
                                            <Text style={[styles.pheripheral, { marginLeft: 10 }]}>&bull; Payment Received</Text>
                                        </View>
                                    </View>
                                </View>
                                <Text style={styles.amount}>+NGN 5,000.00</Text>
                            </View>
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
        position: 'relative'
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
    header: {
        marginTop: 40
    },
    contain: {
        paddingHorizontal: 5
    },
    chart: {
        marginBottom: 30,
        padding: 0,
        paddingTop: 20,
        borderRadius: 20,
        backgroundColor: 'green',
        width: '100%',
        overflow: 'hidden'
    },
    grid_flex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    avatar: {
        height: 70,
        width: 70,
        borderRadius: 50,
        marginRight: 10,
        backgroundColor: '#E4E4E4'
    },
    iconDisplayBox: {
        flex: 1,
        textAlign: 'center'
    },
    iconDisplay: {
        backgroundColor: '#D0D0D0',
        height: 60,
        width: 60,
        borderRadius: 50,
        textAlign: 'center',
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    historyGrid: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    grid_block: {
        marginBottom: 15
    },
    tileHeader: {
        fontSize: 18,
        fontFamily: 'Space-Grotesk Bold'
    },
    boldFont: {
        fontSize: 17,
        fontFamily: 'Space-Grotesk Medium',
        marginBottom: 5
    },
    pheripheral: {
        fontSize: 14,
        color: 'rgba(0,0,0,.5)',
        fontFamily: 'Space-Grotesk Regular'
    },
    amount: {
        fontSize: 16,
        fontFamily: 'Space-Grotesk Medium',
    },
    flex_2: {
        flexDirection: 'row'
    },
    block_1: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 30,
        borderRadius: 4,
        backgroundColor: '#0D60D8',
        marginRight: 5,
        marginBottom: 10
    },
    block_2: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 30,
        borderRadius: 4,
        backgroundColor: '#7E1CE6',
        marginBottom: 10
    },
    block_3: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 30,
        borderRadius: 4,
        backgroundColor: '#222222',
        marginRight: 5
    },
    block_4: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 30,
        borderRadius: 4,
        backgroundColor: '#6A39DE'
    },
    blockDesc: {
        color: '#c9c9c9',
        fontFamily: 'Space-Grotesk Regular'
    },
    blockAmount: {
        color: '#ffffff',
        fontFamily: 'Space-Grotesk Bold',
        fontSize: 18
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
    totalAmount: {
        fontFamily: 'Space-Grotesk Bold',
        fontSize: 25,
        textAlign: 'center'
    },
    totalAmountDesc: {
        color: 'rgba(0,0,0,.5)',
        fontFamily: 'Space-Grotesk Regular',
        textAlign: 'center',
        fontSize: 16
    },
    totalAmountCover: {
        textAlign: 'center',
        marginTop: 35,
        marginBottom: 25
    }
})

export default Payment;