//base
//  [even-or-odd](https://www.codewars.com/kata/even-or-odd)
    function defineEven (number) {
        return (number % 2 == 0) ? "Even" : "Odd"
    }

   //[opposite-number](https://www.codewars.com/kata/opposite-number)
    function getReverseNumber (number) {
        return(-number)
    }

    //[century-from-year](https://www.codewars.com/kata/century-from-year)
    function getCentury (year) {
      let century = Math.floor(year/100);
      return (year % 100) > 0 ? ++century : century;
   }

    //[abbreviate-a-two-word-name](https://www.codewars.com/kata/abbreviate-a-two-word-name)
    function getInitials (name) {
        let inititals, secondLetter;
        let i = 0;
        while (i < name.length) {
            if (name[i] == ' '){
                secondLetter = name[i+1]
            } ;
            i++;
        }
        return inititals = name[0].toUpperCase() + '.' + secondLetter.toUpperCase()
    }

    // [reversed-strings](https://www.codewars.com/kata/reversed-strings)
    function getReverseString (str) {
        let newStr=''
        for (let i=(str.length-1); i>=0;i--){
            newStr +=str[i]
        }
        return newStr
    }
    // str.split('').reverse().join('')

    // [credit-card-mask](https://www.codewars.com/kata/credit-card-mask)
    function maskCard(cc) {
        let newStr =''
        for (let char of cc.slice(0,-4)){
            char = '#'
            newStr +=char
        }
        return (newStr+cc.slice(-4))
    }

    //[remove-first-and-last-character](https://www.codewars.com/kata/remove-first-and-last-character)
    function removeChar(str) {
        return str.slice(1, -1)
    }

    //[create-phone-number](https://www.codewars.com/kata/create-phone-number)
    function createPhone(numbers) {
        return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(-4).join('')}`
    }

    //[How many arguments](https://www.codewars.com/kata/5c44b0b200ce187106452139)
    function countArgs() {
        return arguments.length
    }

   //[Leap Years](https://www.codewars.com/kata/526c7363236867513f0005ca)
    function leapYear() {
        return ((year % 4 == 0) && (year % 100 != 0)) || ((year % 400 == 0)) ? true : false
    }

    // [If you can't sleep, just count sheep](https://www.codewars.com/kata/5b077ebdaf15be5c7f000077)
    function countSheeps() {
        let str = ''
        for (let i=1; i<=num; i++ ){
            str += `${i} sheep...`
        }
        return str
    }

    //array
    //[sum-of-positive](https://www.codewars.com/kata/sum-of-positive)
    function positiveSum(arr) {
    let positiveArr = arr.filter(item => item>0)
    let result = positiveArr.reduce((sum, current) => sum + current, 0)
    return result
    }
    //[shortest-word](https://www.codewars.com/kata/shortest-word)
    function findShort(s){
    let arrSum = s.split(' ').map(item => {
    let sum = 0
    for (let i=0; i<item.length; i++){
    sum++
    }
    return sum
    })
    return arrSum.reduce((item, min) => {return item<min ? item : min})
    } 
    or
    function findShort(s){
        return s
          .split(' ')
          .map(a => a.length)
          .reduce((item, min) => {return item < min ? item : min})
      }

    //[x]  [list-filtering](https://www.codewars.com/kata/list-filtering) - done
    //[square-every-digit](https://www.codewars.com/kata/square-every-digit) - этой задачки нет

    //[Build a square](https://www.codewars.com/kata/59a96d71dbe3b06c0200009c)
    function generateShape(integer){
    let result = ''
    for (let j = 0; j< integer; j++){
    let str = ''
    for (let i=0; i<integer; i++){
    str += '+'
    }
    result = result + str
    if (j<integer-1) {
    result += '\n'
    }
    }
    return result
    }
    //[Friend or Foe](https://www.codewars.com/kata/55b42574ff091733d900002f)
    function friend(friends){
    return friends.filter(item => item.length == 4)
    }
    //[Smallest value of an array](https://www.codewars.com/kata/544a54fd18b8e06d240005c0)
    function min(arr, toReturn) {
    const value = arr.reduce ((min, current) => {
    if (min < current) {
    return min
    }
    else return current
    })
    if (toReturn == 'value') {
    return value
    }
    else return arr.indexOf(value)
    }
    //[find-the-capitals-1](https://www.codewars.com/kata/find-the-capitals-1)
    var capitals = function (word) {
    return word.split('').reduce((accumulator, currentValue, index) => {
    if (currentValue == currentValue.toUpperCase()) {
    accumulator.push(index)
    }
    return accumulator
    }, [])
    };
    //[insert-dashes](https://www.codewars.com/kata/insert-dashes)
    function insertDash(num) {
    return num
    .toString()
    .split('')
    .map((item, index,arr) => (item%2 != 0) && (arr[index+1] % 2 !=0)&&(index!=arr.length-1) ? `${item}-` : item)
    .join('')
    }





  