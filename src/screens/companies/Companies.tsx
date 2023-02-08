import { memo, useContext, useEffect, useRef, useState } from "react"
import { ScrollView } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { AuthContext } from "../../context/Context"
import { CompanyItem } from "../../global/components/CompaniesTable/CompanyItem"
import { ModalizeCompany } from "../../global/components/CompaniesTable/ModalizeCompany"
import { SearchCompany } from "../../global/components/CompaniesTable/SearchCompany"
import { AddCompanyButton } from "../../global/components/modalizeCompany/AddCompanyButton"
import { sortList } from "../../global/utils/sortList"

export const Companies = ({navigation}) => {
    const { companiesList } = useContext(AuthContext)
    const [search, setSearch ] = useState('')
    const [ edit, setEdit ] = useState(false)
    const [ editItem, setEditItem ] = useState('')
    const modalizeRef = useRef(null)

    const searchList = () => {
        if(search === ''){
            return sortList(companiesList, 'nome')
        }
        return sortList(companiesList, 'nome').filter(item => item.nome.includes(search))
    }

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <AddCompanyButton onPress={() => {
                    setEditItem('')
                    setEdit(false)
                    modalizeRef.current?.open()
                }
                } />)
        })
    },[navigation])

    return(
        <>
        <ModalizeCompany modalizeRef={modalizeRef} edit={edit} data={editItem} setData={setEditItem} />
        <SearchCompany search={search} onChange={setSearch} />
        <FlatList
            data={companiesList}
            renderItem={ ({item}) => 
                <CompaniesRender  
                item={item} 
                setEditItem={setEditItem} 
                setEdit={setEdit} modalizeRef={modalizeRef}
                />}
            keyExtractor={(item, index) => index}
            removeClippedSubviews={true}
            maxToRenderPerBatch={8}
            windowSize={11}
            initialNumToRender={5}
        />
        </>
    )
}

const CompaniesRender = memo(({item, setEditItem, setEdit, modalizeRef}) => {
    return(
        <CompanyItem item={item} onPress={() => {
            setEditItem(item)
            setEdit(true)
            modalizeRef.current?.open()
        }} />
        )
    })