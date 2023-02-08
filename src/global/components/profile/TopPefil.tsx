import { Image, StyleSheet, View } from "react-native"


export const TopPefil = ({user}) => {
    console.log(user)
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={{uri : user.image}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 115,
        backgroundColor: '#00264B',
        alignItems: 'center'
    },
    img: {
        width: 130,
        height: 130,
        borderRadius: 100,
        position: 'relative',
        top: 30,
        borderColor: '#fff',
        borderWidth: 2
    }
})
