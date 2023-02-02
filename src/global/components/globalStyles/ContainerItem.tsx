import { StyleSheet, View } from "react-native"

export const ContainerItem = ({children}) => {
    return(
        <View style={styles.containerItem}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        borderColor: '#D4D4D4',
        borderWidth: 1,
        paddingLeft: 20,
        paddingRight:20,
        paddingBottom: 15,
        paddingTop: 15,
        backgroundColor: '#FFF',
        borderRadius: 20,
        marginTop: 12,
        marginHorizontal: 12
      }
})