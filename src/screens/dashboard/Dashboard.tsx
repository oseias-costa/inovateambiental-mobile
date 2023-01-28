import { useContext } from "react"
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native"
import { AuthContext } from "../../context/Context"
import { WhiteLogo } from "../../global/icons/WhiteLogo"
import { useGetItensByYearAndType } from "../../hooks/useGetItensByYearAndType"
import { ChartBar } from "./components/ChartBar"
import { ChartLine } from "./components/ChartLine"
import { CustomButtom } from "./components/CustomButtom"
import { NumbersBlock } from "./components/NumbersBlock"
import { Welcome } from "./components/Welcome"

export const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [list, typeTask, setTypeTask, yearChart, 
        setYearChart, total, pendentes, parcial] = useGetItensByYearAndType()

        let newYear = []
        const resultado = list?.map(item => {
          newYear.includes(item.ano) || newYear.push(item.ano)
        })
      
        const filterYear = list?.filter(item => item.ano?.toString().includes(yearChart))
        const numberDisplay = (num) => num !== undefined ? num : 0
        list?.sort((a, b) => a.ano - b.ano)
        
          return(
        <ScrollView>
            <SafeAreaView>
                <View style={styles.blueContainer}>
                    <WhiteLogo width={360} height={90} />
                    <Welcome user={user?.nome} />
                <View style={styles.setType}>

                    <CustomButtom onPress={() => {
                          setTypeTask('lo')
                          setYearChart(2023) }} 
                        status={typeTask} title='Licenças Operacionais'
                        id='lo'  />
                    <CustomButtom onPress={() => {
                            setTypeTask('atividades')
                            setYearChart(2023) }} 
                        status={typeTask} title='Atividades'
                        id='atividades' />

                      { newYear?.map( item => {
                            return( 
                            <CustomButtom  onPress={() => {setYearChart(item)}} 
                                title={item} key={item}
                                id={item} status={yearChart}  />)
                            })
                        } 
                    </View>
                </View>
                <View style={styles.numbersBlock}>
                    <NumbersBlock text='Total' number={numberDisplay(total)} />
                    <NumbersBlock text='Pendente' number={numberDisplay(pendentes)} />
                    <NumbersBlock text='Parcial' number={numberDisplay(parcial)} />
                </View>
                <View style={{alignItems: 'center', position: 'relative', bottom: 33}}>
                    <ChartLine filterYear={filterYear} />
                    <ChartBar filterYear={filterYear} />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    blueContainer: {
        backgroundColor: '#00264B',
        alignItems: 'center',
        paddingBottom: 70,
        paddingTop: 15
      },
    setType: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 15,
        marginBottom: 10
      },
    numbersBlock: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        height: 100,
        position: 'relative',
        bottom: 60
      },  
})