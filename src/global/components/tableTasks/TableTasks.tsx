import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, TouchableHighlightBase, TouchableNativeFeedback, TouchableOpacity, TouchableOpacityBase, TouchableOpacityComponent, TouchableWithoutFeedback, View } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { Status } from "./Status";
import { CompanieRow } from "./CompanieRow";
import { Description } from "./Description";
import { Term } from "./Term";
import React, { memo, useEffect, useState } from "react";

export const TableTaks = memo(({ data, page, setPage }) => {
    const [ content, setContent ] = useState([])
    const navigation = useNavigation()
    
    const MemoizedTasks = React.memo(TaskItem)

    useEffect(() => {
        if(data){
            setContent([...content, ...data])
        }
    },[data])

    const loadContent = () => {
        setPage(page + 1)
    }

    return(
        <FlatList
            data={content}
            renderItem={ (props) => <MemoizedTasks {...props} item={props.item} navigation={navigation} />}
            keyExtractor={(item, index) => index}
            removeClippedSubviews={true}
            maxToRenderPerBatch={8}
            windowSize={11}
            initialNumToRender={5}
            onEndReached={loadContent}
            onEndReachedThreshold={0.1}
            ListFooterComponent={<ActivityIndicator size='large'/>}
        />

    )
})

const TaskItem = ({item, navigation}) => {
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

