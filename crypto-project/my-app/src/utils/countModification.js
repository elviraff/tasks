
export const countModification = (number) => {
    if (+number != 'NaN') {
        return parseInt(number * 100) / 100
    }
   else return number
}


