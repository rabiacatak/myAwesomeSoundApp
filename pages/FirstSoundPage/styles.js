import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerStyle: {
        fontFamily:'Roboto',
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
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default styles;
