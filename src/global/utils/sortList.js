
export const sortList = (data, field) => {
    const sortData = data.sort((a, b) => a[field] < b[field] ? -1 : true)
    return sortData
}