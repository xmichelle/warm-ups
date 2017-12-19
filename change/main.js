function giveChange(amount) {
  const bills = [100, 50, 20, 10, 5, 1]
  let change =[]

  for (let i = 0; i < bills.length; i++) {
    if (amount >= bills[i]) {
      let numBills = Math.floor(amount / bills[i])
      change.push(numBills)
      amount -= numBills * bills[i]
    }
    else {
      change.push(0)
    }
  }
  return change.reverse()
}
