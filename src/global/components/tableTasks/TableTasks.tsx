import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { Status } from "./Status";
import { CompanieRow } from "./CompanieRow";
import { Description } from "./Description";
import { Term } from "./Term";

export const TableTaks = ({ data }) => {

    const navigation = useNavigation()
    const sortData = data.sort((a, b) => a.empresa < b.empresa ? -1 : true)
    return(
        <ScrollView>
            { sortData?.map(item =>   (
                <TouchableOpacity onPress={() => navigation.push('Details', { item })} key={item.id}>
                <View style={styles.containerItem}>
                    <Status content={item.realizado} />
                    <CompanieRow company={item.empresa} responsible={item.responsavel} />
                    <Description text='Atividade' content={item.atividade} />
                    <Description text='Situação' content={item.situacao} />
                    <Term term={item.prazo} status={item.realizado}/>
                </View>
                </TouchableOpacity>
                 )
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        borderColor: '#D4D4D4',
        borderWidth: 1,
        paddingLeft: 20,
        paddingRight:20,
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: '#FFF',
        borderRadius: 20,
        marginTop: 12,
        marginHorizontal: 12
    }
})