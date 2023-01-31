import { useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet} from 'react-native';
import { useGetData } from '../../../hooks/useGetData';
import { KeyAndValue } from '../../utils/KeyAndValue';
import { EditButtom } from '../taskDetail/EditButtom';
import { InputEdit } from './InputEdit';
import { SelectListEdit } from './SelectListEdit';
import database from "@react-native-firebase/database"

export const EditTask = ({route}) => {  
  const [ task, setTask ] = useState('')
    const getData = (db) => {
        const [ data ] = useGetData(db)
        const res = KeyAndValue(data, 'nome')
        return res
    }
    const companies = getData('empresas')
    const users = getData('usuarios')
    const item = route.params.editItem

    console.log(task)
    const itensData = [
        { key: 1, value: 'Pendente'},
        { key: 2, value: 'Parcial'},
        { key: 3, value: 'Realizado'}]

    const editTask = () => {
      return database().ref(`${item.db}/${item.id}`).update(task)
    }
    return(
<View style={styles.container}>
<ScrollView>
   <View style={styles.containerItem}>
    <SelectListEdit label='Status' data={itensData} setState={setTask} state={task}
      placeholder={item.realizado} propDb='realizado'/>
    <SelectListEdit label='Empresa' data={companies} setState={setTask} state={task}
      placeholder={item.empresa} propDb='empresa'/>
    <SelectListEdit label='Responsável' data={users} setState={setTask} state={task}
      placeholder={item.responsavel} propDb='responsavel'/>
    <InputEdit label='Atividade' content={item.atividade} 
    onChangeText={text => setTask({...task, atividade: text})} />
    <InputEdit label='Situação' content={item.situacao} 
      onChangeText={text => setTask({...task, situacao: text})}
    />
   </View>
    <EditButtom label='Salvar Edições' colorText='' onPress={editTask} /> 
    <EditButtom label='Excluir' colorText={true} /> 
</ScrollView>
    </View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 8,
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
    marginTop: 20,
    marginHorizontal: 20
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
marginHorizontal: 20
},
text: {
alignSelf: 'center',
color: '#FF4C4C'
}
});