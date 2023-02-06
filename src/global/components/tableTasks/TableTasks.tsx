import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { Status } from "./Status";
import { CompanieRow } from "./CompanieRow";
import { Description } from "./Description";
import { Term } from "./Term";
import { memo, useCallback, useEffect, useState } from "react";
import { ButtonActiveAndDisable } from "../headerTasksFilter/ButtonActiveAndDisable";

export const TableTaks = memo(({ data }) => {
    // const [loading, setLoading] = useState(false)
    // const [ content, setContent ] = useState([])
    // const [page, setPage ] = useState(10)
    const navigation = useNavigation()
    const sortData = data.sort((a, b) => a.empresa < b.empresa ? -1 : true)
        
    // useEffect(() => {
    //     const teste = sortData.slice(0, 10)
    //     setContent(teste)
    // },[])



    // const loadContent = () => {
    //     const newContent = sortData.slice(page, page + 10)
    //     setContent([...content, ...newContent])
    // }

    return(
        <FlatList
            data={sortData}
            renderItem={ ({item}) => <TaskItem item={item} navigation={navigation} />}
            keyExtractor={(item, index) => index}
            // onEndReached={loadContent}
            // onEndReachedThreshold={0.1}
            // ListFooterComponent={<ActivityIndicator size='large'/>}
        />
    )
})

const TaskItem = memo(({item, navigation}) => {
    return(
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
})

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

