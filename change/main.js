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


// Another function that returns the change using template literal

function giveChange2(amount) {
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
  const orderedChange = change.reverse()
  return `Your change is
  $1 bills: ${orderedChange[0]}
  $5 bills: ${orderedChange[1]}
  $10 bills: ${orderedChange[2]}
  $20 bills: ${orderedChange[3]}
  $50 bills: ${orderedChange[4]}
  $100 bills: ${orderedChange[5]}
  `
}
