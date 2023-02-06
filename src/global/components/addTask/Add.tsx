import { useContext, useEffect, useState } from "react"
import { Alert, ScrollView, Text } from "react-native"
import { FactoryIcon } from "../../icons/FactoryIcon"
import { ProfileIcon } from "../../icons/ProfileIcon"
import { SituationEdit } from "../../icons/SituationEdit"
import { TaskEdit } from "../../icons/TaskEdit"
import { ContainerItem } from "../globalStyles/ContainerItem"
import { CustomButton } from "../globalStyles/CustomButton"
import { InputItem } from "../globalStyles/InputItem"
import { SelectDate } from "../globalStyles/SelectDate"
import { SelectItens } from "../globalStyles/SelectItens"
import { SubtitleWithIcon } from "../globalStyles/SubtitleWithIcon"
import { TitleTop } from "../globalStyles/TitleTop"
import database from "@react-native-firebase/database"
import { AuthContext } from "../../../context/Context"
import { useNavigation } from "@react-navigation/native"
import { ErrorMessage } from "../globalStyles/ErrorMessage"
import { Loading } from "../globalStyles/Loading"

export const AddTask = ({route}: {route: any}) => {
    const db = route.params.db
    const newReference = database().ref(db).push()
    const [newTask, setNewTask ] = useState({
        realizado: 'Pendente',
        empresa: '',
        situacao: '',
        atividade: ''})
    const [err, setErr] = useState('')
    const navigation = useNavigation()
    const [loading, setLoading ] = useState(false)

    useEffect(() => {
        if(newTask.empresa !== '') {
            setErr('')
        }
    },[newTask])
    
    console.log(newReference)
    const send = () => {
        if(newTask.empresa === ''){
            setErr('O campo Empresa é obrigatório.')
        } else {
            setLoading(true)
            newReference.set({...newTask, id: newReference.key})
            .then(() => {
                setLoading(false)
                navigation.push('TaskTable')
                Alert.alert('Adicionada com sucesso')
            }).catch(err => {
                console.log(err)
                setLoading(false)
                Alert.alert('Aconteceu um erro.')
            })
        }}

        return(
            <ScrollView>
            <Loading visible={loading} />
            <ContainerItem>
                <TitleTop title='Adicionar' nav='TaskTable' />

                <SubtitleWithIcon label='Empresa' icon={<FactoryIcon size='20'/>} />
                <SelectItens 
                    placeholder='Empresa' field='empresa'
                    data={['Valioze', 'Marketing a2']} 
                    state={newTask} setState={setNewTask} 
                />

                <SubtitleWithIcon label='Responsável' icon={<ProfileIcon size='18'/>} />
                <SelectItens 
                    placeholder='Responsável' field='responsavel'
                    data={['Oséias Costa', 'Allan']} 
                    state={newTask} setState={setNewTask}
                />
                
                <SubtitleWithIcon label='Atividade' icon={<TaskEdit size='20' color=''/>} />
                <InputItem content={newTask.atividade}onChangeText={val => setNewTask({...newTask, atividade: val})} />

                <SubtitleWithIcon label='Situação' icon={<SituationEdit size='20' color=''/>} />
                <InputItem content={newTask.situacao} onChangeText={val => setNewTask({...newTask, situacao: val})} />
                <SelectDate state={newTask} setState={setNewTask} />
                
            </ContainerItem>
                <CustomButton active={true} label='Adicionar' onPress={send} />
                <ErrorMessage err={err} />
        </ScrollView>
    )
} 