import { useState } from "react";
import { useGetOnData } from "./useGetOnData";

export const useGetItensByYearAndType = () => {
    const [ typeTask, setTypeTask ] = useState('atividades')
    const [ yearChart, setYearChart ] = useState(2023)
    const [ showLoading, setShowLoading ] = useState(false)
    const [ list ] = useGetOnData(typeTask)
  
    const convertYearChartOnString = yearChart.toString()
    const yearChartList = (item) => item.ano?.toString().includes(convertYearChartOnString)
    
    const total = list?.filter(item => yearChartList(item)).length 
    const pendentes = list?.filter(item => yearChartList(item) &&  item.realizado.includes('Pendente')).length
    const parcial = list?.filter(item => yearChartList(item) && item.realizado.includes('Parcial')).length
    console.log(total)
    
    return [list, typeTask, setTypeTask, yearChart, setYearChart, total, pendentes, parcial ]
}