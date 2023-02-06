import { useState } from 'react';
import { ScrollView, View, StyleSheet, Alert} from 'react-native';
import { useGetData } from '../../../hooks/useGetData';
import { KeyAndValue } from '../../utils/KeyAndValue';
import { EditButtom } from '../taskDetail/EditButtom';
import { InputEdit } from './InputEdit';
import { StatusEdit } from './StatusEdit';
import database from "@react-native-firebase/database"
import { CompanieAndResp } from '../taskDetail/CompanieAndResp';
import { SubtitleEdit } from './SubtitleEdit';
import { TermEdit } from './TermEdit';
import { EditButtomSend } from './EditButtomSend';
import { SituationEdit } from '../../icons/SituationEdit';
import { TaskEdit } from '../../icons/TaskEdit';
import { TitleTop } from '../globalStyles/TitleTop';
import { useNavigation } from '@react-navigation/native';
import { Loading } from '../globalStyles/Loading';

export const EditTask = ({route}) => {  
  const [ task, setTask ] = useState('')
  const [loading, setLoading ] = useState(false)
    const getData = (db) => {
        const [ data ] = useGetData(db)
        const res = KeyAndValue(data, 'nome')
        return res
    }
    const companies = getData('empresas')
    const users = getData('usuarios')
    const item = route.params.editItem
    const path = `${item.collection}/${item.id}`
    const navigation = useNavigation()

    const itensData = [
        { key: 1, value: 'Pendente'},
        { key: 2, value: 'Parcial'},
        { key: 3, value: 'Realizado'}]

    const editTask = () => {
      setLoading(true)
       database().ref(path).update(task)
       navigation.push('TaskTable') 
      setLoading(false)
    }
console.log(loading)
    const removeTask = () => {
        Alert.alert(
          'Excluir',
          'Deseja realmente excluir?',
          [
            {
              text: 'Cancelar',
              onPress: () => Alert.alert('Exclusão cancelada!')
            },
            {
              text: 'Sim',
              onPress: () => {
                setLoading(true)
                database().ref(path).remove()
                navigation.push('TaskTable') 
                setLoading(false)
              }
            }
          ]
        )
    }

    console.log('path', path)
    return(
<View style={styles.container}>
<Loading  visible={loading}/>
<ScrollView>
   <View style={styles.containerItem}>
  <TitleTop title='Editar' />
  <CompanieAndResp company={item.empresa} responsible={item.responsavel} />
    <StatusEdit label='Status' data={itensData} setState={setTask} state={task}
      placeholder={item.realizado} propDb='realizado'/>

    <SubtitleEdit label='Atividade' icon={<TaskEdit size='18' color='' />} />
    <InputEdit label='Atividade' content={item.atividade}
    onChangeText={text => setTask({...task, atividade: text})} />

    <SubtitleEdit label='Situação' icon={<SituationEdit size='18' color='' />} />
    <InputEdit label='Situação' content={item.situacao}
      onChangeText={text => setTask({...task, situacao: text})}
    />
    <TermEdit term={item.prazo} />
   </View>
    <EditButtomSend label='Editar' onPress={editTask} /> 
    <EditButtom label='Excluir' onPress={removeTask} colorText={true}/> 
</ScrollView>
    </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1
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
},
buttom: {
height: 37,
backgroundColor: '#d9d9d9',
borderColor: '#D4D4D4',
borderWidth: 1,
paddingLeft: 20,
paddingRight:20,
paddingBottom: 10,
paddingTop: 10,
borderRadius: 7,
marginTop: 10,
marginHorizontal: 12
},
text: {
alignSelf: 'center',
color: '#FF4C4C'
}
});