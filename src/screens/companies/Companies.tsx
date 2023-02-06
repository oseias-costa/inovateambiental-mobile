import { useContext, useEffect, useRef, useState } from "react"
import { ScrollView } from "react-native"
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
        <ScrollView>
            { searchList()?.map(item => (
                <CompanyItem item={item} onPress={() => {
                    setEditItem(item)
                    setEdit(true)
                    modalizeRef.current?.open()
                }} />
                )
              )
            }
        </ScrollView>
        </>
    )
}