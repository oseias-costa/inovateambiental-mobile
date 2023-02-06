import { TouchableOpacity } from "react-native"
import { ContainerItem } from "../globalStyles/ContainerItem"
import { CompanyCity } from "./CompanyCity"
import { CompanyCnpj } from "./CompanyCnpj"
import { CompanieRow } from "./CompanyRow"

export const CompanyItem = ({item, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <ContainerItem>
                <CompanieRow company={item.nome} city={item.cidade} />
                <CompanyCnpj cnpj={item.cnpj} />
                <CompanyCity city={item.cidade} />
            </ContainerItem>
        </TouchableOpacity>
    )
} 