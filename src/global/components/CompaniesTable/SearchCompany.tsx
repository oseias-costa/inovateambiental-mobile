import { StyleSheet, View } from "react-native"
import { SearchIcon } from "../../icons/SearchIcon"
import { InputItem } from "../globalStyles/InputItem"
import { SubtitleWithIcon } from "../globalStyles/SubtitleWithIcon"

type SearchCompanyProps = {
    search: string,
    onChange: any
}

export const SearchCompany = ({search, onChange}: SearchCompanyProps) => {
    return(
        <View style={styles.container}>
            <SubtitleWithIcon icon={<SearchIcon size={20} color='#fff'/>} label='Buscar'  color='#fff' />
            <InputItem placeholder='Digite' content={search} onChangeText={onChange}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        backgroundColor: '#00264B',
        paddingBottom: 2
    }
})