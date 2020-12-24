import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Image } from 'react-native';


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        image: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        image: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        image: require('./../../assets/rain.png'),
    },
];

const renderItem = ({ item }) => (
    console.log('item', item),
        <View style={{ height: 100, width: 100, backgroundColor: 'red' }}>
            <Image source={item.image} style={{ height: 50, width: 50 }}/>
            <Text />
        </View>
);

const App = () => {
    return (
        <View style={styles.wholeStyle}>
            <FlatList
                numColumns={3}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{ flex: 1 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wholeStyle: {
        flex: 1,
        backgroundColor: 'pink',
    },
    headerStyle: {
        fontFamily:'Roboto',
        fontSize:'30px',
        color:'#02A4ED',
        fontWeight: 'bold'
    },
    viewStyle: {
        paddingTop:'5%',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
       // borderWidth: 1,
    },
    element: {
       // borderWidth: 1,
        padding: 10,
    },
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
