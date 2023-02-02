import { ScrollView, StyleSheet } from "react-native"
import { FactoryIcon } from "../../icons/FactoryIcon"
import { ProfileIcon } from "../../icons/ProfileIcon"
import { SituationEdit } from "../../icons/SituationEdit"
import { TaskEdit } from "../../icons/TaskEdit"
import { ContainerItem } from "../globalStyles/ContainerItem"
import { CustomButton } from "../globalStyles/CustomButton"
import { InputItem } from "../globalStyles/InputItem"
import { SelectItens } from "../globalStyles/SelectItens"
import { SubtitleWithIcon } from "../globalStyles/SubtitleWithIcon"
import { TitleTop } from "../globalStyles/TitleTop"

export const AddTask = () => {
    return(
        <ScrollView>
            <ContainerItem>
                <TitleTop title='Adicionar' />

                <SubtitleWithIcon label='Empresa' icon={<FactoryIcon size='20'/>} />
                <SelectItens placeholder='Empresa' data={['Valioze', 'Marketing a2']} />

                <SubtitleWithIcon label='Responsável' icon={<ProfileIcon size='18'/>} />
                <SelectItens placeholder='Responsável' data={['Oséias', 'Allan']} />
                
                <SubtitleWithIcon label='Atividade' icon={<TaskEdit size='20' color=''/>} />
                <InputItem content='teste' onChangeText={console.log} />

                <SubtitleWithIcon label='Situação' icon={<SituationEdit size='20' color=''/>} />
                <InputItem content='Situação' onChangeText={console.log} />
                
                <CustomButton active={true} label='Adicionar' onPress={console.log('clicado')} />
            </ContainerItem>
        </ScrollView>
    )
} 