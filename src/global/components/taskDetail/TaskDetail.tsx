import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Status } from '../tableTasks/Status';
import { CompanieAndResp } from './CompanieAndResp';
import { DescriptionDetail } from './DescriptionDetail';
import { EditButtom } from './EditButtom';
import { TermDetail } from './TermDetail';
import { useNavigation } from '@react-navigation/native';

export const TaskDetail = ({ route }) => {
    const item = route.params.item
    const editItem = { ...item }
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
        <ScrollView>
                    <TouchableOpacity>
                    <View style={styles.containerItem}>
                        <Status content={item.realizado} />
                        <CompanieAndResp company={item.empresa} responsible={item.responsavel} />
                        <DescriptionDetail text='Atividade' content={item.atividade} />
                        <DescriptionDetail text='Situação' content={item.situacao} />
                        <TermDetail term={item.prazo} status={item.realizado}/>
                    </View>
                    </TouchableOpacity>
            <EditButtom onPress={() => navigation.push('Edit', { editItem })}  label='Editar' colorText='' />    
            </ScrollView>
            </View>
    )
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      height: 95,
      backgroundColor: '#00264b',
      alignItens: 'center',
      justifyContent: 'center'
    },  
    headerText: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
      position: 'relative',
      left: 150,
      top: 20
    },
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
  });