import { Modalize } from "react-native-modalize"
import { Alert, Dimensions, StyleSheet, Text, View } from "react-native"
import { HeadModalize } from "../globalStyles/HeadModalize"
import { SubtitleWithIcon } from "../globalStyles/SubtitleWithIcon"
import { FactoryIcon } from "../../icons/FactoryIcon"
import { InputItem } from "../globalStyles/InputItem"
import { useEffect, useState } from "react"
import database from '@react-native-firebase/database'
import { Localization } from "../../icons/Localization"
import { ButtonActiveAndDisable } from "../headerTasksFilter/ButtonActiveAndDisable"
import { ErrorMessage } from "../globalStyles/ErrorMessage"
import { Loading } from "../globalStyles/Loading"
import { ScrollView } from "react-native-gesture-handler"
const { width, height } = Dimensions.get('screen')



export const ModalizeCompany = ({ modalizeRef, edit, data, setData }) => {

    const [ err, setErr ] = useState('')
    const [ loading, setLoading ] = useState('')
    const newReference = database().ref('empresas').push()

    const add = () => {
        if(data.empresa === ''){
            setErr('O campo empresa é obrigatório')
        } else {
            setLoading(true)
            newReference.set({...data, id: newReference.key})
            modalizeRef.current?.close()
            setLoading(false)
        }
    }

    const editItem = () => {
        if(data.empresa === '' || data.id === undefined){
            setErr('O campo empresa é obrigatório')
        } else {
            setLoading(true)
            database().ref(`empresas/${data.id}`).update({...data})
            modalizeRef.current?.close()
            setLoading(false)
        }
    }

    const deleteItem = () => {
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
                  database().ref(`empresas/${data.id}`).remove()
                  modalizeRef.current?.close()
                  setLoading(false)
                }
              }
            ]
          )
    }

    useEffect(() => {
        if(data.empresa !== '' ){
            setErr('')
        }
    }, [data])

    
    return(
        <Modalize
            ref={modalizeRef}
            modalHeight={height / 1.55}
            snapPoint={height / 2}
        >
        <HeadModalize text={edit ? 'Editar' : 'Adicionar'} />
        <ScrollView nestedScrollEnabled={true}>
        <View style={styles.container}>
            <Loading visible={loading} />
            <SubtitleWithIcon icon={<FactoryIcon size="22" />} label='Empresa'/>
            <InputItem 
                onChangeText={item => setData({...data, nome: item})} 
                content={data.nome}
            />

            <SubtitleWithIcon icon={<FactoryIcon size="22" />} label='CNPJ'/>
            <InputItem 
              onChangeText={item => setData({...data, cnpj: item})} 
              content={data.cnpj}
            />

            <SubtitleWithIcon icon={<Localization size={22} />} label='Cidade'/>
            <InputItem 
                onChangeText={item => setData({...data, cidade: item})} 
                content={data.cidade}
            />
            {edit ? (
            <>
                <ButtonActiveAndDisable active={true} label={'Editar'} onPress={editItem}/>
                <ErrorMessage err={err} />
                <ButtonActiveAndDisable active={false} label='Excluir' onPress={deleteItem} />
            </> 
            ) : (
            <>
                <ButtonActiveAndDisable active={true} label={'Adicionar'} onPress={add} />
                <ErrorMessage err={err} />
            </>
            )}
        </View>
        </ScrollView>
        </Modalize>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginBottom: 20,
        paddingHorizontal: 20
    }
})

