import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Fonts from 'expo-font';
import AppLoading from 'expo-app-loading';

import { Ionicons, AntDesign, FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

const getFonts = () => {
    return Fonts.loadAsync({
        'Space-Grotesk Regular': require('../assets/fonts/spacegrotesk/SpaceGrotesk-Regular.otf'),
        'Space-Grotesk Medium': require('../assets/fonts/spacegrotesk/SpaceGrotesk-Medium.otf'),
        'Space-Grotesk Bold': require('../assets/fonts/spacegrotesk/SpaceGrotesk-Bold.otf'),
        'Space-Grotesk Light': require('../assets/fonts/spacegrotesk/SpaceGrotesk-Light.otf'),
    })
}

const Homepage = props => {
    const [fontLoading, setFontLoading] = useState(false);
    if (fontLoading) {
        return (
            <View style={styles.mainTab}>
                <View>
                    <View style={[styles.header, styles.contain, styles.grid_flex]}>
                        <View style={styles.historyGrid}>
                            <View style={styles.userAvatar}>
                                <Image style={styles.userAvatarImage} source={require('../assets/homepage/headshot.jpg')} />
                            </View>
                            <View>
                                <Text>Hello there,</Text>
                                <Text>Adeleke Ifeoluwase</Text>
                            </View>
                        </View>
                        <Entypo name="bell" size={24} color="black" />
                    </View>
                </View>
                <ScrollView>
                    <View
                        // colors={['#E4E4E4', '#FFFFFF']}
                        // start={{
                        //     x: 0,
                        //     y: 1
                        // }}
                        // end={{
                        //     x: 1,
                        //     y: 0
                        // }} 
                        style={styles.box}>
                        {/* <Image source={require('../assets/homepage/dashboard.jpg')} style={styles.banner} /> */}
                        <View style={styles.contain}>
                            <View>
                                <Text style={styles.pageTitle}>Total Balance</Text>
                                <Text style={styles.pageDescription}>NGN 5,252,031.00</Text>
                            </View>
                            <View style={styles.dashBoard}></View>
                            <View style={styles.iconBar}>
                                <View style={styles.iconDisplayBox}>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate('Payment')}
                                    >
                                        <View style={styles.iconDisplay}>
                                            <Ionicons name="ios-wallet-outline" size={24} style={styles.icon} color="black" />
                                        </View>
                                        <Text style={styles.iconText}>Top up</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.iconDisplayBox}>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate('History')}>
                                        <View style={styles.iconDisplay}>
                                            <MaterialCommunityIcons name="history" size={24} style={styles.icon} color="black" />
                                        </View>
                                        <Text style={styles.iconText}>Recent</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.iconDisplayBox}>
                                    <View style={styles.iconDisplay}>
                                        <Ionicons name="download-outline" size={24} style={styles.icon} color="black" />
                                    </View>
                                    <Text style={styles.iconText}>Request</Text>
                                </View>
                                <View style={styles.iconDisplayBox}>
                                    <View style={styles.iconDisplay}>
                                        <AntDesign name="qrcode" size={24} style={styles.icon} color="black" />
                                    </View>
                                    <Text style={styles.iconText}>Scan QR</Text>
                                </View>
                                <View style={styles.iconDisplayBox}>
                                    <View style={styles.iconDisplay}>
                                        <Ionicons name="log-out-outline" size={24} style={styles.icon} color="black" />
                                    </View>
                                    <Text style={styles.iconText}>Log Out</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={styles.contain}>
                            <View>
                                <View style={[styles.grid_flex, { marginBottom: 10, marginTop: 10 }]}>
                                    <Text style={styles.tileHeader}>Transactions</Text>
                                    <Text style={styles.pheripheral}>View all</Text>
                                </View>
                                <View>
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
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <View style={styles.footerDivCover}>
                        <Ionicons name="md-home-outline" size={24} color="white" />
                        <Text style={styles.footerText}>Home</Text>
                    </View>
                    <View style={styles.footerDivCover}>
                        <Ionicons name="wallet-outline" size={24} color="white" />
                        <Text style={styles.footerText}>New Transaction</Text>
                    </View>
                    <View style={styles.footerDivCover}>
                        <FontAwesome name="user-o" size={24} color="white" />
                        <Text style={styles.footerText}>Vendor Information</Text>
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
        flex: 1
    },
    header: {
        marginTop: 40,
        paddingBottom: 10
    },
    userAvatar: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginRight: 10,
        backgroundColor: '#fff'
    },
    userAvatarImage: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginRight: 10,
    },
    pageTitle: {
        fontFamily: 'Space-Grotesk Regular',
        color: 'rgba(0,0,0,.5)',
        fontSize: 18
    },
    pageDescription: {
        fontFamily: 'Space-Grotesk Bold',
        fontSize: 25
    },
    box: {
        width: '100%',
        paddingVertical: 30,
        backgroundColor: '#e4e4e4'
        // height: 400
    },
    dashBoard: {
        backgroundColor: '#1A1A1A',
        height: 200,
        marginTop: 25,
        borderRadius: 8,
        marginBottom: 30
    },
    contain: {
        paddingHorizontal: 5
    },
    banner: {
        height: 350,
        width: '100%',
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10
    },
    grid_flex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
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
    iconBar: {
        flexDirection: 'row'
    },
    iconText: {
        textAlign: 'center',
        fontFamily: 'Space-Grotesk Regular'
    },
    historyGrid: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        height: 70,
        width: 70,
        borderRadius: 50,
        marginRight: 10,
        backgroundColor: '#E4E4E4'
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
    footer: {
        position: 'absolute',
        width: '100%',
        backgroundColor: '#1A1A1A',
        bottom: 0,
        flexDirection: 'row',
        paddingVertical: 15
    },
    footerDivCover: {
        flex: 1,
        alignItems: 'center'
    },
    footerText: {
        marginTop: 5,
        color: '#fff'
    }
})

export default Homepage;