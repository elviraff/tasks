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
    