import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Image } from 'react-native';
import Slider from '@react-native-community/slider';

const DATAFIRSTROW = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        image: require('./../../assets/bird.png'),
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        image: require('./../../assets/thunder.png'),
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        image: require('./../../assets/rainy.png'),
    },
];

const DATASECONDROW = [
    {
        id: '1',
        title: 'First Item',
        image: require('./../../assets/forest.png'),
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        image: require('./../../assets/dryer.png'),
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        image: require('./../../assets/vacuum-cleaner.png'),
    },
];

const DATATHIRDROW = [
    {
        id: '1',
        title: 'First Item',
        image: require('./../../assets/wave.png'),
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        image: require('./../../assets/dryer.png'),
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        image: require('./../../assets/water-drop.png'),
    },
];

const DATAFOURTHROW = [
    {
        id: '1',
        title: 'First Item',
        image: require('./../../assets/noise-pollution.png'),
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        image: require('./../../assets/talking.png'),
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        image: require('./../../assets/snow-ball.png'),
    },
];

const DATAFIFTHROW = [
    {
        id: '1',
        title: 'First Item',
        image: require('./../../assets/bonfire.png'),
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        image: require('./../../assets/talking.png'),
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        image: require('./../../assets/snow-ball.png'),
    },
];




const renderItem = ({ item }) => (
    console.log('item', item),
        <View
            style={styles.item}
            // style={{ height: 100, width: 100, alignItems:"center", backgroundColor: 'white' }}
        >
            <Image source={item.image} style={{ height: 50, width: 50 }}/>
            <Text />
        </View>
);

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.wholeStyle}>
            <FlatList
                numColumns={3}
                data={DATAFIRSTROW}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{ flex: 1 }}
            />
        </View>
            <View style={styles.wholeStyleSecondRow}>
            <FlatList
                numColumns={3}
                data={DATASECONDROW}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{ flex: 1 }}
            />
        </View>
            <View style={styles.wholeStyleSecondRow}>
                <FlatList
                    numColumns={3}
                    data={DATATHIRDROW}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={{ flex: 1 }}
                />
            </View>
            <View style={styles.wholeStyleSecondRow}>
                <FlatList
                    numColumns={3}
                    data={DATAFOURTHROW}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={{ flex: 1 }}
                />
            </View>
            <View style={styles.wholeStyleSecondRow}>
                <FlatList
                    numColumns={3}
                    data={DATAFIFTHROW}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={{ flex: 1 }}
                />
            </View>
            <View>
                <Slider
                    style={{width: 200, height: 40}}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                />
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        height: 100,
        width: 100,
        alignItems:"center",
        backgroundColor: 'white',
        // backgroundColor: '#f9c2ff',
        padding: 4,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    wholeStyle: {
        // paddingTop: '1%',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
    },

    wholeStyleSecondRow: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
    },
    headerStyle: {
        fontFamily:'Roboto',
        fontSize:'30px',
        color:'red',
        fontWeight: 'bold'
    },
    viewStyle: {
         // paddingTop:'1%',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    element: {
       // borderWidth: 1,
       //  padding: 2,
    },
    slider: {
        height: 30,
        marginLeft: 7,
    }
    // container: {
    //     flex: 1,
    //     padding: '20%',
    //     marginTop: 20,
    //     marginLeft: 40,
    // },
    // item: {
    //     backgroundColor: '#f9c2ff',
    //     padding: 20,
    //     marginVertical: 8,
    //     marginHorizontal: 16,
    // },
    // title: {
    //     fontSize: 32,
    // },
});

export default App;
