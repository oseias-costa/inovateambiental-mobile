
 export const filterList = (arr, filtered) =>
  arr?.filter(
    (item) =>
      { return item.realizado?.includes(filtered.status) &&
      item.empresa?.includes(filtered.companie) &&
      item.responsavel?.includes(filtered.responsible) &&
      item.mes?.includes(filtered.month) &&
      item.ano?.toString().includes(filtered.year) }
  );

  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ]
  const today = new Date()
  const month = today.getMonth()
  export const currentMonth = months[month] 