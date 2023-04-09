// Tribonachi:
//0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81
    function Tribonachi(n) {
        let a = 0
        let b = 0
        let c = 1
        for (let i = 3; i<=n; i++) {
            let d = a+b+c
            a=b
            b=c
            c=d
        }
        return c
    }

//[is-every-value-in-the-array-an-array](https://www.codewars.com/kata/is-every-value-in-the-array-an-array)
    const arrCheck = value => {
        let status = true
        for (let item of value ){
            (Array.isArray(item) && status == true) ? status = true : status = false
        }
        return status
    }

//[magic-index](https://www.codewars.com/kata/magic-index)
    function findMagic(arr){
        let i = 0
        while (i < arr.length) {
            if (arr[i] == i) {
            return i
            }
            else i++
        }
        return -1
    }

//[Two Sum](https://www.codewars.com/kata/52c31f8e6605bcc646000082)
    function twoSum(numbers, target) {
        let result = []
        let j = 0
        let i
        while (j<numbers.length) {
            i = j+1
            while (i<numbers.length){
                if (numbers[i] + numbers[j] == target) {
                result.push(i, j);
                return result
            }
            else i++
            }
            j++
        }     
        return -1    
    }