import { StyleSheet, Text, View } from "react-native";
import { Localization } from "../../icons/Localization";

type CompanyCityProps = {
    city: string
}
export const CompanyCity = ({city}: CompanyCityProps) => {
    return(   
        <View style={styles.locality}>
            <Localization style={styles.icon} />
            <Text style={styles.textCity}>{city}</Text>
          </View>
    )
}

const styles = StyleSheet.create({
    locality: {
        flexDirection: 'row'
      },
      textCity: {
        marginLeft: 6,
        color: '#626060', 
        fontWeight: '600'
      },
      icon: {
        position: 'relative',
        top: 2
      }
})