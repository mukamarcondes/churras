import { Image, StyleSheet } from "react-native";
import { View } from "react-native";

export default function BoiImage() {
    return (
        <View style={styles.containerBoi}>
            <Image style={styles.boi} source={require('../../../assets/boi.png')} />
        </View>
    )

}
const styles = StyleSheet.create({
    containerBoi: {
        width: 266,
        alignItems: 'flex-end'
    },
    boi: {
        height: 30,
        width: 30,

    },

})