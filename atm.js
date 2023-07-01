//task ATM cash
    //const banknotes = [10, 50, 100, 200, 500, 1000, 2000, 5000]

    // function atm(cash) {
    //     8700/5000 = 1
    //       3700/2000 = 1
    //        1700/1000 = 1
    
    //   }
  
  // console.log(atm(12700));
  // {
  //   5000: 1,
  //   2000: 1,
  //   1000: 1,
  //   100: 1,
  //    50: 1,
  //   10: 2
  // }
  function atm(cash) {
    let res = {}
    banknotes.sort((a,b)=> b-a).forEach(item => {
        let count = Math.floor(cash/item)
        if (count > 0) {
            res[item] = count
            cash = cash-item*count
        } else {
            res[item] = 0
        }
    })
    return res
}