import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const Item = ({ title }) => (
    <View style={{ width: "33%", height: 50 }}>
        <Text style={{ width: "80%", height: 50 }}>{title}</Text>
        <Text style={{ width: "20%", height: 50 }}></Text>
    </View>
);

const App = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} style={{ width: 50, height: 50 }}/>
    );

    return (

        <View>
            <View style={styles.viewStyle}>
                <Text>
                    Some text
                </Text>
            </View>
            <View style={styles.container}>
            <View style={styles.element}><Text>Egemen - 1</Text></View>
            <View style={styles.element}><Text>Egemen - 2</Text></View>
            <View style={styles.element}><Text>Egemen - 3</Text></View>
        </View>
            </View>
        // <SafeAreaView style={styles.container}>
        //     <FlatList
        //         numColumns={3}
        //         data={DATA}
        //         renderItem={renderItem}
        //         keyExtractor={item => item.id}
        //     />
        // </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#F5FCFF',
       // borderWidth: 1,
        marginTop: 44,
    },
    element: {
        margin: 5,
       // borderWidth: 1,
        padding: 10,
        height: 50,
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