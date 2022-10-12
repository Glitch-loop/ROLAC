import {useContext} from 'react';
import {BAMXContext} from '../../contexts/BAMXContext';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {Button} from "@rneui/themed"
import Toast from 'react-native-root-toast';

const CCItem = ({params}) => {
    const {delD, addUser} = useContext(BAMXContext);

    const {name, address, id, email, data} = params;

    return(
        <View style={styles.card}>
            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonFlex}>
                    <Button
                        onPress={() => {addUser(email, data, id);Toast.show("Centro de Acopio Aceptado")}}
                        title="Aceptar"
                        buttonStyle={styles.btnA}
                        titleStyle={styles.btnT}
                    />
                    <Button
                        title="Rechazar"
                        onPress={() => {delD(id);Toast.show("Centro de Acopio Borrado")}}
                        buttonStyle={styles.btnR}
                        titleStyle={styles.btnT}
                    />
                </View>
            </View>
        </View>
    )
}

const screen = Dimensions.get("screen");

const styles = StyleSheet.create({
    card:{
        width: screen.width * .9,
        height: screen.height * .20,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: "white",
        flex:1,
        flexWrap: "wrap",
        alignContent: "space-between"
    },
    info:{
        width: "50%",
        height: "100%"
    },
    name:{
        fontSize: screen.fontScale * 30,
        fontWeight: "500",
        marginLeft: 5
    },
    address:{
        marginLeft: 5
    },
    buttonContainer:{
        width: "40%",
        height: "100%"
    },
    buttonFlex:{
        width: "100%",
        height: "100%",
        flex:1, 
        justifyContent: "space-around",
        alignItems: "center"
    },
    btnA:{
        width: "100%",
        minWidth: screen.width * .3,
        maxWidth: screen.width * .3,
        borderRadius: 10
    },
    btnR:{
        width: "100%",
        minWidth: screen.width * .3,
        maxWidth: screen.width * .3,
        borderRadius: 10,
        backgroundColor: "red"
    },
    btnT:{
        fontSize: screen.fontScale * 15
    }
})

export default CCItem;