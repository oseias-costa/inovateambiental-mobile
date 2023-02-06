import { Children } from "react"
import { StyleSheet, View } from "react-native"


export const ContainerTask = ({children, color}) => {
    return(
        <View style={styles().containerItem}>
            <View style={styles(color).sideBar}></View>
            {children}
        </View>
    )
}

const styles = (color) => StyleSheet.create({
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
      },
      sideBar: {
        backgroundColor: '#D4D4D4'
      }
})