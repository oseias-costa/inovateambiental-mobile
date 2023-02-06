import { useEffect, useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import DatePicker from "react-native-date-picker"
import { CalendarEdit } from "../../icons/CalendarEdit"

export const SelectDate = ({ state, setState }) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const months = {
        Jan : '01', Feb : '02', Mar : '03',
        Apr : '04', May : '05', Jun : '06',
        Jul : '07', Aug : '08', Sep : '09',
        Oct : '10', Nov : '11', Dec : '12',
    }

    const meses = {
        '01' : 'Janeiro', '02' : 'Fevereiro', '03' : 'Março',
        '04' : 'Abril', '05' : 'Maio', '06' : 'Junho',
        '07' : 'Julho', '08' : 'Agosto', '09' : 'Setembro',
        '10' : 'Outubro', '11' : 'Novembro', '12' : 'Dezembro'
    }
    const today = new Date()
    const convertDate = new Date(date).toString().split(' ')
    const dateFromDb = `${convertDate[3]}-${months[convertDate[1]]}-${convertDate[2]}`
    const convertBr = `${convertDate[2]}/${months[convertDate[1]]}/${convertDate[3]}`

    useEffect(() => {
        setState({
            ...state,
            prazo: dateFromDb,
            ano: Number(convertDate[3]),
            mes: meses[months[convertDate[1]]]
        })
    },[date])
    
    return(
        <View style={styles.container}>
            <View style={styles.icon}>
                <CalendarEdit size='20' />
                <Text style={styles.subtitle}>Prazo</Text>
            </View>
            <TouchableOpacity  onPress={() => setOpen(true)}>
                <Text style={styles.date}>{convertBr}</Text>
            </TouchableOpacity>
            <DatePicker
                minimumDate={today} modal
                mode="date" open={open} locale='Pt-Br'
                date={today} title='Selecione o Prazo'
                onConfirm={(value) => {
                    setOpen(false)
                    setDate(value)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingTop: 15,
        marginBottom: 16,
        justifyContent: 'space-between'
    },
    subtitle: { 
        paddingBottom: 0,
        paddingLeft: 8,
        color: '#626060', 
        fontWeight: '500',
        fontSize: 14,
        position: 'relative',
        top: 1
        },
    icon: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    date: {
        fontSize: 14, 
        color: '#5686E1', 
        fontWeight: '400'
    }
})