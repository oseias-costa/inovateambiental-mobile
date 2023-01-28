import { StyleSheet, Text, View } from "react-native/"

export const NumbersBlock = ({number, text}) => {
    return(
        <View style={styles.numbers}>
            <Text style={styles.subTitle}>{text}</Text>
            <Text style={styles.numbersText}>{number}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    numbers: {
        width: 90, 
        height: 110, 
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        margin: 10,
        alignItens: 'center',
        borderWidth: 1,
        borderColor: '#D4D4D4'
      },
      numbersText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#414141'
      },
      subTitle: {
        fontSize: 10,
        textTransform: 'uppercase',
        color: '#414141',
        marginBottom: 10
      }, 
})